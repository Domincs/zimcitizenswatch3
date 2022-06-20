export function StatusBadge({ color, icon }) {
    return (
        <div className={`w-[31px] min-h-12 h-full bg-[${color}] rounded-[20px]`}>
            <img src={icon} className="m-auto mt-1" />
        </div>
    )
}