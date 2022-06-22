import { CountryCountDown } from "../components/country-countdown";
import { Newsletter } from "./newsletter";

export function CountrySummaryContainer() {
    return (
        <div className="grid grid-cols-3">
            <div className="bg-green-light rounded-tr-[15px] py-[3em] overflow-hidden text-white sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem]">
                <h2 className="text-[56px] leading-none pt-4">Time Since inauguration</h2>
            </div>
            <div className="flex justify-between py-4 w-full col-span-2 sm:pr-[2rem] pl-6 lg:pr-[4rem] xl:pr-[5rem] 2xl:pr-[6rem]">
                <CountryCountDown value={235} label="days" />
                <CountryCountDown value={12} label="hours" />
                <CountryCountDown value={40} label="minutes" />
                <CountryCountDown value={23} label="seconds" />
            </div>
            <div className="bg-gray-normal flex flex-col rounded-br-[15px] overflow-hidden">
                <Newsletter />
            </div>
            <div className="col-span-2 flex flex-col pl-6 lg:pr-[4rem] xl:pr-[5rem] 2xl:pr-[6rem]">
                <h2 className="text-[56px]">Promises</h2>
                <p className="pr-0 md:pr-[6em]">
                The promises that we are tracking are derived from the commitments that ZANU PF made in their manifesto as well as other key policy pronouncements. We evaluate each promise using the scale ranging from not commenced to implemented. Get informed on what was promised and how government is faring in meeting their promises.
                </p>

            </div>
        </div>
    )
}