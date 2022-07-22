import { useState } from "react";
import "../global.css";
import SelectBox from "./SelectBox";

const Calcg = () => {
  const [selectedInputMeasure, setSelectedInputMeasure] = useState(); //o objeto selectedmeasure armazena o valor clicado na selectbox
  const [indexI, setIndexI] = useState<Number>(0); //indexI armazena o valor do Select dos ingredientes, carregando o index que vai identificar cada ingrediente, sendo [0] o primeiro elemento de optionsG, no caso, Farinha de Trigo
  const [a, setA] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  let firstMeasure: number = 0;
  let secondMeasure: number = 0;

  const result: number = firstMeasure * secondMeasure;

  interface IOption {
    name: string;
    colherCha: number;
    xicara: number;
    copoAmericano: number;
    colherSopa: number;
    colherDeSobremesa: number;
  }

  const optionsG: IOption[] = [
    {
      name: "Farinha de Trigo",
      colherCha: 3.5,
      xicara: 120,
      copoAmericano: 165,
      colherSopa: 7.5,
      colherDeSobremesa: 5,
    },
    {
      name: "Açúcar",
      colherCha: 4,
      xicara: 200,
      copoAmericano: 200,
      colherSopa: 14,
      colherDeSobremesa: 9,
    },
    {
      name: "Chocolate em Pó",
      colherCha: 3,
      xicara: 128,
      copoAmericano: 175,
      colherSopa: 9,
      colherDeSobremesa: 4.5,
    },
    {
      name: "Líquidos",
      colherCha: 3,
      xicara: 128,
      copoAmericano: 175,
      colherSopa: 9,
      colherDeSobremesa: 3,
    },
    {
      name: "Amido de Milho",
      colherCha: 2.5,
      xicara: 126,
      copoAmericano: 172,
      colherSopa: 7.5,
      colherDeSobremesa: 2.5,
    },
    {
      name: "Polvilho",
      colherCha: 7,
      xicara: 200,
      copoAmericano: 273,
      colherSopa: 20,
      colherDeSobremesa: 6.6,
    },
    {
      name: "Fubá",
      colherCha: 6.5,
      xicara: 80,
      copoAmericano: 110,
      colherSopa: 18,
      colherDeSobremesa: 13,
    },
    {
      name: "Manteiga",
      colherCha: 2,
      xicara: 100,
      copoAmericano: 140,
      colherSopa: 7,
      colherDeSobremesa: 5,
    },
    {
      name: "Café",
      colherCha: 2,
      xicara: 100,
      copoAmericano: 140,
      colherSopa: 7,
      colherDeSobremesa: 5,
    },
    {
      name: "Coco Ralado",
      colherCha: 2,
      xicara: 100,
      copoAmericano: 140,
      colherSopa: 7,
      colherDeSobremesa: 5,
    },
  ];
  const Sopa = optionsG.map((e) => e.colherSopa); //Essas consts são um array com todos os valores de Colher de Chá
  const Cha = optionsG.map((e) => e.colherCha);
  const Xicara = optionsG.map((e) => e.xicara);
  const America = optionsG.map((e) => e.copoAmericano);
  const Sobre = optionsG.map((e) => e.colherDeSobremesa);

  if (selectedInputMeasure == "colherSopa") {
    firstMeasure = Sopa[`${indexI}`];
  }
  if (selectedInputMeasure == "colherCha") {
    firstMeasure = Cha[`${indexI}`];
  }
  if (selectedInputMeasure == "xicara") {
    firstMeasure = Xicara[`${indexI}`];
  }
  if (selectedInputMeasure == "copoAmericano") {
    firstMeasure = America[`${indexI}`];
  }
  if (selectedInputMeasure == "colherDeSobremesa") {
    firstMeasure = Sobre[`${indexI}`];
  }

  if (a == "colherSopa") {
    secondMeasure = Sopa[`${indexI}`];
  }
  if (a == "colherCha") {
    secondMeasure = Cha[`${indexI}`];
  }
  if (a == "xicara") {
    secondMeasure = Xicara[`${indexI}`];
  }
  if (a == "copoAmericano") {
    secondMeasure = America[`${indexI}`];
  }
  if (a == "colherDeSobremesa") {
    secondMeasure = Sobre[`${indexI}`];
  }

  // console.log(firstMeasure);
  // console.log(secondMeasure);
  // // console.log(inputValue);
  console.log(a);

  return (
    <>
      <div className="flex flex-col items-center">
        <span>Massa</span>
        <span className="text-base ">O que você tem?</span>
        <select
          className="border-solid border-brandB text-sm border-2 h-10 w-60 rounded-lg text-black text-center"
          onChange={(e) => setIndexI(e.target.value)}
        >
          <option value="0">Farinha de Trigo</option>
          <option value="1">Açúcar</option>
          <option value="2">Chocolate em Pó</option>
          <option value="3">Líquidos</option>
          <option value="4">Amido de Milho</option>
          <option value="5">Polvilho</option>
          <option value="6">Fubá</option>
          <option value="7">Manteiga</option>
          <option value="8">Café</option>
          <option value="9">Coco Ralado</option>
        </select>
        <span className="text-base ">Quanto você tem?</span>
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="Number"
          className="border-solid border-brandB text-sm border-2 h-10 w-60 rounded-lg text-black text-center"
        />
        <SelectBox onChangeCallback={setSelectedInputMeasure} />
        <span className="text-base ">Você quer converter em?</span>
        <select
          className="text-black  text-xl text-center rounded-lg h-10 w-60 relative   "
          onChange={(e) => setA(e.target.value)}
        >
          <option value="">Selecione uma medida</option>
          <option value="xicara"> Xícara de Chá </option>
          <option value="copoAmericano">Copo Americano</option>
          <option value="colherCha">Colher de Chá</option>
          <option value="colherSopa">Colher de Sopa</option>
          <option value="colherDeSobremesa">Colher de Sobremesa</option>
        </select>
        <span className="text-base ">O Resultado da conversão!</span>
        <input
          type="Number"
          className="border-solid border-brandB text-sm border-2 h-10 w-60 rounded-lg text-black text-center"
        />
      </div>
    </>
  );
};

export default Calcg;
