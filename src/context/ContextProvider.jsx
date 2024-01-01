import React, { createContext, useEffect, useState } from "react";
import data from "../assets/data";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const ApiContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //1. ====== create user ========
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //2. ======Login with Password ======
  const signin = (email, password) => {
    // setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // ====== Logout ========
  const logout = () => {
    // setLoading(true);
    return signOut(auth);
  };
  // ========= On auth state change =======
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        setUser(user);
      } catch (error) {
        console.error("Error setting user:", error);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [user]);
  // ======== function object ========
  const golobalValue = {
    createUser,
    signin,
    user,
    logout,
  };

  return (
    <ApiContext.Provider value={golobalValue}>{children}</ApiContext.Provider>
  );
};

export default ContextProvider;
