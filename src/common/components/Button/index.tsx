import React from "react";
import "./Button.styles.scss";

interface IProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IProps> = ({ text, ...rest }) => {
  return <button {...rest}>{text}</button>;
};

export default Button;
