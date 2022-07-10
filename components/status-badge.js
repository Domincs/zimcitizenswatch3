export function StatusBadge({ color, icon , additional_classes}) {
    return (
        <div className={`w-[31px] min-h-12 h-full ${color} ${additional_classes} rounded-[20px]`}>
            <img src={icon} className="m-auto mt-1" />
        </div>
    )
}