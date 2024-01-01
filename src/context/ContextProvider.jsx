import React, { createContext, useEffect, useState } from "react";
import data from "../assets/data";
import { auth } from "../firebase/firebase.config";

export const ApiContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  // ====== create user ========
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);

  const golobalValue = {
    jobs,
    createUser,
  };

  return (
    <ApiContext.Provider value={golobalValue}>{children}</ApiContext.Provider>
  );
};

export default ContextProvider;
