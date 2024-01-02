import React, { createContext, useEffect, useState } from "react";
import data from "../assets/data";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const ApiContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  //1. ====== create user ========
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // 2. ====== Update Name =======
  const updateName = (name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, { displayName: name });
  };
  // 3. ========Email Verify =====
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  };
  //4.======Login with Password ======
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ====== Logout ========
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  //7. Forget Password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
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
    resetPassword,
    verifyEmail,
    logout,
    updateName,
    loading,
  };

  return (
    <ApiContext.Provider value={golobalValue}>{children}</ApiContext.Provider>
  );
};

export default ContextProvider;
