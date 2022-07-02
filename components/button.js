export function Button({ children, color, ...rest}) {
    return(
        <button className={"transition ease-in-out duration-300 hover:scale-110 rounded-full leading-none tracking-[.1em] text-xs uppercase font-serif " + (color !== 'orange'? "border border-black bg-transparent text-black" : "text-white bg-orange") } {...rest}>
            {children}
        </button>
    )
}