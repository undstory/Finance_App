import { Transaction } from "@/types/transactions";
import TransactionsTable from "./TransactionsTable";
import { getTransactions } from "@/lib/transactions";


export default async function Page() {
    const transactions: Transaction[] = await getTransactions()
    return (
        <div className="bg-(--beige-100) text-(--grey-900)">
            <h2 className="text-[32px] font-bold">Transactions</h2>
            <TransactionsTable transactions={transactions} />
        </div>
    )
}