import Link from 'next/link';
import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
    href: string,
    children: ReactNode,
    classNames?: string,
    variant?: "primary" | "secondary" | "white" | "custom" | "classic"
}

export const ButtonLink: FC<Props> = ({ href, children, classNames, variant = "primary", ...rest }: Props) => {
    const classes = cn(
        "font-sans text-sm uppercase flex flex-row gap-2 border-b-[1.5px] w-fit flex flex-row gap-4 items-center",
        {
            'border-green-light text-green-light': variant === "primary",
        },
        {
            'text-gray-light-2': variant === "classic",
        },
        {
            'border-white text-white': variant === "white",
        },
        classNames
    );

    return (
        <Link href={href} {...rest}>
            <a className={classes}>
                {children}
                <FaLongArrowAltRight />
            </a>
        </Link>
    )
}