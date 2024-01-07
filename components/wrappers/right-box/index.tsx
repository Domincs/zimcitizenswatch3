import { CSSProperties, ReactNode, FC, JSXElementConstructor } from 'react';
import cn from 'classnames';

interface Props {
    className?: string;
    id?: string;
    style?: CSSProperties;
    children?: ReactNode;
    as?: 'div' | 'section' | 'nav' | 'header' | JSXElementConstructor<any>;
    full?: boolean;
    primary?: boolean;
}

export const RightBox: FC<Props> = ({
    className = '',
    style = {},
    as: Tag = 'div',
    id,
    children,
    full,
    primary = true,
    ...rest
}) => {
    const classes = cn(
        'pr-1 sm:pr-[2rem] lg:pr-[4rem] xl:pr-[5rem] 2xl:pr-[6rem] rounded-l-lg',
        {
            'w-2/3': !full,
        },
        {
            "bg-green-light": primary,
        },
        className
    );

    return (
        <Tag className={classes} id={id} {...rest}>
            {children}
        </Tag>
    );
};
