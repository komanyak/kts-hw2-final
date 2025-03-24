import React from 'react';
import classNames from 'classnames';
import CheckIcon from '../icons/CheckIcon';
import './CheckBox.css';

export type CheckBoxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange'
> & {
  /** Вызывается при клике на чекбокс */
  onChange: (checked: boolean) => void;
};

const CheckBox: React.FC<CheckBoxProps> = ({
  onChange,
  checked,
  disabled,
  className,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(e.target.checked);
    }
  };

  const checkboxClasses = classNames(
    'checkbox',
    {
      'checkbox--checked': checked,
      'checkbox--disabled': disabled,
    },
    className
  );

  return (
    <label className={checkboxClasses}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        {...props}
        className="checkbox__input"
      />
      <span className="checkbox__custom">
        {checked && (
          <svg
            className="checkbox__icon"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 11.6129L9.87755 18L20 7"
              stroke={disabled ? '#00000033' : '#518581'}
              strokeWidth="2"
            />
          </svg>
        )}
      </span>
    </label>
  );
};

export default CheckBox;
