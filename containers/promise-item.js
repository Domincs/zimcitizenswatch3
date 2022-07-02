import { ButtonLink } from "../components/button-link";
import { StatusBadge } from "../components/status-badge";
import { normalize } from "../lib/normalize";

export function PromiseItemContainer({status, promise, date, color, link, icon}) {
    return (
        <div className="grid grid-cols-3 py-2 px-4 box-shadow divide-x-2 divide-gray-light2 border-radius h-[168px] bg-white">
            <div className=" flex flex-row">
                <StatusBadge color={color} icon={icon} />
                <div className="flex flex-col px-4">
                    <span className="uppercase text-[16px] font-semibold">{normalize(status)}</span>
                    <span className="uppercase text-[16px] font-normal text-gray-divider">{date}</span>
                </div>
            </div>
            <div className="col-span-2 flex flex-col px-6 justify-between">
                <span>{promise}</span>
                <span className="w-fit border-b leading-loose">
                    <ButtonLink link={link}>
                        <span className="flex flex-row items-between px-2 gap-4">
                            <span>Read More</span> 
                            <img src="/icons/right-arrow-black.svg" />
                        </span>
                    </ButtonLink>
                </span>
            </div>
        </div>
    )
}