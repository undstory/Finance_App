"use client";

import FilterSection from "./FilterSection";
import { Table } from "./Table";

export default function TransactionsTable() {
    return (
        <div className="mt-(--space-500) p-(--space-400) bg-white">
            <FilterSection />
            <Table />
        </div>
    )
}