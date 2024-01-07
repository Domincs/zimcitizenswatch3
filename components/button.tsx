import classNames from 'classnames';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    variation?: "primary" | "outline";
    className?: string;
}

export function Button({ children, variation = "primary", className, ...rest }: Props) {

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
        },
        className
    );

    return (
        <button className={buttonClasses} {...rest}>
            {children}
        </button>
    )
}