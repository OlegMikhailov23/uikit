import React, { FC } from 'react';
import './CustomInput.css';

export interface CustomInputProps {
  big: boolean;
  placeholder: string;
  label: string;
}

const CustomInput: FC<CustomInputProps> = ({big, placeholder, label, ...props}) => {
  const classes = ['customInput'];

  if (big) {
    classes.push('big-input')
  }

  return (
    <label>
      {label}
      <input className={classes.join(' ')} placeholder={placeholder} {...props}  />
    </label>
  );
};

export default CustomInput;