import React, { FC } from 'react';
import styles from './CustomInput.module.scss';

export interface CustomInputProps {
  big: boolean;
  placeholder: string;
  label: string;
}

const CustomInput: FC<CustomInputProps> = ({big, placeholder, label, ...props}) => {
  return (
    <label>
      {label}
      <input className = {`${styles.customInput} ${big ? styles.bigInput : ''}`} placeholder={placeholder} {...props}  />
    </label>
  );
};

export default CustomInput;