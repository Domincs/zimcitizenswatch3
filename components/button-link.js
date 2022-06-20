export function ButtonLink({link, children, ...rest}) {
    return(
        <a href={link} className="font-serif text-[12px] uppercase flex flex-row gap-2 font-bold" {...rest}>{children}</a>
    )
}