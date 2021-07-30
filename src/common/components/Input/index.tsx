import React from "react";
import "./Input.styles.scss";

interface IProps {
  placeholder?: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input: React.FC<IProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default Input;
