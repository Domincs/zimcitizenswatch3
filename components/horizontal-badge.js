export function HorizontalBadge({ background, children, ...rest }) {
    return (
        <div className={`h-[31px] min-w-12 bg-${background} uppercase rounded-[20px] tracking-[0.24em] px-2`} {...rest}>
            {children}
        </div>
    )
}