import Hijo from "./Hijo";
import Hijo2 from "./Hijo2";
import Nieto from "./Nieto";

const Padre = () => {
  return (
    <div>
      <h2>Father</h2>
      <Hijo>
        <Nieto />
        <Nieto />
      </Hijo>
      <Hijo2>
        <p>Hijo 2</p>
      </Hijo2>
    </div>
  );
};

export default Padre;
