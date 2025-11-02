import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { parse } from "node:path";

export async function GET() {
  const transactions = await prisma.transaction.findMany({
    orderBy: { date: "desc" },
    take: 100,
  });
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { accountId, payee, category, date, amount, recurring } = data;
    const transaction = await prisma.transaction.create({
      data: {
        accountId,
        payee,
        category,
        date: new Date(date),
        amount: parseFloat(amount),
        recurring: Boolean(recurring),
      },
    });
    return NextResponse.json(transaction, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to create transaction" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json(
      { error: "Transaction ID is required" },
      { status: 400 }
    );
  }
  const exist = await prisma.transaction.findUnique({
    where: { id },
  });
  if (!exist) {
    return NextResponse.json(
      { error: "Transaction not found" },
      { status: 404 }
    );
  }
  await prisma.transaction.delete({ where: { id } });
  return NextResponse.json(
    { message: "Transaction deleted successfully" },
    { status: 200 }
  );
}
