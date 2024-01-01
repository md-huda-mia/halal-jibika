import React, { createContext, useEffect, useState } from "react";
import data from "../assets/data";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const ApiContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // ====== create user ========
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // 5. Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };
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
  const golobalValue = {
    createUser,
    user,
    logout,
  };

  return (
    <ApiContext.Provider value={golobalValue}>{children}</ApiContext.Provider>
  );
};

export default ContextProvider;
