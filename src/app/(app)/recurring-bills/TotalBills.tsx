import Image from "next/image";

export default function TotalBills() {
    return (
        <div className=" text-white p-(--space-300) bg-(--grey-900) flex flex-col rounded-lg">
            <Image src="/assets/images/icon-recurring-bills.svg" width={40} height={40} alt="Recurring bills icon" />
            <div className="flex flex-col gap-[11px] mt-(--space-400)">
                <span>Total bills</span>
                <span className="text-[32px] font-bold">$384.25</span>
            </div>
        </div>
    )
}