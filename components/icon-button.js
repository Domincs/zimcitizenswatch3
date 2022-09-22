
export function IconButton({ img, active, ...rest }) {
    return (
        <button className={`rounded-[4px] w-8 h-8 p-[6px] disabled:bg-gray-normal p-1 bg-white ${active ? 'bg-[#A3B7C9]': 'border-[1px] border-[#A3B7C9]' }`} {...rest}>
            <img src={img} className="w-full" />
        </button>
    )
}