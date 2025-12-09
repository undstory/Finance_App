import Image from "next/image"
export default function FilterSection() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex justify-end items-center relative">
                <input type="text" placeholder="Search transactions" className="w-[320px] focus:outline-none border border-(--beige-500) rounded-lg py-(--space-150) pl-(--space-250) pr-(--space-500)" />
                <Image src="/assets/images/icon-search.svg" alt="search icon" width={16} height={16} className="mx-(space-200) absolute right-[14.5px] top-1/2 -translate-y-1/2"/>
            </div>

            <div className="flex justify-end items-center gap-(--space-300)">
                <div className="flex items-center gap-(--space-100) relative text-[length:var(--text-4-size)]">
                    <label className="text-[color:var(--grey-500)]">SortBy</label>
                    <select className="appearance-none border border-(--beige-500) text-(--grey-900) focus:outline-none py-(--space-150) pl-(--space-250) pr-(--space-500) rounded-lg text">
                        <option>Latest</option>
                        <option>Oldest</option>
                        <option>A to Z</option>
                        <option>Z to A</option>
                        <option>Highest</option>
                        <option>Lowest</option>
                    </select>
                    <Image src="/assets/images/icon-caret-down.svg" alt="chevron down icon" width={16} height={16} className="pointer-events-none absolute right-[14.5px] top-1/2 -translate-y-1/2"/>
                </div>
                <div className="flex items-center gap-(--space-100) relative text-[length:var(--text-4-size)]">
                    <label className="text-[color:var(--grey-500)]">Category</label>
                    <select className="appearance-none border border-(--beige-500) text-(--grey-900) focus:outline-none py-(--space-150) pl-(--space-250) pr-(--space-500) rounded-lg text">
                        <option>All transactions</option>
                        <option>Entertainment</option>
                        <option>Bills</option>
                        <option>Groceries</option>
                        <option>Dining Out</option>
                        <option>Transportation</option>
                        <option>Personal Care</option>
                        <option>Education</option>
                        <option>Lifestyle</option>
                        <option>Shopping</option>
                        <option>General</option>
                    </select>
                    <Image src="/assets/images/icon-caret-down.svg" alt="chevron down icon" width={16} height={16} className="pointer-events-none absolute right-[14.5px] top-1/2 -translate-y-1/2"/>

                </div>
            </div>
        </div>
    )
}