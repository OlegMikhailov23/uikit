import React, { FC, ReactElement } from 'react';
import styles from './CustomButton.module.scss';

export interface CustomButtonProps {
  children: ReactElement,
  color: string;
  big?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({children, color, big, ...props}) => {
  return (
    <button className={`${styles.btn} ${big ? styles.bigBtn : ''}`} style={{color: color}} {...props}>
      {styles}
      {children}
    </button>
  );
};

export default CustomButton;