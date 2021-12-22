import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
export const ProvidedAuth = createContext();
const AuthProvider = ({children}) => {
  const allAuth = useFirebase();
  return <ProvidedAuth.Provider value={allAuth}>
      {children}
  </ProvidedAuth.Provider>;
};

export default AuthProvider;
