import React from 'react';
import classNames from 'classnames';
import './Input.css';

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, value, onChange, afterSlot, ...props }, ref) => {
    return (
      <div className={classNames('input-wrapper', className)}>
        <input
          ref={ref}
          className="input-field"
          type="text" // Добавил атрибут type
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />

        {afterSlot && <div className="input-icon">{afterSlot}</div>}
      </div>
    );
  }
);

export default Input;
