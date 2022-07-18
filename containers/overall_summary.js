

import { Button } from "../components/button";
import { VerticalStepper } from "../components/vertifcal-stepper";
import { capitalize } from "../lib/capitalize";
import { ScrollSection } from "./scroll-section";

export function OverallSummaryContainer({ summary, anchorClick, scrolled, items }) {
    
    
    

    return(
        <div className="grid grid-cols-4 md:grid-cols-4 mt-[8em] horizontal-scroll overflow-hidden">
            <div className="flex flex-row bg-white z-[1000]">
                <div className="basis-full md:basis-1/3">
                    <VerticalStepper items={items} progress={scrolled} onClick={anchorClick} />
                </div>
                <div className="basis-2/3 hidden md:flex flex-col">
                    <img src={items.find((obj) => obj.activeTab === true).map} className="h-[16em] mb-8 pr-4 " />
                    <span>
                    <Button color="orange">
                        <a className="flex flex-row gap-4 text-[10px] items-between px-2 py-2 " href={items.find((obj) => obj.activeTab === true).link} target={items.find((obj) => obj.activeTab === true).target} {...(items.find((obj) => obj.activeTab === true).target === '_blank' && { rel: "noreferrer" })}>
                        <span>Visit {items.find((obj) => obj.activeTab === true).name} Tracker</span><img src="/icons/right-arrow-white.svg" className="h-[0.7em]" />
                        </a>
                    </Button>
                    </span>
                    
                </div>
            </div>

            <div className="col-span-4 md:col-span-3 flex flex-row flex-nowrap gap-[6em] px-[18em]" id="horizontal-scroll-container">
                {
                    Object.keys(summary).map((item, key) => (
                        <ScrollSection key={key} country={capitalize(item)} summary={summary[item]} additional_classes="panel z-[-1]" link={items.find((obj) => obj.name === capitalize(item)).link} target={items.find((obj) => obj.name === capitalize(item)).target} />
                    ))
                }
                
            </div>

        </div>
    )
}