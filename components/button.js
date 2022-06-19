export function Button({ children, color, ...rest}) {
    return(
        <button className={"rounded-full px-8 py-2 leading-none tracking-[.1em] text-xs uppercase font-serif " + (color !== 'orange'? "border border-black bg-transparent text-black" : "text-white bg-orange") } {...rest}>
            {children}
        </button>
    )
}