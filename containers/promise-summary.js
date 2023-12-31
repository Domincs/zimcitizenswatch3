import { PromiseStatus } from "../components/promise-status";

export function PromiseSummaryContainer({statuses}) {
    return(
        <div className="flex flex-col container m-auto py-[3em] md:py-[6em] px-6 md:px-0">
            <h2 className="text-[32px] md:text-[56px] my-6">Summary of Promises</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 py-4 border-t border-b divide-[1px] border-[#0000001a]">
                {
                    statuses.map((item, idx) => (
                        <PromiseStatus key={idx} value={item.value} label={item.label} onClick={()=>{}} />
                    ))
                }

            </div>

        </div>
    )

}