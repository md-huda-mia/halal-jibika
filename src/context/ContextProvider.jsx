import React, { createContext, useEffect, useState } from "react";
import data from "../assets/data";

export const ApiContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  // console.log(jobs);

  const golobalValue = {
    jobs,
  };

  return (
    <ApiContext.Provider value={golobalValue}>{children}</ApiContext.Provider>
  );
};

export default ContextProvider;
