import { createContext, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  const [openWindows, setOpenWindows] = useState([false, false, false]);

  function openTheWindow(index, open) {
    let arrayWindows = openWindows;
    arrayWindows[index] = open;
    setOpenWindows(arrayWindows);
  }

  return (
    <OpenWindowContext.Provider
      value={{
        openWindows,
        openTheWindow
      }}
    >
      {children}
    </OpenWindowContext.Provider>
  );
}
