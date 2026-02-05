import { Header } from "@/components/ui/Header";
import Image from "next/image";

export default async function Page() {
    return (
        <div>
            <Header className="text-[32px] font-bold" title="Reccuring bills" />
            <div className="flex flex-row mt-(--space-400) gap-[24px]">
                <div className="w-[33%] text-white p-(--space-300) bg-(--grey-900) flex flex-col rounded-lg">
                    <Image src="/assets/images/icon-recurring-bills.svg" width={40} height={40} alt="Recurring bills icon" />
                    <div className="flex flex-col gap-[11px] mt-(--space-400)">
                        <span>Total bills</span>
                        <span className="text-[32px] font-bold">$384.25</span>
                    </div>
                </div>
                <div>Hello2</div>
            </div>
        </div>
    )
}