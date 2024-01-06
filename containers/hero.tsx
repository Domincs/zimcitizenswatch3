
import { useEffect , useState } from "react";
import { CountdownItem } from "../components/countdown";
import { LeftBox } from '../components/wrappers/left-box';
import { RightBox } from '../components/wrappers/right-box';

export function HeroContainer({country, description, link, ...rest}) {
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
          countFrom = new Date("2023-08-08").getTime();
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

    return(
        <div className="content-center items-end relative px-6 md:px-0 h-screen flex flex-col" {...rest}>
            <div className="grid grid-cols-1 md:grid-cols-2 container m-auto flex-1 content-center">
                <div>
                    <h1 className="text-[106px] leading-none font-medium">{country}</h1>
                    <h1 className="text-[106px] leading-none font-medium">Citizens</h1>
                    <h1 className="text-[106px] leading-none font-medium">Watch</h1>
                </div>
                <div className="flex flex-col gap-4 py-6 items-end">
                    <span className="flex flex-col items-start gap-6 max-w-md">
                        {description}
                    </span>
                </div>
            </div>
            <div className="flex flex-row gap-12 w-full">
                <LeftBox className="bg-green-light text-white rounded-tr-lg py-5">
                    <h2 className="text-2xl md:text-4xl">Time Since inauguration</h2>
                </LeftBox>
                <RightBox className="grid grid-cols-1 content-center">
                    <span className="flex gap-8">
                        <CountdownItem value={days} label="days" />
                        <CountdownItem value={hours} label="hours" />
                        <CountdownItem value={minutes} label="minutes" />
                        <CountdownItem value={seconds} label="seconds" />
                    </span>
                </RightBox>
            </div>
            <div className="flex flex-row gap-12 w-full">
                <div className="w-1/3 py-2 pl-28 bg-gray-light">
                    <p>Latest update 22 August 2023</p>
                </div>
                <div className="w-2/3"/>
            </div>
            
        </div>
    )
}