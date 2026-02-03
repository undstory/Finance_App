"use client";

import { Select } from "@/components/ui/Select";
import { CategoryType, SortByType } from "@/types/transactions";
import { sanity } from "@/utils/sanity";
import Image from "next/image"


type FilterSectionType = {
    setSortBy: React.Dispatch<React.SetStateAction<SortByType>>
    setCategory: React.Dispatch<React.SetStateAction<CategoryType>>
    setQuery: React.Dispatch<React.SetStateAction<string>>
}

export default function FilterSection({ setSortBy, setCategory, setQuery }: FilterSectionType) {

    const transactionCategories = ["All transactions", "Entertainment", "Bills", "Groceries", "Dining Out", "Transportation", "Personal Care", "Education", "Lifestyle", "Shopping", "General"];
    const sortByOptions = ["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"];

    const handleSort = (value: SortByType) => {
        setSortBy(value)
    }

    const handleCategory = (value: CategoryType) => {
        setCategory(value)
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(sanity(e.target.value))
    }

    return (
        <div className="flex justify-between items-center pb-(--space-300)">
            <div className="flex justify-end items-center relative">
                <input type="text" placeholder="Search transactions" onChange={handleSearch} className="w-[320px] focus:outline-none border border-(--beige-500) rounded-lg py-(--space-150) pl-(--space-250) pr-(--space-500)" />
                <Image src="/assets/images/icon-search.svg" alt="search icon" width={16} height={16} className="mx-(space-200) absolute right-[14.5px] top-1/2 -translate-y-1/2"/>
            </div>

            <div className="flex justify-end items-center gap-(--space-300)">
                <Select options={sortByOptions} label="Sort By"  onChange={(val: string) => handleSort(val as SortByType)} />
                <Select options={transactionCategories} label="Category" onChange={(val: string) => handleCategory(val as CategoryType)} />
            </div>
        </div>
    )
}