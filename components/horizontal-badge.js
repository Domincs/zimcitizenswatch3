export function HorizontalBadge({ background, children, ...rest }) {
    return (
        <div className={`min-h-[31px] min-w-12 py-1 ${background} uppercase flex justify-between rounded-[20px] text-[10px] md:text-[16px] tracking-[0.24em] px-2`} {...rest}>
            {children}
        </div>
    )
}