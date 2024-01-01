import React, { useContext } from "react";
import { ApiContext } from "../context/ContextProvider";

const CustomHooks = () => {
  const all = useContext(ApiContext);
  return all;
};

export default CustomHooks;
