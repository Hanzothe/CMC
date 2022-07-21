import { useState } from "react";
import "../global.css";
import CalcG from "./CalcG";
import CalcML from "./CalcML";
import Flyers from "./Flyers";

const Index = () => {
  // const [outputType, setOutputType] = useState<Number | null>(null);

  // console.log("outputType: ", outputType);

  return (
    <>
      <div className="flex flex-col gap-12 items-center text-white text-7xl">
        {/* <Flyers setOutputType={setOutputType} />
        <CalcML /> */}
        <CalcG />
      </div>
    </>
  );
};

export default Index;
