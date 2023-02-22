import React, { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showModal: [modal, setModal],
        showLogin: [login, setLogin],
        showRegister: [register, setRegister],
        loggedInFlag: [loggedIn, setLoggedIn],
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
