export function FilterBadge({active, text}) {
    return(
        <div className={`text-white px-3 py-0 flex gap-2 w-fit rounded-[20px] text-[16px] flex items-center `+(active ? "bg-orange" : "bg-black")}>
            <img src={ active ? "/icons/white-tick.svg": "/icons/white-plus.svg"} className="h-[13px]"/>
            {text}
        </div>
    )
}