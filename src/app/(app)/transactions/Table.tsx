

import { Transaction } from "@/types/transactions";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";


type TableType = {
    transactions: Transaction[]
}

export const Table = ({ transactions } : TableType) => {
    return (
        <table className="w-full table-fixed ">
            <TableHeader />
            <TableBody transactions={transactions} />
        </table>
    )
}