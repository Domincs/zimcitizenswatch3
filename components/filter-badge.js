export function FilterBadge({active, text, filterKeyNode}) {
    return(
        <button 
            className={`text-white px-3 py-0 flex gap-2 w-fit rounded-[20px] text-[16px] flex items-center `+(active ? "bg-orange" : "bg-black")}
            onClick={() => filterKeyNode(text)}
        >
            <img src={ active ? "/icons/white-tick.svg": "/icons/white-plus.svg"} className="h-[13px]"/>
            {text}
        </button>
    )
}