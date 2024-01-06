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

export const LeftBox: FC<Props> = ({
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
      'w-1/3 pl-28': !full,
    },
    className
  );

  return (
    <Tag className={classes} id={id} {...rest}>
      {children}
    </Tag>
  );
};
