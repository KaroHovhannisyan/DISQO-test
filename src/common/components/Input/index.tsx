import React from "react";
import "./Input.styles.scss";

interface IProps {
  placeholder: string;
}

const Input: React.FC<IProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default Input;
