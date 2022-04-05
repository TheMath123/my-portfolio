import { useContext } from "react";

import { OpenWindowContext } from "../contexts/OpenWindowContext";

export const useWindow = () => {
  return useContext(OpenWindowContext);
};
