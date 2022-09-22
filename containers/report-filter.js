import { DatePicker } from "../components/datepicker";
import { DropdownSelect } from "../components/dropdown-select";

export function ReportFilterContainer({ dateState, setDateState, promiseArea, statuses, sources, updateFilter }) {


    const filterItems = [
        { label: "Promise area", options: promiseArea},
        { label: "Status", options: statuses},
        { label: "Source", options: sources || []}
    ]

    return (
        <div className="bg-gray-normal rounded-[49px] flex justify-between px-4 py-2">
            <DatePicker state={dateState} setState={setDateState} />
            {
                filterItems.map((item, idx) => (
                    <div key={idx} className="flex flex-row gap-2 items-center">
                        <span className="text-[16px]">{item.label}</span>
                        <DropdownSelect options={item.options} onSelect={updateFilter} name={item.label.replace(" ", "_").toLowerCase()} />
                    </div>
                ))
            }
        </div>
    )
}