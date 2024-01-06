import { CSSProperties, ReactNode, FC, JSXElementConstructor } from 'react';
import cn from 'classnames';

interface Props {
    className?: string;
    id?: string;
    style?: CSSProperties;
    children?: ReactNode;
    as?: 'div' | 'section' | 'nav' | 'header' | JSXElementConstructor<any>;
    full?: boolean;
}

export const RightBox: FC<Props> = ({
    className = '',
    style = {},
    as: Tag = 'div',
    id,
    children,
    full,
    ...rest
}) => {
    const classes = cn(
        {
            'w-2/3': !full,
        },
        className
    );

    return (
        <Tag className={classes} id={id} {...rest}>
            {children}
        </Tag>
    );
};
