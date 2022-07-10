export function HorizontalBadge({ background, children, additional_classes, ...rest }) {
    return (
        <div className={`min-h-[31px] min-w-12 py-1 ${background} ${additional_classes} uppercase flex justify-between rounded-[20px] text-[10px] md:text-[16px] tracking-[0.24em] px-2`} {...rest}>
            {children}
        </div>
    )
}