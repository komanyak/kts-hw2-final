import * as React from 'react';
import '../variables.css';
import './Text.css';

export type TextProps = {
  className?: string;
  view?: 'title' | 'button' | 'p-20' | 'p-18' | 'p-16' | 'p-14';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'p' | 'span';
  weight?: 'normal' | 'medium' | 'bold';
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent';
  maxLines?: number;
};

const Text: React.FC<TextProps> = ({
  className = '',
  view,
  tag: Tag = 'p',
  weight,
  children,
  color,
  maxLines,
  ...props
}) => {
  const textClasses = [
    'text',
    view ? `text-${view}` : '',
    weight ? `text-weight-${weight}` : '',
    color ? `text-color-${color}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style: React.CSSProperties = maxLines
    ? {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical' as const,
        WebkitLineClamp: maxLines,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    : {};

  return (
    <Tag style={style} className={textClasses} {...props}>
      {children}
    </Tag>
  );
};

export default Text;
