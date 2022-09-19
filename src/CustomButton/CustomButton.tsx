import React, { FC, ReactElement } from 'react';
import './CustomButton.css';

export interface CustomButtonProps {
  children: ReactElement,
  color: string;
  big?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({children, color, big, ...props}) => {
  const rootClasses = ['btn']

  if (big) rootClasses.push('big-btn');

  return (
    <button className={rootClasses.join(' ')} style={{color: color}} {...props}>
      {children}
    </button>
  );
};

export default CustomButton;