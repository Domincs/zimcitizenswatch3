import { HorizontalBadge } from "../components/horizontal-badge";
import { PromiseHistory } from "../components/promise-history";
import { RoundedButton } from "../components/rounded-button";

export function PromiseTracker({sector, status, icon, promise }) {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-gray-light py-6 rounded-r-[40px] ">
                <div className="pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] pr-6 flex flex-col">
                    <div className="flex flex-row gap-8">
                        <HorizontalBadge background="white">
                        <span className="text-black">{sector}</span>
                        </HorizontalBadge>
                        <HorizontalBadge background="green-light">
                        <div className="grid grid-cols-2 text-white">
                            <span>Status:</span>
                                <div className="flex flex-row">
                                    <span className="font-semibold">{status}</span>
                                    <img src={icon} className="h-6" />
                                </div>
                        </div>
                        </HorizontalBadge>
                    </div>

                    <h4 className="font-bold">Promise</h4>
                    <p className="font-bold">{promise}</p>
                    <span className="w-full border-[2px] border-white my-4"/>
                    <div className="flex flex-col gap-6">
                        <h4>Promise History</h4>
                        <PromiseHistory 
                            title="Pilot Phase Of The National Fuel Management System"
                            description="Piloting of the National Fuel Management System developed by the Harare Institute of Technology, with support from the Zimbabwe Energy Regulatory Authority (ZERA). Pilot phase of the National Fuel Management System has been completed, and the system has been proved to be ready for full implementation."
                            link="/"
                            source="Herald"
                            source_date="22 Aug 2021"
                        />

                        <PromiseHistory 
                            title="Pilot Phase Of The National Fuel Management System"
                            description="Piloting of the National Fuel Management System developed by the Harare Institute of Technology, with support from the Zimbabwe Energy Regulatory Authority (ZERA). Pilot phase of the National Fuel Management System has been completed, and the system has been proved to be ready for full implementation."
                            link="/"
                            source="Herald"
                            source_date="22 Aug 2021"
                        />
                    </div>
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-4 max-w-[12em]">
                    <RoundedButton>
                        <span className="flex flex-row justify-between">
                            Next Promise
                            <img src="/icons/right-arrow-black.svg" />
                        </span>
                    </RoundedButton>

                    <RoundedButton>
                        <span className="flex flex-row justify-between">
                            <img src="/icons/left-arrow-black.svg" />
                            Previous Promise
                        </span>
                    </RoundedButton>
                </div>
            </div>

        </div>
    )
}