export function CountdownItem({value, label}) {
    return (
        <span className="flex flex-row gap-2">
            <span className="text-4xl font-serif leading-none">{value}</span>
            <span className="text-2xl flex font-serif items-end uppercase text-green-light">{label}</span>
        </span>
    )
}