import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showModal: [modal, setModal],
        showLogin: [login, setLogin],
        showRegister: [register, setRegister],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
