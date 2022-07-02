export function RoundedButton({children, ...rest}) {
    return (
        <button className={`transition ease-in-out duration-300 hover:scale-110 font-serif rounded-[20px] text-[10px] text-black uppercase border w-fit`} {...rest}>
            {children}
        </button>
    )
    
}