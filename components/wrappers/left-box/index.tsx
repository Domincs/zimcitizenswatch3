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

export const LeftBox: FC<Props> = ({
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
    'pl-1 sm:pl-[2rem] lg:pl-[4rem] xl:pl-[5rem] 2xl:pl-[6rem] rounded-r-lg',
    {
      'w-1/3': !full,
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
