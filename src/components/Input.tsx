import React from "react";

interface IInput {
  title?: string;
  className?: string;
  disabled?: boolean;
  type?: string;
  placeholder?: string;
  onChangeCallback?: React.Dispatch<any>;
  value: any;
}

const Input: React.FC<IInput> = ({
  title,
  disabled = false,
  type = "",
  className,
  placeholder,
  value,
  onChangeCallback = () => {},
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {title && <span className="text-base">{title}</span>}
      <input
        className={
          className
            ? className
            : "border-solid border-brandB text-sm border-2 h-10 w-60 rounded-lg text-black text-center"
        }
        onChange={(e) => onChangeCallback(e.target.value)}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
};

export default Input;
