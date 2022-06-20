export function PromiseStatus({value, label}) {
    return (
        <div className="grid grid-col min-h-[10em] place-content-center nth-child(2):bg-red">
            <span className="text-[56px] leading-none font-medium">{value}</span>
            <span className="uppercase tracking-[0.16em] font-serif">{label}</span>
        </div>
    )
}