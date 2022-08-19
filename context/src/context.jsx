import React, { createContext, useState } from "react";

export const MyContext = React.createContext()
export const Context = ({children}) => {
  const [state, setState] = useState('Dilshodbek')
  return (
    <MyContext.Provider value={[state, setState]}>
      {children}
    </MyContext.Provider>
  );
}
