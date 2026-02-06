

export default function Summary(){
    return (
        <div className="p-(--space-300) bg-white flex flex-col rounded-lg">
            <h3 className="text-[16px] font-bold">Summary</h3>
                <div className="flex flex-col gap-[11px] mt-(--space-250)">
                    <div className="flex justify-between border-b text-[12px] border-(--grey-500)/15 pb-(--space-200)">
                        <span className="text-(--grey-500)">Paid bills</span>
                        <span className="font-bold">$129</span>
                    </div>
                    <div className="flex justify-between border-b text-[12px] border-(--grey-500)/15 pb-(--space-200)">
                        <span className="text-(--grey-500)">Total upcomming</span>
                        <span className="font-bold">$123</span>
                    </div>
                    <div className="flex justify-between text-(--red) text-[12px]">
                        <span>Due soon</span>
                        <span className="font-bold">$122</span>
                    </div>
                </div>
        </div>
    )
}