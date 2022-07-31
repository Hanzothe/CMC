import React from "react";

interface IOption {
  name: string;
  value: string | number;
}
interface ISelectBox {
  title?: string;
  className?: string;
  options: IOption[];
  placeholder: string;
  onChangeCallback: React.Dispatch<any>;
}

const SelectBox: React.FC<ISelectBox> = ({
  title,
  options,
  className,
  placeholder,
  onChangeCallback,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {title && <span className="text-base">{title}</span>}
      <select
        className={
          className
            ? className
            : "text-black text-xl text-center rounded-lg h-10 w-60 relative"
        }
        onChange={(e) => onChangeCallback(e.target.value)}
        placeholder={placeholder}
      >
        {options.map((option) => (
          <option value={option.value}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
