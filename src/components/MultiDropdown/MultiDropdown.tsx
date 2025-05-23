import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import Input from '../Input';
import './MultiDropDown.css';
import AfterSlot from './afterSlot.svg';

export type Option = {
  key: string;
  value: string;
};

export type MultiDropdownProps = {
  className?: string;
  options: Option[];
  value: Option[];
  onChange: (value: Option[]) => void;
  disabled?: boolean;
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
  className,
  options,
  value,
  onChange,
  disabled,
  getTitle,
  ...props
}) => {
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter(option =>
    option.value.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    const isSelected = value.some(item => item.key === option.key);
    const newValue = isSelected
      ? value.filter(item => item.key !== option.key)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div ref={dropdownRef} className={classNames('multi-dropdown', className)}>
      <Input
        value={isOpen ? search : value.length > 0 ? getTitle(value) : ''}
        onChange={setSearch}
        placeholder={value.length === 0 ? getTitle(value) : ''}
        onFocus={() => {
          if (!disabled) {
            setIsOpen(true);
            setSearch('');
          }
        }}
        disabled={disabled}
        afterSlot={<img src={AfterSlot} alt="dropdown icon" />}
        {...props}
      />
      {isOpen && !disabled && (
        <div className="dropdown-options">
          {filteredOptions.map(option => (
            <div
              key={option.key}
              className={classNames('dropdown-option', {
                selected: value.some(v => v.key === option.key),
              })}
              onClick={() => handleSelect(option)}
            >
              {option.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiDropdown;