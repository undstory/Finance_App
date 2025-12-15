"use client";

import { useId } from "react";
import Image from "next/image";

interface SelectProps {
    label: string;
    options: string[];
    // value: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function Select({
    label, options,
    // value,
    onChange,
    className = ''
}: SelectProps) {
    const id = useId()
    return (
        <div className="flex items-center gap-(--space-100) relative text-[length:var(--text-4-size)]">
            { label ? (
                <label className="text-[color:var(--grey-500)]" htmlFor={id}>{label}</label>
                ) : null
            }
            <select id={id} onChange={e => onChange(e.target.value)} className="appearance-none border border-(--beige-500) text-(--grey-900) focus:outline-none py-(--space-150) pl-(--space-250) pr-(--space-500) rounded-lg text">
                {
                    options.map((option) => (
                        <option key={option} value={option} className="py-[var(--space-150)]">
                            {option}
                        </option>
                    ))}
            </select>
            <Image src="/assets/images/icon-caret-down.svg" alt="chevron down icon" width={16} height={16} className="pointer-events-none absolute right-[14.5px] top-1/2 -translate-y-1/2"/>
        </div>
    )
}