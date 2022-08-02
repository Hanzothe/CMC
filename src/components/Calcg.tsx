import { useEffect, useState } from "react";

import SelectBox from "./SelectBox";
import Input from "./Input";

import { optionsG, optionsIngredients, optionsMeasure } from "../data";

import "../global.css";

const Calcg = () => {
  // o objeto selectedmeasure armazena o valor clicado na selectbox
  const [selectedInputMeasure, setSelectedInputMeasure] = useState();
  // indexI armazena o valor do Select dos ingredientes, carregando o index que vai identificar cada ingrediente, sendo [0] o primeiro elemento de optionsG, no caso, Farinha de Trigo
  const [indexI, setIndexI] = useState(0);

  const [inputValue, setInputValue] = useState("");
  const [a, setA] = useState("");

  const [firstMeasure, setFirstMeasure] = useState(0);
  const [secondMeasure, setSecondMeasure] = useState(0);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const resultCalculated = firstMeasure * secondMeasure;
    setResult(resultCalculated);
  }, [firstMeasure, secondMeasure]);

  const Sopa = optionsG.map((e) => e.colherSopa); //Essas consts são um array com todos os valores de Colher de Chá
  const Cha = optionsG.map((e) => e.colherCha);
  const Xicara = optionsG.map((e) => e.xicara);
  const America = optionsG.map((e) => e.copoAmericano);
  const Sobre = optionsG.map((e) => e.colherDeSobremesa);

  if (selectedInputMeasure == "colherSopa") {
    setFirstMeasure(Sopa[`${indexI}`]);
  }
  if (selectedInputMeasure == "colherCha") {
    setFirstMeasure(Cha[`${indexI}`]);
  }
  if (selectedInputMeasure == "xicara") {
    setFirstMeasure(Xicara[`${indexI}`]);
  }
  if (selectedInputMeasure == "copoAmericano") {
    setFirstMeasure(America[`${indexI}`]);
  }
  if (selectedInputMeasure == "colherDeSobremesa") {
    setFirstMeasure(Sobre[`${indexI}`]);
  }

  if (a == "colherSopa") {
    setSecondMeasure(Sopa[`${indexI}`]);
  }
  if (a == "colherCha") {
    setSecondMeasure(Cha[`${indexI}`]);
  }
  if (a == "xicara") {
    setSecondMeasure(Xicara[`${indexI}`]);
  }
  if (a == "copoAmericano") {
    setSecondMeasure(America[`${indexI}`]);
  }
  if (a == "colherDeSobremesa") {
    setSecondMeasure(Sobre[`${indexI}`]);
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <span>Massa</span>

        <SelectBox
          title="O que você tem?"
          options={optionsIngredients}
          placeholder=""
          onChangeCallback={setIndexI}
        />

        <span className="text-base">Quanto você tem?</span>
        <Input
          value={inputValue}
          onChangeCallback={setInputValue}
          type="number"
        />

        <SelectBox
          // TODO - De um title pra isso
          // title=''
          options={optionsMeasure}
          placeholder="Selecione uma medida"
          onChangeCallback={setSelectedInputMeasure}
        />

        <SelectBox
          title="Você quer converter em?"
          options={optionsMeasure}
          placeholder="Selecione uma medida"
          onChangeCallback={setA}
        />

        <span className="text-base ">O Resultado da conversão!</span>
        <Input disabled value={result} type="number" />
      </div>
    </>
  );
};

export default Calcg;
