import { createContext, useRef } from "react";
import { IChildrenProps, IWindowContextProps } from "../@types";

export const WindowContext = createContext({} as IWindowContextProps);

export function WindowContextProvider({ children }: IChildrenProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <WindowContext.Provider value={{ containerRef }}>
      {children}
    </WindowContext.Provider>
  );
}
