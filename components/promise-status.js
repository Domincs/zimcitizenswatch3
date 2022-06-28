export function PromiseStatus({value, label}) {
    return (
        <div className="p-4">
            <div className="grid grid-col min-h-[10em] place-content-center items-center hover:rounded-[15px] hover:bg-white hover:drop-shadow-[0px_10px_45px_rgba(55,76,91,0.15)]">
                <span className="text-[56px] text-center leading-none font-medium">{value}</span>
                <span className="text-[18px] uppercase tracking-[0.16em] text-center">{label}</span>
            </div>
        </div>
        
    )
}