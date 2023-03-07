import React, { useReducer } from "react";

function reducer(state, { type, payload }) {
  switch (type) {
    case "login":
      return { user: { ...state.user, isAuthenticated: true } };
    case "logout":
      return { user: { ...state.user, isAuthenticated: false } };
    default:
      return state;
  }
}

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { user: {} });

  const login = (callback) => {
    dispatch({ type: "login" });
    callback();
  };

  const logout = (callback) => {
    dispatch({ type: "logout" });
    callback();
  };

  return (
    <UserContext.Provider value={{ state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
