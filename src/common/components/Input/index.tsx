import React from "react";
import "./Input.styles.scss";

interface IProps {
  placeholder: string;
  name: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
}

const Input: React.FC<IProps> = ({ placeholder, ...rest }) => {
  return (
    <div className="form__group field">
      <input placeholder={placeholder} className="form__field" {...rest} />
      <label htmlFor={placeholder} className="form__label">
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
