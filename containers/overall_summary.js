import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/button";
import { VerticalStepper } from "../components/vertifcal-stepper";
import { capitalize } from "../lib/capitalize";
import { ScrollSection } from "./scroll-section";

export function OverallSummaryContainer({ summary }) {
    const [scrolled, setScrolled] = useState(0)
    const items = [
        { name: "Malawi", active: scrolled < 33.3 , link: '/malawi', target: '__self', map: "/maps/mw.svg" },
        { name: "Zambia", active: scrolled > 33.3 && scrolled < 66.6, link: '/zambia', target: '__self', map: "/maps/zm.svg" },
        { name: "Zimbabwe", active: scrolled > 66.6, link: 'https://zimcitizenswatch.org', target: '_blank', map: "/maps/zw.svg" }
    ]

    const handleScroll = (e) => {
        var winScroll = e.target.scrollLeft
        var height = e.target.scrollWidth - e.target.clientWidth
        var scrolled = (winScroll / height) * 100
        setScrolled(scrolled)

      }
    return(
        <div className="grid grid-cols-3 container m-auto mt-[8em]">
            <div className="flex flex-row">
                <div className="basis-1/3">
                    <VerticalStepper items={items} />
                </div>
                <div className="basis-2/3">
                    <img src={items.find((obj) => obj.active === true).map} className="h-[16em] mb-8 pr-4" />
                    {/* <a className="rounded-full px-8 py-2 leading-none tracking-[.1em] text-xs uppercase font-serif text-white bg-orange" href={items.find((obj) => obj.active === true).link} target={items.find((obj) => obj.active === true).target}> */}
                    <Button color="orange">
                        <a className="flex flex-row gap-4 text-[10px]" href={items.find((obj) => obj.active === true).link} target={items.find((obj) => obj.active === true).target} {...(items.find((obj) => obj.active === true).link.includes("https://zimcitizenswatch") && { rel: "noreferrer" })}>
                        <span>Visit {items.find((obj) => obj.active === true).name} Tracker</span><img src="/icons/right-arrow-white.svg" className="h-[0.7em]" />
                        </a>
                    </Button>
                    
                    
                </div>
            </div>

            <div className="col-span-2 flex flex-row flex-nowrap overflow-scroll gap-[6em]" onScroll={handleScroll}>
                {
                    Object.keys(summary).map((item, key) => (
                        <ScrollSection key={key} country={capitalize(item)} summary={summary[item]} />
                    ))
                }
                
            </div>

        </div>
    )
}