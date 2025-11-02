import { PrismaClient } from "@prisma/client";
import data from "./data.json";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "demo@demo.com" },
    update: {},
    create: {
      email: "demo@demo.com",
      name: "Demo User",
    },
  });

  const account = await prisma.account.create({
    data: { userId: user.id, name: "Checking", currency: "PLN" },
  });

  if (data.balance) {
    await prisma.accountSummary.create({
      data: {
        accountId: account.id,
        current: data.balance.current ?? 0,
        income: data.balance.income ?? 0,
        expenses: data.balance.expenses ?? 0,
      },
    });
  }
  if (Array.isArray(data.transactions) && data.transactions.length > 0) {
    await prisma.transaction.createMany({
      data: data.transactions.map((tx) => ({
        accountId: account.id,
        payee: tx.name,
        amount: tx.amount,
        date: new Date(tx.date),
        category: tx.category ?? null,
        recurring: Boolean(tx.recurring),
        avatarUrl: tx.avatar ?? null,
      })),
    });
  }

  if (Array.isArray(data.budgets) && data.budgets.length > 0) {
    await prisma.budget.createMany({
      data: data.budgets.map((budget) => ({
        accountId: account.id,
        category: budget.category,
        maximum: budget.maximum,
        theme: budget.theme,
      })),
    });
  }

  if (Array.isArray(data.pots) && data.pots.length > 0) {
    await prisma.pot.createMany({
      data: data.pots.map((pot) => ({
        accountId: account.id,
        name: pot.name,
        target: pot.target,
        total: pot.total,
        theme: pot.theme,
      })),
    });
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
