import { useState } from "react";
import "../global.css";
import SelectBox from "./SelectBox";

export default function Calcg() {
  const [selectedInputMeasure, setSelectedInputMeasure] = useState(); //o objeto selectedmeasure armazena o valor clicado na selectbox

  return (
    <div className="flex flex-col items-center">
      <span>Massa</span>
      <select className="text-black  text-xl text-center rounded-lg h-10 w-64 relative">
        <option value="">Selecione um ingrediente</option>
        <option
          colher-de-cha="3.5"
          xicara="120"
          copo-americano="165"
          colher-de-sopa="7.5"
          colher-de-sobremesa="5"
        >
          Farinha de Trigo
        </option>
        <option
          colher-de-cha="4"
          xicara="200"
          copo-americano="200"
          colher-de-sopa="14"
          colher-de-sobremesa="9"
        >
          Açúcar
        </option>
        <option
          colher-de-cha="2"
          xicara="100"
          copo-americano="137.5"
          colher-de-sopa="6"
          colher-de-sobremesa="4.3"
        >
          Chocolate em Pó
        </option>
        <option
          colher-de-cha="5"
          xicara="240"
          copo-americano="250"
          colher-de-sopa="15"
          colher-de-sobremesa="7.5"
        >
          Líquidos
        </option>
        <option
          colher-de-cha="3"
          xicara="128"
          copo-americano="175"
          colher-de-sopa="9"
          colher-de-sobremesa="4.5"
        >
          Amido de Milho
        </option>
        <option
          colher-de-cha="3"
          xicara="128"
          copo-americano="175"
          colher-de-sopa="9"
          colher-de-sobremesa="3"
        >
          Polvilho
        </option>
        <option
          colher-de-cha="2.5"
          xicara="126"
          copo-americano="172"
          colher-de-sopa="7.5"
          colher-de-sobremesa="2.5"
        >
          Fubá
        </option>
        <option
          colher-de-cha="7"
          xicara="200"
          copo-americano="273"
          colher-de-sopa="20"
          colher-de-sobremesa="6.6"
        >
          Manteiga
        </option>
        <option
          colher-de-cha="6.5"
          xicara="80"
          copo-americano="110"
          colher-de-sopa="18"
          colher-de-sobremesa="13"
        >
          Café
        </option>
        <option
          colher-de-cha="2"
          xicara="100"
          copo-americano="140"
          colher-de-sopa="7"
          colher-de-sobremesa="5"
        >
          Coco Ralado
        </option>
        {/* <option>Mel</option>
                <option>Queijo</option>
                <option>Bicarbonato de Sódio</option>
                <option>Fermento</option>
                <option>Aveia</option> */}
      </select>
      <div className="flex flex-row gap-28 items-center">
        <SelectBox onChangeCallback={setSelectedInputMeasure} />
        <SelectBox />
      </div>
    </div>
  );
}
