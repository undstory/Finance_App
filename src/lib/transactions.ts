import { prisma } from "@/lib/prisma";

export async function getTransactions() {
  const data = prisma.transaction.findMany();
  return (await data).map((transaction) => ({
    ...transaction,
    avatarUrl: transaction.avatarUrl?.replace("./", "/"),
    date: transaction.date.toISOString().split("T")[0],
    amount: transaction.amount.toNumber(),
  }));
}
