export function CountryCountDown ({value, label}) {
    return (
        <span className="flex items-center">
            <span className="flex flex-row items-end gap-2">
                <span className="text-[20px] md:text-[56px] font-serif leading-none">{value}</span>
                <span className="text-[10px] md:text-[32px] text-green-light flex font-serif items-end uppercase">{label}</span>
            </span>
            
        </span>
    )
}