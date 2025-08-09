import S from './Input.module.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';

interface InputFieldProps {
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder: string;
  password?: boolean;
}

export default function Input({
  name,
  value = "",
  onChange,
  required = false,
  placeholder,
  password = false
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange(e);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={S.wrapper}>
      <input
        type={password && !showPassword ? 'password' : 'text'}
        name={name}
        value={inputValue}
        onChange={handleChange}
        required={required}
        placeholder={placeholder}
      />
      {password && (
        showPassword ? 
          <FaEyeSlash onClick={toggleShowPassword} size={23} className={S.eyeIcon} /> : 
          <FaEye onClick={toggleShowPassword} size={23} className={S.eyeIcon} />
      )}
    </div>
  );
}
