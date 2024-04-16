import { useContext } from "react";
import { AuthContext } from "../providers/FirebaseProvider";

const useAuth = () => {
  const information = useContext(AuthContext);
  return information;
};

export default useAuth;
