import { useContext } from "react";

import { OpenWindowContext } from "../contexts/OpenWindowContext";

export function useWindow(){
  return useContext(OpenWindowContext);
};
