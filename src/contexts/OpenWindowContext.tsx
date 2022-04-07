import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  const [openWindows, setOpenWindows] = useState<boolean[]>([false, false, false]);

  function openTheWindow(indexWindow: number, open: boolean) {
    setOpenWindows(
      openWindows.map(
        (value, index) => index === indexWindow ? open : value
      )
    );
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
