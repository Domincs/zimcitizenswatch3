
import { HorizontalBadge } from "../components/horizontal-badge";
import { StatusBadge } from "../components/status-badge";
import { normalize } from "../lib/normalize";

export function StatusDescriptionContainer({status, description, color, icon}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 py-2 px-4 box-shadow divide-x-0 md:divide-x-2 divide-gray-light2 border-radius min-h-[168px] bg-white">
            <div className="flex flex-col md:flex-row">
                <StatusBadge color={color} icon={icon} additional_classes="hidden md:flex" />
                <HorizontalBadge background={color} additional_classes="flex md:hidden">
                    <div className="flex flex-row items-center gap-4 text-white">
                        <img src={icon} className="h-[20px] md:h-[32px]" />
                        <span className="font-semibold flex">{normalize(status)}</span>
                    </div>
                </HorizontalBadge>
                <div className="hidden md:flex flex-col px-4">
                    <span className="uppercase text-[16px] font-semibold">
                        {normalize(status)}</span>
                </div>
            </div>
            <div className="col-span-2 flex flex-col px-6 justify-between pt-3 md:pt-0">
                <span>{description}</span>
            </div>
        </div>
    )
}