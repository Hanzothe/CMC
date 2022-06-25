import React, { useState } from "react";
import "../global.css";
import Calcml from "./Calcml";
import Flyers from "./Flyers";

export default function Index() {
  const [jooj, setJooj] = useState(Number);

  console.log(jooj);

  return (
    <>
      <div className="flex flex-col gap-12 items-center text-white text-7xl">
        <h1>Conversor de Medidas Culinárias</h1>

        <span className="text-2xl">
          Selecione a medida final clicando no card e a inicial abaixo
        </span>
        <Flyers />

        <Calcml />
      </div>
    </>
  );
}
