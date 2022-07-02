
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { Button } from "../components/button";
import { VerticalStepper } from "../components/vertifcal-stepper";
import { capitalize } from "../lib/capitalize";
import { ScrollSection } from "./scroll-section";

export function OverallSummaryContainer({ summary }) {
    const ref = useRef(null);
    const [scrolled, setScrolled] = useState(0)

    const items = [
        { name: "Malawi", active: scrolled < 0.333 , link: '/malawi', target: '_self', map: "/maps/mw.svg" },
        { name: "Zambia", active: scrolled > 0.333 && scrolled < 0.666, link: '/zambia', target: '_self', map: "/maps/zm.svg" },
        { name: "Zimbabwe", active: scrolled > 0.666, link: 'https://zimcitizenswatch.org', target: '_blank', map: "/maps/zw.svg" }
    ]

    const handleScroll = (progress) => {
        setScrolled(progress)

    }

    useEffect(() => {
        const element = ref.current
        gsap.registerPlugin(ScrollTrigger)
        let tl = gsap.timeline({});
        
        let sections = gsap.utils.toArray(".panel");


        tl.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".horizontal-scroll",
              start: 'top 25%',
              pin: true,
              scrub: 0.1,
            //   snap: 1 / (sections.length - 1),
              // base vertical scrolling on how wide the container is so it feels more natural.
              end: "+=3500",
              onUpdate: (self) => {handleScroll(self.progress)}
            }
        })
        // .to('.countries-container', {
        //     position: "static",
        //     zIndex: 1500,
        //     ease: "none",
        //     top: 0,
        //     scrollTrigger: {
        //       trigger: ".horizontal-scroll",
        //       start: 'bottom bottom',
        //       pin: true,
        //       scrub: 1,
        //       end: "+=3500"
        //     }
        // })
    }, [])

    return(
        <div className="grid grid-cols-3 container m-auto mt-[8em] horizontal-scroll overflow-hidden">
            <div className="flex flex-row bg-white z-[1000]">
                <div className="basis-1/3">
                    <VerticalStepper items={items} />
                </div>
                <div className="basis-2/3">
                    <img src={items.find((obj) => obj.active === true).map} className="h-[16em] mb-8 pr-4" />
                    <Button color="orange">
                        <a className="flex flex-row gap-4 text-[10px] items-between px-2 py-2 " href={items.find((obj) => obj.active === true).link} target={items.find((obj) => obj.active === true).target} {...(items.find((obj) => obj.active === true).target === '_blank' && { rel: "noreferrer" })}>
                        <span>Visit {items.find((obj) => obj.active === true).name} Tracker</span><img src="/icons/right-arrow-white.svg" className="h-[0.7em]" />
                        </a>
                    </Button>
                </div>
            </div>

            <div className="col-span-2 flex flex-row flex-nowrap gap-[6em] px-[18em]">
            
                {
                    Object.keys(summary).map((item, key) => (
                        <ScrollSection key={key} country={capitalize(item)} summary={summary[item]} additional_classes="panel z-[-1]" link={items.find((obj) => obj.name === capitalize(item)).link} target={items.find((obj) => obj.name === capitalize(item)).target} />
                    ))
                }
                
            </div>

        </div>
    )
}