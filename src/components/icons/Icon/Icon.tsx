import * as React from 'react';
import "../../variables.css"
import "../icons.css"

export type IconProps = React.SVGAttributes<SVGElement> & {
  className?: string;
  color?: 'primary' | 'secondary' | 'accent';
};

const Icon: React.FC<React.PropsWithChildren<IconProps>> = ({
  className = '',
  color,
  width = 24,
  height = 24,

}) => {
  const colorClass = color ? `icon-${color}` : '';

  return (
    <svg
      className={`${className} ${colorClass}`}
      width={width}
      height={height}
    >
    </svg>
  );
};

export default Icon;
