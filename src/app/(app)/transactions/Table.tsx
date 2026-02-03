
import { TableBody } from "@/components/ui/TableBody";
import { TableHeader } from "@/components/ui/TableHeader";
import { Transaction } from "@/types/transactions";

type TableType = {
    transactions: Transaction[]
}

export const Table = ({ transactions } : TableType) => {
    return (
        <table className="w-full table-fixed">
            <TableHeader />
            <TableBody transactions={transactions} />
        </table>
    )
}