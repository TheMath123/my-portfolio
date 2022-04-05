import { useContext } from "react";

import { OpenWindowContext } from "../contexts/OpenWindowContext";

export const UseWindow = () => {
  return useContext(OpenWindowContext);
};
