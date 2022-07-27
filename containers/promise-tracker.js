import { HorizontalBadge } from "../components/horizontal-badge";
import { PromiseHistory } from "../components/promise-history";
import { RoundedButton } from "../components/rounded-button";
import { normalize } from "../lib/normalize";
import moment from 'moment'

export function PromiseTracker({sector, promise, prevPromise, nextPromise }) {
    let color                
    if(promise[0].promise_state === 'implemented') {
        color = `bg-implemented`
    }
    else if(promise[0].promise_state === 'kept') {
        color = `bg-kept`
    }
    else if(promise[0].promise_state === 'not_commenced') {
        color = `bg-notcommenced`
    }
    else if(promise[0].promise_state === 'modified') {
        color = `bg-modified`
    }
    else if(promise[0].promise_state === 'broken') {
        color = `bg-broken`
    }

    
    return (
        <div className="flex flex-col-reverse md:grid md:grid-cols-3">
            <div className="col-span-2 bg-gray-light py-6 rounded-0 md:rounded-r-[40px] px-6 md:px-0">
                <div className="pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] pr-0 md:pr-6 flex flex-col">
                    <div className="flex flex-row gap-2 md:gap-8 pb-4">
                        <HorizontalBadge background="white">
                        <span className="text-black flex items-center">{sector}</span>
                        </HorizontalBadge>
                        <HorizontalBadge background={color}>
                        <div className="flex flex-row gap-2 text-white flex items-center">
                            <span className="">Status:</span>
                            <div className="flex flex-row items-center">
                                <span className="font-semibold flex">{normalize(promise[0].promise_state)}</span>
                                <img src={`/icons/${promise[0].promise_state}.svg`} className="h-[20px] md:h-[32px]" />
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
                                    source_date={ item.source_date !== null ? moment(item.source_date).format("LL"): null}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse m-auto md:m-0 md:flex-col gap-4 pr-0 md:pr-[2rem] lg:pr-[4rem] xl:pr-[5rem] 2xl:pr-[6rem] items-center md:items-end mb-4">
                <RoundedButton onClick={nextPromise}>
                    <span className="flex flex-row justify-between w-[16em] px-4 py-2">
                        <span className="leading-none">Next Promise</span>
                        <img src="/icons/right-arrow-black.svg" className="h-[1em]" />
                    </span>
                </RoundedButton>

                <RoundedButton onClick={prevPromise}>
                    <span className="flex flex-row justify-between w-[16em] px-4 py-2">
                        <img src="/icons/left-arrow-black.svg" className="h-[1em]" />
                        <span className="leading-none">Previous Promise</span>
                    </span>
                </RoundedButton>
            </div>

        </div>
    )
}