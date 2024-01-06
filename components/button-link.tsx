import Link from 'next/link';
import { FC, ReactNode } from 'react';
import cn from 'classnames';
import { FaLongArrowAltRight } from "react-icons/fa";

type Props = {
    href: string,
    children: ReactNode,
    classNames?: string,
    variant?: "primary" | "secondary" | "white" | "custom"
}

export const ButtonLink: FC<Props> = ({href, children, classNames, variant="primary",...rest}: Props) => {
    const classes = cn(
            "font-serif text-sm uppercase flex flex-row gap-2 font-bold border-b-[1.5px] w-fit flex flex-row gap-4",
        {
            'border-green-light text-green-light': variant === "primary",
        },
        {
            'border-white text-white': variant === "white",
        },
        classNames
    );

    return(
        <Link href={href} {...rest}>
            <a className={classes}>
                {children}
                <FaLongArrowAltRight />
            </a>
        </Link>
    )
}