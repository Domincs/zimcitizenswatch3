import { HorizontalBadge } from "../components/horizontal-badge";
import { PromiseHistory } from "../components/promise-history";
import { RoundedButton } from "../components/rounded-button";
import { normalize } from "../lib/normalize";
import moment from 'moment'

export function PromiseTracker({sector, icon, promise }) {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-gray-light py-6 rounded-r-[40px] ">
                <div className="pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] pr-6 flex flex-col">
                    <div className="flex flex-row gap-8">
                        <HorizontalBadge background="white">
                        <span className="text-black flex items-center">{sector}</span>
                        </HorizontalBadge>
                        <HorizontalBadge background={`status-${promise[0].status}`}>
                        <div className="grid grid-cols-2 text-white flex items-center">
                            <span className="">Status:</span>
                                <div className="flex flex-row items-center">
                                    <span className="font-semibold flex">{normalize(promise[0].status)}</span>
                                    <img src={icon} className="h-[25px]" />
                                </div>
                        </div>
                        </HorizontalBadge>
                    </div>

                    <h4 className="font-bold my-4">Promise</h4>
                    <p className="font-bold">{promise[0].promise_title}</p>
                    <span className="w-full border-[2px] border-white my-4"/>
                    <div className="flex flex-col gap-6">
                        <h4>Promise History</h4>
                        {
                            promise.map((item, idx) => (
                                <PromiseHistory 
                                    key={idx}
                                    title={item.action_title}
                                    description={item.action_description}
                                    link={item.source_url}
                                    source={item.source_name}
                                    source_date={moment(item.source_date).format("LL")}
                                />
                            ))
                        }
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