import { useContext } from "react";

import { OpenWindowContext } from "../contexts/OpenWindowContext";

export function useWindowControl() {
  return useContext(OpenWindowContext);
}
