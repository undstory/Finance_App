"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

    const navigationItems = [
        { name: 'Overview', href: '/overview', icon: '/assets/images/icon-nav-overview.svg' },
        { name: 'Transactions', href: '/transactions', icon: '/assets/images/icon-nav-transactions.svg'},
        { name: 'Budgets', href: '/budgets', icon: '/assets/images/icon-nav-budgets.svg' },
        { name: 'Pots', href: '/pots', icon: '/assets/images/icon-nav-pots.svg' },
        { name: 'Recurring Bills', href: '/recurring-bills', icon: '/assets/images/icon-nav-recurring-bills.svg' },
    ]

export default function Sidebar () {
    const pathname = usePathname();

    const base = "flex items-center gap-4 rounded-r-lg leading-1.5 py-(--space-200) \
        pl-[calc(var(--space-200)+32px)] transition-all -ml-12 mr-6"

    return (
             <aside
                className={[
                    "h-dvh sticky top-0",
                    "bg-(--grey-900) text-(--white)",
                    "border-r border-(--grey-900)",
                    "pt-(--space-500)",
                    "pl-(--space-400)",
                ].join(" ")}
             >
                <Image src="/assets/images/logo-large.svg" alt="finance logo" width={121} height={21}
                    className="
                    pb-(--space-500)"
                />
                <nav
                    className="pt-(--space-300)
                        text-(--text-3-size)">
                    {
                    navigationItems.map((item) => {
                        const isActive = pathname === item.href;
                    return (
                        <Link key={item.name} href={item.href} className={
                            `${base} ${
                            isActive
                                ? "bg-(--white) text-(--grey-900)"
                                : "text-(--grey-300) bg-transparent"
                            } transition-colors`}
                        >
                            {item.icon && <Image src={item.icon} alt={`${item.name} icon`} width={24} height={24}  />}
                            {item.name}
                        </Link>
                    )})
                }
                </nav>
            </aside>
    )
}