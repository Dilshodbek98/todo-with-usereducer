import React, { useReducer } from "react";
const data = [
  {id: 1,name: "dim",},
  {id: 2,name: "johon",},
  {id: 3,name: "xusan",},
  {id: 4,name: "Tima",},];
const Usereducer = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "delete":
        return state.filter((val) => val.id !== action.payload);
    }
  };

  const [todos, dispatch] = useReducer(reducer, data);
  return (
    <div>
      <hr />
      <h1>useReducer</h1>
      {todos.map((vl) => (
        <p>
          {vl.id}-{vl.name}
          <button onClick={() => dispatch({ type: "delete", payload: vl.id })}>
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Usereducer;
