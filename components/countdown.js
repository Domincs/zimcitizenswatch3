export function CountdownItem({value, label}) {
    return (
        <span className="flex flex-row gap-2">
            <span className="text-[30px] font-serif leading-none">{value}</span>
            <span className="text-xs flex font-serif items-end uppercase">{label}</span>
        </span>
    )
}