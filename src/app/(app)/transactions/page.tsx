import { Transaction } from "@/types/transactions";
import TransactionsTable from "./TransactionsTable";
import { getTransactions } from "@/lib/transactions";
import { Header } from "@/components/ui/Header";


export default async function Page() {
    const transactions: Transaction[] = await getTransactions()
    return (
        <div className="bg-(--beige-100) text-(--grey-900)">
            <Header className="text-[32px] font-bold" title="Transactions" />
            <TransactionsTable transactions={transactions} />
        </div>
    )
}