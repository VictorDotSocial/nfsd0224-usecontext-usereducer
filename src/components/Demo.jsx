import { useState } from "react";
import { DemoContext } from "../contexts/demoContext";
import Father from "./Padre";

const Demo = () => {
  const [info, setInfo] = useState({
    text: "Este es mi Demo text",
  });

  const infoToProvide = {
    info,
    setInfo,
  };

  return (
    <>
      <DemoContext.Provider value={infoToProvide}>
        <Father />
      </DemoContext.Provider>
    </>
  );
};

export default Demo;
