import { useReducer } from "react";
// Destructuring
// const username = state.username;
// const age = status.age;
// const address = status.address;
// const status = state.status;

// const {username, age, address, status} = state;

// Spread operator ...
// const user = {
//   prop1: 'value1',
//   prop2: 'value2',
//   prop3: 'value3'
// }

// const newUser = {
//   ...user,
//   prop3: 'newValue',
//   prop4: 'value4'
// }

function reducer(state, action) {
  const { username } = state;
  const { type } = action;

  if (type === "UPPER") {
    return {
      username: username.toUpperCase(),
      isError: username.length > 3 ? true : false,
      errorText: "El número de caracteres no puede ser superior a 3",
    };
  }

  if (type === "LOWER") {
    return {
      username: username.toLowerCase(),
      isError: username.length > 3 ? true : false,
      errorText: "El número de caracteres no puede ser superior a 3",
    };
  }
}

const DemoReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    username: "Demo",
    isError: false,
    errorText: null,
  });

  return (
    <div>
      <p>The username is:</p>
      <p>{state.username}</p>
      <p>{state.isError ? state.errorText : null}</p>
      <br />
      <button onClick={() => dispatch("PRUEBA")}>¡A mayúsculas!</button>
      <button onClick={() => dispatch({ type: "LOWER" })}>
        ¡A minúsculas!
      </button>
    </div>
  );
};

export default DemoReducer;
