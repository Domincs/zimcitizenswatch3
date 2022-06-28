export function CountdownItem({value, label}) {
    return (
        <span className="flex flex-row gap-2">
            <span className="text-[30px] font-serif leading-none">{value}</span>
            <span className="text-[10px] flex font-serif items-end uppercase">{label}</span>
        </span>
    )
}