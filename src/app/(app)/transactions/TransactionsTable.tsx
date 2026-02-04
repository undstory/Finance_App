'use client'

import { Transaction, SortByType, CategoryType} from "@/types/transactions";
import FilterSection from "./FilterSection";
import { Table } from "./Table";
import { useState, useMemo } from "react";
import { sanity } from "@/utils/sanity";
import PaginationSection from "./PaginationSection";

type TransactionTableType = {
    transactions: Transaction[]
}

const ITEMS_PER_PAGE = 10;

export default function TransactionsTable({ transactions }: TransactionTableType) {
    const [sortBy, setSortBy] = useState<SortByType>('Latest')
    const [category, setCategory] = useState<CategoryType>('All transactions')
    const [query, setQuery] = useState<string>("")
    const [currentPage, setCurrentPage] = useState(1);


      const filteredByCategory = useMemo(() => {
        if(category === "All transactions") return transactions
        return transactions.filter((t) => t.category === category
        )

    }, [transactions, category ])

    const filteredBySearch = useMemo(() => {
        if(!query) return filteredByCategory
        return filteredByCategory.filter((t) => sanity(t.payee).includes(query))
    }, [query, filteredByCategory])

    const sortedTransactions = useMemo(() => {
        return [...filteredBySearch].sort((a, b) => {
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

    }, [filteredBySearch, sortBy ])

    const paginatedTransactions = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return sortedTransactions.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [sortedTransactions, currentPage]);

    const handlePageChange = (startIndex: number) => {
        setCurrentPage(Math.ceil((startIndex + 1) / ITEMS_PER_PAGE));
    };

    return (
        <div className="mt-(--space-500) p-(--space-400) pb-6 bg-white">
            <FilterSection setSortBy={setSortBy} setCategory={setCategory} setQuery={setQuery} />
            {paginatedTransactions.length ? <Table transactions={paginatedTransactions} /> : <div>Not found</div>}
            <PaginationSection
                transactionsLength={sortedTransactions.length}
                onPageChange={handlePageChange}
                itemsPerPage={ITEMS_PER_PAGE}
            />
        </div>
    )
}