import { FilterBadge } from "../components/filter-badge";
import { PromiseItemContainer } from "./promise-item";

export function SectorPromisesContainer () {
    const categories = [
        { active: true, text: "All categories" },
        { active: false, text: "Budget Accountability" },
        { active: false, text: "Economic Model (focus on State Owned Enterprises SOE)" },
        { active: false, text: "Employment" },
        { active: false, text: "Informal Sector" }
    ]
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2 bg-gray-light py-6 rounded-r-[40px] ">
                <div className="pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] pr-6">
                     <h2 className="text-[32px] my-8">Arranged in order of latest update</h2>

                    <PromiseItemContainer status="implemented" color="#678C13" icon="/icons/implemented.svg" date="13-June-2021"/>
                </div>
                
            </div>
            <div className="flex flex-wrap h-fit gap-2 pl-6">
                {
                    categories.map((item, idx) => (
                        <FilterBadge key={idx} active={item.active} text={item.text} /> 
                    ))
                }
            </div>
        </div>
    )
}