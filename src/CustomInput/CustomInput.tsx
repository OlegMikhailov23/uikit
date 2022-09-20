import React, { FC } from 'react';
import './CustomInput.css';

export interface CustomInputProps {
  big: boolean;
  placeholder: string;
  label: string;
}

const CustomInput: FC<CustomInputProps> = ({big, placeholder, label, ...props}) => {
  return (
    <label>
      {label}
      <input className={'customInput'} placeholder={placeholder} {...props}  />
    </label>
  );
};

export default CustomInput;