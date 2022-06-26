import React, { useState } from "react";
import "../global.css";
import Calcg from "./Calcg";
import Calcml from "./Calcml";
import Flyers from "./Flyers";

export default function Index() {
  return (
    <>
      <div className="flex flex-col gap-12 items-center text-white text-7xl">
        <Calcg />
      </div>
    </>
  );
}
