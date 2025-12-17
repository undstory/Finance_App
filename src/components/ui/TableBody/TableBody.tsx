import { getTransactions } from "@/lib/transactions";
import { formatDate } from "@/utils/formatDate";
import { formatAmount } from "@/utils/formatAmount";
import Image from "next/image";

export default async function TableBody() {

    const transactions = await getTransactions()
    console.log("transactions", transactions)
    const tdbase = 'font-normal pb-(--space-150) pt-(--space-150)'
    return (
    <tbody>
        {transactions.map((el) => (
        <tr key={el.id} className="border-b border-(--grey-100) text-xs text-(--grey-500) py-(--space-200)">
            <td className={`${tdbase} text-left pl-(--space-200) font-normal pr-(--space-400) w-[43%]`}>
                {el.avatarUrl && <Image
                src={el.avatarUrl}
                 alt="groceries icon" width={40} height={40} className="rounded-full inline-block mr-(--space-200) align-middle"/>}
                <span className="font-bold text-(--text-4-size)">{el.payee}</span>
            </td>
            <td className={`${tdbase} text-center pr-(--space-400) w-[12%]`}>{el.category}</td>
            <td className={`${tdbase} text-center pr-(--space-400) w-[12]`}>{formatDate(el.date)}</td>
            <td className={`${tdbase} text-right pr-(--space-200) w-[20%]`}>{formatAmount(el.amount)}</td>
        </tr>
        ))}
    </tbody>
    )
}