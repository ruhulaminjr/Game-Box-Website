import { useContext } from "react";
import { ProvidedAuth } from "../Context/AuthProvider";

const useAuth = () => {
  return useContext(ProvidedAuth);
};

export default useAuth;