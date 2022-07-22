export function SummaryGrid({sectors}) {
    return (
        <div className="grid grid-cols-3 box-shadow border-radius border-none overflow-hidden">
            {
                sectors.map((item, idx) => (
                    <div key={idx} className="border-[0.5px] border-[#0000001a] grid grid-col min-h-[6em] md:min-h-[10em] place-content-center items-center">
                        <span className="text-[28px] md:text-[56px] text-center leading-none font-medium">{item.value}</span>
                        <span className="text-[10px] md:text-[18px] uppercase text-center tracking-[0.16em]">{item.label}</span>
                    </div>
                ))
            }
        </div>
    )
}