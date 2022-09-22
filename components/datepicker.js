import { DateRangePicker } from 'react-date-range'
import { useState } from 'react'
import Image from 'next/image'
import moment from 'moment'

export function DatePicker({state, setState}) {

    const [showDate, setShowDate] = useState(false)


    return (
        <div className="relative">
            <div className="flex flex-row justify-between sivio-box-shadow-md bg-white p-1 rounded-[20px] overflow-hidden">
                <label className="relative block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Image src="/icons/calender.svg" height={24} width={24} />
                    </span>
                    <input onFocus={()=> setShowDate(true)} onChange={()=>{}}
                        className="w-full bg-white pl-12 pt-1 focus:outline-none max-w-[10em] text-[16px]"
                        value={moment(state[0].startDate).format("DD-MM-YYYY")} type="text"  />
                </label>
                <div className="w-[1px] bg-black h-[full] mx-8" />
                <label className="relative block">
                    <input onFocus={()=> setShowDate(true)} onChange={()=>{}}
                        className="w-full bg-white pl-3 pt-1 max-w-[10em] focus:outline-none text-[16px]"
                        value={moment(state[0].endDate).format("DD-MM-YYYY")} type="text" 
                    />

                    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Image src="/icons/calender.svg" height={24} width={24} />
                    </span>
                </label>
            </div>
            <div className={`flex flex-col bg-white absolute z-[1500] sivio-box-shadow-md rounded-[20px] overflow-hidden ${!showDate && "hidden" }`}>
                <div className="flex justify-end p-3">
                    <button className="border-[1px] rounded-[20px] py-0 px-4 text-[16px]" onClick={() => setShowDate(false)}>
                        Close
                    </button>
                </div>
                
                <DateRangePicker
                    className=" "
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={2}
                    ranges={state}
                    maxDate={new Date()}
                    rangeColors={["#7fbd42"]}
                    direction="horizontal"
                    
                />
            </div>
            
        </div>)
      
}