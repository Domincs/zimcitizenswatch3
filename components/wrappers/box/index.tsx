import React, {
  FC,
  HTMLAttributes,
  CSSProperties,
  ReactNode,
  JSXElementConstructor,
} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  as?:
    | 'div'
    | 'form'
    | 'section'
    | 'header'
    | 'footer'
    | 'article'
    | JSXElementConstructor<any>;
  style?: CSSProperties;
  html?: string;
  ref?: React.RefObject<HTMLElement>;
  children?: ReactNode;
}

export const Box: FC<Props> = ({
  className = '',
  style = {},
  as: Tag = 'div',
  children,
  html,
  ref,
  ...rest
}) => {
  const htmlProps = html
    ? {
        dangerouslySetInnerHTML: { __html: html },
      }
    : {};

  return (
    <Tag className={className} ref={ref} style={style} {...rest} {...htmlProps}>
      {children}
    </Tag>
  );
};
