import TransactionsTable from "./TransactionsTable";

export default async function Page() {
    return (
        <div className="bg-(--beige-100) text-(--grey-900)">
            <h2 className="text-[32px] font-bold">Transactions</h2>
            <TransactionsTable />
        </div>
    )
}