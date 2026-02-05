import { Children } from "react";

type HeaderType = {
    title: string,
    className: string
}

export default function Header({ title, className} : HeaderType) {
    return (
        <div>
            <h1 className={className} title={title}>{title}</h1>
        </div>
    )
}