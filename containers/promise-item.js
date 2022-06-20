import { ButtonLink } from "../components/button-link";
import { StatusBadge } from "../components/status-badge";

export function PromiseItemContainer({status, date, color, icon}) {
    return (
        <div class="grid grid-cols-3 py-2 px-4 box-shadow divide-x-2 divide-gray-light2 border-radius h-[168px] bg-white">
            <div class=" flex flex-row">
                <StatusBadge color={color} icon={icon} />
                <div className="flex flex-col px-4">
                    <span className="uppercase text-[16px] font-semibold">{status}</span>
                    <span className="uppercase text-[16px] font-normal text-gray-divider">{date}</span>
                </div>
            </div>
            <div class="col-span-2 flex flex-col px-6 justify-between">
                <span>Instituting fiscal reforms.</span>
                <span className="w-fit border-b leading-loose">
                    <ButtonLink link="/#">
                        Read More <img src="/icons/right-arrow-black.svg" />
                    </ButtonLink>
                </span>
            </div>
        </div>
    )
}