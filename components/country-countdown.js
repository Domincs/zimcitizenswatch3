export function CountryCountDown ({value, label}) {
    return (
        <span className="flex flex-row gap-2">
            <span className="text-[56px] font-serif leading-none">{value}</span>
            <span className="text-[32px] text-green-light flex font-serif items-end uppercase">{label}</span>
        </span>
    )
}