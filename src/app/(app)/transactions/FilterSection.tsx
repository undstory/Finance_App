import Image from "next/image"
export default function FilterSection() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-end items-center relative">
                <input type="text" placeholder="Search transactions" className="w-[320px] focus:outline-none border border-(--beige-500) rounded-lg py-(--space-150) pl-(--space-250) pr-(--space-500)" />
                <Image src="/assets/images/icon-search.svg" alt="search icon" width={16} height={16} className="mx-(space-200) absolute right-[14.5px] top-1/2 -translate-y-1/2"/>
            </div>

            <div className="flex justify-end items-center">
                <div>
                <p>SortBy</p>
                <select>Latest</select>
                </div>
                <div>
                <p>Category</p>
                <select>All transactions</select>
                </div>
            </div>
        </div>
    )
}