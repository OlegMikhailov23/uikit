import React, { FC, ReactElement } from "react";
import styles from "./CustomButton.module.scss";

export interface CustomButtonProps {
  children: ReactElement;
  color: string;
  big?: boolean;
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  color,
  big = false,
  ...props
}) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${big ? styles.bigBtn : ""}`}
      style={{ color }}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
