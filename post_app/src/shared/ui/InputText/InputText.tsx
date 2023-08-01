import React, { useEffect } from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  propsMessage?: string;
}

const InputText: React.FC<InputProps> = ({
  label,
  placeholder,
  onChange,
  value,
  propsMessage,
}) => {
  useEffect(() => {
    propsMessage && console.log(`${propsMessage} ${InputText.displayName}`);
  }, []);
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

InputText.displayName = "InputText";

export default InputText;
