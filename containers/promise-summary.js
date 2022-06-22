import { PromiseStatus } from "../components/promise-status";

export function PromiseSummaryContainer({statuses}) {
    return(
        <div className="flex flex-col container m-auto py-[6em]">
            <h2 className="text-[56px] my-6">Summary of Promises</h2>
            <div className="grid grid-cols-6 divide-x py-4 border-t border-b divide-[1px] border-[#0000001a] divide-[#0000001a]">
                {
                    statuses.map((item, idx) => (
                        <PromiseStatus key={idx} value={item.value} label={item.label} />
                    ))
                }

            </div>

        </div>
    )

}