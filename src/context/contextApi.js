import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebaseConfig";

const UserAuthContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
  const signin = (email, password) => {
    
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut=()=>{
    return signOut(auth);
  }
  
const siginwithgoogle=()=>{
  const googleAtutProvider= new GoogleAuthProvider();
  return signInWithPopup(auth,googleAtutProvider);
}
  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (curr) => {
      setUser(curr);
    });
    return () => {
      unSubcribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ user, signin, login,logOut,siginwithgoogle }}>
      {children}
    </UserAuthContext.Provider>
  );
};
export function UserUseAuth() {
  return useContext(UserAuthContext);
}
