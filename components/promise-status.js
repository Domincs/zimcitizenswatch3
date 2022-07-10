import Image from "next/image"

export function PromiseStatus({value, label, radio, active, onClick, ...rest}) {
    return (
        <div className="p-4 border-r-[1px] border-[#0000001a]
        [&:nth-child(3)]:border-r-0 md:[&:nth-child(3)]:border-r-[1px]
        [&:nth-child(6)]:border-r-0 md:[&:nth-child(6)]:border-r-[1px]
        [&:nth-child(1)]:border-b-[1px] md:[&:nth-child(1)]:border-b-0
        [&:nth-child(2)]:border-b-[1px] md:[&:nth-child(2)]:border-b-0
        [&:nth-child(3)]:border-b-[1px] md:[&:nth-child(3)]:border-b-0
        ">
            <a className="flex flex-col min-h-[10em] p-2 hover:rounded-[15px] hover:bg-white hover:drop-shadow-[0px_10px_45px_rgba(55,76,91,0.15)] cursor-pointer" onClick={()=> onClick(label)} {...rest}>

                {
                    radio !== undefined && radio === true ?
                    <span className="flex justify-end mb-6 h-14">{active === true ? <Image src="/icons/selected-checkbox.svg" height={26} width={26} /> : <Image src="/icons/unselected-checkbox.svg" height={26} width={26}/>}</span>
                    : <></>
                }
                <span className="flex flex-col place-content-center items-center grow">
                    <span className="text-[56px] text-center leading-none font-medium">{value}</span>
                    <span className="text-[10px] md:text-[18px] uppercase tracking-[0.16em] text-center">{label}</span>
                </span>
            </a>
        </div>
        
    )
}