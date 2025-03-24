import * as React from 'react';
import { IconProps } from '../Icon';
import { ReactComponent as CheckIconSVG } from './CheckIcon.svg';
import '../../variables.css';
import '../icons.css';

const CheckIcon: React.FC<IconProps> = ({
  className = '',
  color,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <>
        <svg
        width={width}
        height={height}
        className={`icon ${className} ${color ? `icon-${color}` : ''}`}
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M1 5.6129L6.87755 12L17 1" fill="none" stroke-width="2" />
      </svg>
    </>
  );
};

export default CheckIcon;
