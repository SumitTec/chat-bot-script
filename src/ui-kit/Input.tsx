import React, { ChangeEvent } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  restStyle?: string;
  name: string;
  value?: string;
  readOnly?: boolean;
  id?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  disabled?: boolean;
  onKeyPress?: (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  id,
  placeholder,
  restStyle = "",
  name,
  value,
  readOnly,
  onChange,
  maxLength,
  disabled,
  onKeyPress,
}) => {
  return (
    <input
      type={type}
      id={id}
      className={`w-full px-5 h-14 bg-white rounded-md border border-transparent focus:border-black placeholder:placeholderTxt font-normal font-openSans italic text-black ${restStyle}`}
      placeholder={placeholder}
      name={name}
      value={value?.trimStart()}
      onChange={onChange}
      readOnly={readOnly}
      maxLength={maxLength}
      disabled={disabled}
      onKeyPress={onKeyPress}
    />
  );
};
export default Input;
