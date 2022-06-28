import { PromiseStatus } from "../components/promise-status";

export function SummaryOfPerformanceContainer({date, statuses}) {
    return (
        <div className="flex flex-col container m-auto">
            <h2 className="text-[56px] leading-none">Summary of Performance</h2>
            <span>as of {date}</span>
            <div className="grid grid-cols-3 md:grid-cols-6 divide-x py-4 border-t border-b divide-[1px] border-[#0000001a] divide-[#0000001a] my-4">
                {
                    statuses.map((item, idx) => (
                        <PromiseStatus key={idx} value={item.value} label={item.label} />
                    ))
                }

            </div>

        </div>
    )
}