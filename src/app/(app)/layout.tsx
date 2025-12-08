import Sidebar from "./Sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-dvh grid grid-cols-[240px_1fr] bg-neutral-50">
            <Sidebar />
            <main className="bg-(--beige-100) p-(--space-500)">
                {children}
            </main>
        </div>
    )
}