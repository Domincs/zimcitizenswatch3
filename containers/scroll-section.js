import { CountdownItem } from "../components/countdown";
import { SummaryGrid } from "./summary-grid";

export function ScrollSection() {
    const sectors = [
        {value: 273, label: "Total Promises"},
        {value: 23, label: "Kept"},
        {value: 39, label: "Not Commenced"},
        {value: 57, label: "Modified"},
        {value: 12, label: "Broken"},
        {value: 5, label: "Implemented"},
    ]
    return(
        <div>
            <div className="flex flex-row flex-nowrap overflow-scroll gap-[6em]">
                <span className="flex flex-col w-fit">
                    <h2 className="text-4xl uppercase w-max">Time Since Inauguration</h2>
                    <span className="flex justify-between py-4 w-full">
                        <CountdownItem value={235} label="days" />
                        <CountdownItem value={12} label="hours" />
                        <CountdownItem value={40} label="minutes" />
                        <CountdownItem value={23} label="seconds" />
                    </span>
                </span>

                <div className="flex flex-col min-w-[40em] my-12">
                    <h2 className="text-4xl leading-none uppercase">Summary of Promises</h2>
                    <SummaryGrid sectors={sectors} />
                </div>
                <div className="flex w-fit px-4">
                    <span className="flex h-fit my-0 mx-[8em] w-max origin-top-left rotate-90 flex-row bg-orange px-6 py-10">
                        <span className="text-2xl uppercase leading-none tracking-[0.16em]">Visit Malawi tracker</span>
                        <img src="/icons/link.svg" alt="link" />
                    </span>

                </div>
                
            </div>
        </div>
    )
}