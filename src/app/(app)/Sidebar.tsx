export default function Sidebar () {
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
                <div className="text-(--text-1-size)">finance</div>
                <nav className="space-y-1 px-2">
                    <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="/overview">Overview</a>
                    <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="/transactions">Transactions</a>
                    <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="/budgets">Budgets</a>
                    <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="/pots">Pots</a>
                    <a className="block rounded px-3 py-2 hover:bg-neutral-800" href="/recurring-bills">Recuring bills</a>

                </nav>
            </aside>
    )
}