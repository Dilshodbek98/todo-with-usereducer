import React, { useContext } from "react";
import { ComponentA } from "./ComponentA";
import { MyContext } from "./context";

function App() {
  const [state, setState] = useContext(MyContext);
  return (
    <div className="app">
      <ComponentA />
    </div>
  );
}

export default App;
