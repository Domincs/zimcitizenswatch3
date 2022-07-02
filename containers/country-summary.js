import { useEffect, useState } from "react";
import { CountryCountDown } from "../components/country-countdown";
import { Newsletter } from "./newsletter";

export function CountrySummaryContainer({countFromDate}) {

    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    

    useEffect(() => {
        const intervalId = setInterval(( ) => {  //assign interval to a variable to clear it.
          countFrom = new Date(countFromDate).getTime();
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


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 md:mt-[-3em]">
            <div className="bg-green-light rounded-0 md:rounded-tr-[15px] py-[3em] overflow-hidden text-white sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem]">
                <h2 className="text-[56px] leading-none pt-4 text-center sm:text-left">Time Since inauguration</h2>
            </div>
            <div className="flex justify-between py-4 w-full md:pl-6 px-3 md:px-0 col-span-1 md:col-span-2 sm:pr-[2rem] lg:pr-[4rem] xl:pr-[5rem] 2xl:pr-[6rem]">
                <CountryCountDown value={days} label="days" />
                <CountryCountDown value={hours} label="hours" />
                <CountryCountDown value={minutes} label="minutes" />
                <CountryCountDown value={seconds} label="seconds" />
            </div>
            <div className="bg-gray-normal flex flex-col rounded-0 md:rounded-br-[15px] overflow-hidden sm:pl-[2rem] px-6 md:pr-8 pb-[4em] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem]">
                <Newsletter />
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col px-6 md:pl-6 lg:pr-[4rem] xl:pr-[5rem] 2xl:pr-[6rem]">
                <div className="max-w-2xl py-4">
                    <h2 className="text-[56px] py-8">Promises</h2>
                    <p className="pr-0 md:pr-[6em] text-[20px] leading-[26px]">
                    The promises that we are tracking are derived from the commitments that ZANU PF made in their manifesto as well as other key policy pronouncements. We evaluate each promise using the scale ranging from not commenced to implemented. Get informed on what was promised and how government is faring in meeting their promises.
                    </p>
                </div>
            </div>
        </div>
    )
}