import React, { useDebugValue, useState } from "react";
import barbellimg from "../images/barbell-thin.svg";
import dropimg from "../images/drop-thin.svg";
import coffeeimg from "../images/coffee-thin.svg";
import Calcml from "./Calcml";

export default function Flyers() {
  const [measureType, setMeasureType] = useState<String | null>(null);
  const [outputType, setOutputType] = useState<Number | null>(null);

  const measureTypes = {
    ML: {
      title: "Líquidos(ml)",
      output: 1,
      image: {
        source: dropimg,
        alt: "Imagem de uma gota",
      },
    },
    G: {
      title: "Peso(g)",
      output: 2,
      image: {
        source: barbellimg,
        alt: "Imagem de um peso de academia",
      },
    },
    X: {
      title: "Xícaras",
      output: 3,
      image: {
        source: coffeeimg,
        alt: "Imagem de uma Xícara",
      },
    },
  };

  return (
    <div className="flex flex-row items-center gap-6">
      {Object.entries(measureTypes).map(([key, value]) => {
        const teste = outputType;
        console.log(teste);
        return (
          <>
            <button
              key={key}
              onClick={() => {
                setMeasureType(value.title);
                setOutputType(value.output);
              }}
              type="button"
              className="border-4 border-transparent focus:border-brandB focus:outline-none hover:border-brandB hover:bg-brandD bg-brandC  w-72 h-72 rounded-2xl py-5 flex flex-col items-center text-4xl transition duration-300 ease-in-out"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          </>
        );
      })}
    </div>
  );
}
