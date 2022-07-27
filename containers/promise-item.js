import { ButtonLink } from "../components/button-link";
import { HorizontalBadge } from "../components/horizontal-badge";
import { StatusBadge } from "../components/status-badge";
import { normalize } from "../lib/normalize";

export function PromiseItemContainer({status, promise, currentNode, currentStatus, date, color, link, icon}) {
    
    //const index = all_promises.findIndex(item => item.slug === slug)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 py-2 px-4 box-shadow divide-x-2 divide-gray-light2 border-radius min-h-[168px] bg-white pb-6 gap-6">
            <div className="flex flex-col md:flex-row">
                <StatusBadge color={color} icon={icon} additional_classes="hidden md:flex"/>
                <HorizontalBadge background={color} additional_classes="flex md:hidden">
                    <div className="flex flex-row items-center gap-4 text-white">
                        <img src={icon} className="h-[20px] md:h-[32px]" />
                        <span className="font-semibold flex">{normalize(status)}</span>
                    </div>
                </HorizontalBadge>
                <div className="hidden md:flex flex-col px-4">
                    <span className="uppercase text-[16px] font-semibold">{normalize(status)}</span>
                    <span className="uppercase text-[16px] font-normal text-gray-divider">{date}</span>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 flex flex-col px-6 justify-between">
                <span>{promise}</span>
                <span className="w-fit border-b leading-loose pt-4">
                    <ButtonLink link={`${link}?node=${currentNode}&&status=${currentStatus}`}>
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