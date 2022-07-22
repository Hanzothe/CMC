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
        <option value="xicara"> Xícara de Chá </option>
        <option value="copoAmericano">Copo Americano</option>
        <option value="colherCha">Colher de Chá</option>
        <option value="colherSopa">Colher de Sopa</option>
        <option value="colherDeSobremesa">Colher de Sobremesa</option>
      </select>
    </div>
  );
};

export default SelectBox;
