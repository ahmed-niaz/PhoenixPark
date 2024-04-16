import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider
} from "firebase/auth";
import auth from "../services/firebase.config";



export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();
const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth, email, password);
  }
  const googleLogin = ()=>{
    return signInWithPopup(auth, googleProvider)
  }
  const gitHubLogin = () =>{
    return signInWithPopup(auth, gitHubProvider)
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);
  const information = { user, setUser, registerUser,loginUser,googleLogin,gitHubLogin };
  return (
    <AuthContext.Provider value={information}>{children}</AuthContext.Provider>
  );
};
FirebaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default FirebaseProvider;
