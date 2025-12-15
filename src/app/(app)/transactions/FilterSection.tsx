"use client";

import { Select } from "@/components/ui/Select";
import Image from "next/image"
export default function FilterSection() {
    const transactionCategories = ["All transactions", "Entertainment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care", "Education", "Lifestyle", "Shopping", "General"];
    const sortByOptions = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-end items-center relative">
                <input type="text" placeholder="Search transactions" className="w-[320px] focus:outline-none border border-(--beige-500) rounded-lg py-(--space-150) pl-(--space-250) pr-(--space-500)" />
                <Image src="/assets/images/icon-search.svg" alt="search icon" width={16} height={16} className="mx-(space-200) absolute right-[14.5px] top-1/2 -translate-y-1/2"/>
            </div>

            <div className="flex justify-end items-center gap-(--space-300)">
                <Select options={sortByOptions} label="Sort By" onChange={(val) => console.log(val)} />
                <Select options={transactionCategories} label="Category" onChange={(val) => console.log(val)} />
            </div>
        </div>
    )
}