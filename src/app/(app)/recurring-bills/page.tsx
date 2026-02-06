import { Header } from "@/components/ui/Header";

import { getBills } from "@/lib/bills";
import TotalBills from "./TotalBills";
import Summary from "./Summary";

export default async function Page() {
    const bills  = await getBills()
    console.log(bills)
    return (
        <div>
            <Header className="text-[32px] font-bold" title="Reccuring bills" />
            <div className="flex mt-(--space-400) gap-[24px]">
            <div className="flex w-[33%] flex-col  gap-[24px]">
                <TotalBills />
                <Summary />
            </div>
                <div className="bg-white rounded-lg">Hello2</div>
                </div>
        </div>
    )
}