import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../services/firebase.config";
export const AuthContext = createContext(null);
const FirebaseProvider = ({ children }) => {
  const registerUser = (email, password) => {
   return createUserWithEmailAndPassword(auth, email, password);
  };
  const information = { registerUser };
  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};
FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FirebaseProvider;
