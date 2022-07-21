import React from "react";

interface ISelectBox {
  onChangeCallback: React.Dispatch<any>;
}

const SelectBox: React.FC<ISelectBox> = ({ onChangeCallback }) => {
  return (
    <div>
      <select
        className="text-black  text-xl text-center rounded-lg h-10 w-60 relative   "
        onChange={(e) => onChangeCallback(e.target.value)}
      >
        <option value="">Selecione uma medida</option>
        <option value={["xicara", "xicara2"]}> Xícara de Chá </option>
        <option value={["copoAmericano", "copoAmericano2"]}>
          Copo Americano
        </option>
        <option value={["colherCha", "colherCha2"]}>Colher de Chá</option>
        <option value={["colherSopa", "colherSopa2"]}>Colher de Sopa</option>
        <option value={["colherDeSobremesa", "colherDeSobremesa2"]}>
          Colher de Sobremesa
        </option>
      </select>
    </div>
  );
};

export default SelectBox;
