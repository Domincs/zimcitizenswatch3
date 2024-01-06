import classNames from 'classnames';

export function Button({ children, variation="primary", size="", ...rest}) {

    const buttonClasses = classNames(
        'transition',
        'ease-in-out',
        'duration-300',
        'hover:scale-110',
        'rounded-full',
        'leading-none',
        'tracking-[.1em]',
        'text-base',
        'px-6',
        'py-4',
        {
            'border border-black bg-transparent text-black': variation === "outline",
        },
        {
            'text-white bg-orange': variation === "primary",
        }
    );

    return(
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    )
}