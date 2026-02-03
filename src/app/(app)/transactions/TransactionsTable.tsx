'use client'

import { Transaction, SortByType} from "@/types/transactions";
import FilterSection from "./FilterSection";
import { Table } from "./Table";
import { useState, useMemo } from "react";

type TransactionTableType = {
    transactions: Transaction[]
}

export default function TransactionsTable({ transactions }: TransactionTableType) {
    const [sortBy, setSortBy] = useState<SortByType>('Latest')

    const sortedTransactions = useMemo(() => {
        return [...transactions].sort((a, b) => {
            if(sortBy === "A to Z") {
                return a.payee.localeCompare(b.payee)
            } else if(sortBy === "Z to A") {
                return b.payee.localeCompare(a.payee)
            } else if(sortBy === "Oldest") {
                return new Date(a.date).getTime() - new Date(b.date).getTime()
            } else if(sortBy === "Highest") {
                return b.amount - a.amount
            } else if(sortBy === "Lowest") {
                return a.amount - b.amount
            }
            return new Date(b.date).getTime() - new Date(a.date).getTime()
        })

    }, [transactions, sortBy ])
    return (
        <div className="mt-(--space-500) p-(--space-400) bg-white">
            <FilterSection setSortBy={setSortBy} />
            <Table transactions={sortedTransactions} />
        </div>
    )
}