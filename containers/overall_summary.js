
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { Button } from "../components/button";
import { VerticalStepper } from "../components/vertifcal-stepper";
import { capitalize } from "../lib/capitalize";
import { ScrollSection } from "./scroll-section";

export function OverallSummaryContainer({ summary }) {
    const [scrolled, setScrolled] = useState(0)

    const items = [
        { name: "Malawi", active: true, activeTab: scrolled<0.33, link: '/malawi', target: '_self', map: "/maps/mw.svg" },
        { name: "Zambia", active: scrolled > 0.5, activeTab: scrolled>0.33 && scrolled<0.66, link: '/zambia', target: '_self', map: "/maps/zm.svg" },
        { name: "Zimbabwe", active: scrolled === 1, activeTab: scrolled>0.66, link: 'https://zimcitizenswatch.org', target: '_blank', map: "/maps/zw.svg" }
    ]

    const handleScroll = (progress) => {
        setScrolled(progress)

    }

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline({});
        
        let sections = gsap.utils.toArray(".panel");


        tl.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".horizontal-scroll",
              start: 'top 25%',
              //end: () => innerWidth * (sections.length+1),
              pin: true,
              scrub: 0.1,
            //   snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "+=6500",
              onUpdate: (self) => {handleScroll(self.progress)}
            }
        })
    }, [])

    return(
        <div className="grid grid-cols-4 md:grid-cols-3 mt-[8em] horizontal-scroll overflow-hidden">
            <div className="flex flex-row bg-white z-[1000]">
                <div className="basis-full md:basis-1/3">
                    <VerticalStepper items={items} progress={scrolled} />
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

            <div className="col-span-3 md:col-span-2 flex flex-row flex-nowrap gap-[6em] px-[18em]">
                {
                    Object.keys(summary).map((item, key) => (
                        <ScrollSection key={key} country={capitalize(item)} summary={summary[item]} additional_classes="panel z-[-1]" link={items.find((obj) => obj.name === capitalize(item)).link} target={items.find((obj) => obj.name === capitalize(item)).target} />
                    ))
                }
                
            </div>

        </div>
    )
}