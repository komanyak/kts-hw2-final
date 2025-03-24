import * as React from 'react';
import { IconProps } from '../Icon';
import { ReactComponent as ArrowDownSVG } from './ArrowDownIcon.svg';
import '../../variables.css';
import '../icons.css';

const ArrowDownIcon: React.FC<IconProps> = ({
  className = '',
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <>
      <svg
        className={`icon ${className} ${color ? `icon-${color}` : ''}`}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fill-rule="evenodd"
          stroke-width="0"
          clip-rule="evenodd"
          d="M0.335632 1.74741L1.66436 0.252594L10 7.66205L18.3356 0.252594L19.6644 1.74741L10 10.338L0.335632 1.74741Z"
        />
      </svg>
    </>
  );
};

export default ArrowDownIcon;
