import { Button } from "../components/button";
import { VerticalStepper } from "../components/vertifcal-stepper";
import { ScrollSection } from "./scroll-section";

export function OverallSummaryContainer() {
    const items = [
        { name: "Malawi", active: true },
        { name: "Zambia", active: false },
        { name: "Zimbabwe", active: false }
    ]
    return(
        <div class="grid grid-cols-3 container m-auto mt-[8em]">
            <div class="flex flex-row">
                <div class="basis-1/3">
                    <VerticalStepper items={items} />
                </div>
                <div class="basis-2/3">
                    <img src="maps/mw.svg" className="h-[16em] mb-8" />
                    <Button color="orange">
                    <span className="flex flex-row gap-4">
                        <span>Visit Malawi Tracker</span><img src="icons/right-arrow-white.svg" className="h-[0.7em]" />
                        </span>
                        
                    </Button>
                    
                </div>
            </div>

            <div class="col-span-2">
                <ScrollSection />
            </div>

        </div>
    )
}