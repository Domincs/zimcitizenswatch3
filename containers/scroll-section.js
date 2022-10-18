
import { useEffect , useState, } from "react";
import { CountdownItem } from "../components/countdown";
import { SummaryGrid } from "./summary-grid";


export function ScrollSection({country, summary, additional_classes, link, target}) {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
          countFrom = new Date(summary.inauguration).getTime();
            var now = new Date(),
                countFrom = new Date(countFrom),
                timeDifference = (now - countFrom);
            
            var secondsInADay = 60 * 60 * 1000 * 24,
                secondsInAHour = 60 * 60 * 1000;
            
            let idays = Math.floor(timeDifference / (secondsInADay) * 1);
            let ihours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
            let imins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
            let isecs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

            setDays(idays)
            setHours(ihours)
            setMinutes(imins)
            setSeconds(isecs)
        }, 1000)
      
        return () => clearInterval(intervalId); //This is important
       
    }, [])



    const sectors = [
        {value: summary['all'], label: "Total Promises"},
        {value: summary['inprogress'], label: "In Progress"},
        {value: summary['not_commenced'], label: "Not Commenced"},
        {value: summary['modified'], label: "Modified"},
        {value: summary['broken'], label: "Broken"},
        {value: summary['implemented'], label: "Implemented"},
    ]

    return(
        <div className={`${additional_classes} ml-[-18em]`}>
            <div className={`flex flex-row overflow-x-scroll flex-nowrap pb-[4em] pl-6 sm:pl-0 hide-scrollbar`} id={country}>
                <span className="flex flex-col w-fit mr-[4em]">
                    <h2 className="text-2xl md:text-4xl uppercase w-max mb-6">Time Since Inauguration</h2>
                    <span className="flex justify-between w-full">
                        <CountdownItem value={days} label="days" />
                        <CountdownItem value={hours} label="hours" />
                        <CountdownItem value={minutes} label="minutes" />
                        <CountdownItem value={seconds} label="seconds" />
                    </span>
                </span>

                <div className="flex flex-col min-w-[18em] md:min-w-[40em]">
                    <h2 className="text-2xl md:text-4xl uppercase mb-6">Summary of Promises</h2>
                    <SummaryGrid sectors={sectors} />
                </div>
                <div className="flex w-fit">
                    <a href={link} target={target} className="flex items-center h-fit w-fit px-[1.8em] md:px-[3.6em] my-0 mx-[5em] md:mx-[10em] w-max origin-top-left rotate-90 translate-y-[3.5em] md:translate-y-[4em] flex-row bg-orange py-4 md:py-6 gap-6">
                        <span className="text-[10px] md:text-[18px] sans-serif uppercase leading-none tracking-[0.16em]">Visit {country} tracker</span>
                        <img src="/icons/link-arrow.svg" alt="link" />
                    </a>
                </div>
                
            </div>
        </div>
    )
}