export function SummaryGrid({sectors}) {
    return (
        <div className="grid grid-cols-3 box-shadow border-radius border-none overflow-hidden">
            {
                sectors.map((item, idx) => (
                    <div keys={idx} className="border-[0.5px] border-[#0000001a] grid grid-col min-h-[10em] items-center nth-child(2):bg-red">
                        <span className="text-[56px] leading-none font-medium">{item.value}</span>
                        <span className="uppercase tracking-[0.16em] font-serif">{item.label}</span>
                    </div>
                ))
            }
        </div>
    )
}