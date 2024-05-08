// Importamos el hook useContext y el contexto para poder hacer uso de ello
import { useContext } from "react";
import { DemoContext } from "../contexts/demoContext";

const Nieto = ({ children }) => {
  // Accedemos al contexto y lo almacenamos en una variable
  const contextInfo = useContext(DemoContext);

  return (
    <div>
      <h2>Nieto</h2>
      <p>{children}</p>
      <h3>Información del contexto</h3>
      <p>{contextInfo.info.text}</p>
    </div>
  );
};

export default Nieto;
