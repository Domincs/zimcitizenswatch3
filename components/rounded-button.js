export function RoundedButton({children, ...rest}) {
    return (
        <button className={`font-serif rounded-[20px] text-[10px] text-black uppercase border px-4 py-0 sm:py-2 md:py-2 lg:py-2 xl:py-0`} {...rest}>
            {children}
        </button>
    )
    
}