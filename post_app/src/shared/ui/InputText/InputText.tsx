import React, { useEffect } from "react";
import styles from "./InputText.module.scss";
import withLogging from "../../../components/HOC/withLogging";
import { PROP_MESSAGE } from "../../../const";

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
    <>
      {label && <label>{label}</label>}
      <input
        className={`${styles["bordered"]}`}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </>
  );
};

InputText.displayName = "InputText";

export default withLogging(InputText, "InputText", PROP_MESSAGE);
