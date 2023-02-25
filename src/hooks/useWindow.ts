import { useContext } from "react";

import { WindowContext } from "../contexts/WindowContext";

export function useWindow() {
  return useContext(WindowContext);
}
