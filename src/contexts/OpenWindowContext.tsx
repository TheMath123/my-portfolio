import { createContext, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  const [window, setOpenWindow] = useState([]);

  function openWindow(index) {}

  return (
    <OpenWindowProvider.Provider
      value={{
        window
      }}
    >
      {children}
    </OpenWindowProvider.Provider>
  );
}
