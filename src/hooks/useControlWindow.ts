import { useContext } from "react";

import { ToggleWindowContext } from "../contexts/ToggleWindowContext";

export function useWindowControl() {
  return useContext(ToggleWindowContext);
}
