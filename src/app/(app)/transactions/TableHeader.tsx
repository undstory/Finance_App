
export default function TableHeader() {



    return (
    <thead>
        <tr className="border-b border-(--grey-100) text-xs text-(--grey-500)">
            <th className="text-left pl-(--space-200) font-normal pr-(--space-400) pt-(--space-150) pb-(--space-150) w-[43%]">Recipient / Sender</th>
            <th className="text-center pr-(--space-400) font-normal pb-(--space-150) pt-(--space-150) w-[12%]">Category</th>
            <th className="text-center pr-(--space-400) font-normal pb-(--space-150) pt-(--space-150) w-[12]">Transaction Date</th>
            <th className="text-right pr-(--space-200) font-normal pb-(--space-150) pt-(--space-150) w-[20%]">Amount</th>
        </tr>
    </thead>
    )
}