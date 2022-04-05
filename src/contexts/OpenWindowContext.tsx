import { createContext, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  const [window, setOpenWindow] = useState([]);

  function openWindow(index) {
    setOpenWindow[index](true);
  }

  function closeWindow(index) {
    setOpenWindow[index](false);
  }

  return (
    <OpenWindowContext.Provider
      value={{
        window,
        openWindow,
        closeWindow
      }}
    >
      {children}
    </OpenWindowContext.Provider>
  );
}
