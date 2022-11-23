import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  // 0 - About-me | 1 - Projects | 2 - Talk-me
  const [openWindows, setOpenWindows] = useState<boolean[]>([false, false, false]);
  const [windowZIndex, updateWindowZIndex] = useState<number[]>([
    100, 100, 100
  ]);

  function openTheWindow(indexWindow: number, open: boolean) {
    if (openWindows[indexWindow]) {
      // Verifica se index aberto foi chamado, caso chamado coloca em 1º plano
      updateWindowZIndex(
        windowZIndex.map((value, index) => (index === indexWindow ? 110 : 100))
      );
    }
    // Alterna entre fechar e abrir a janela
    setOpenWindows(
      openWindows.map((value, index) =>
        index === indexWindow ? open : value
      )
    );
  }

  return (
    <OpenWindowContext.Provider
      value={{
        openWindows,
        openTheWindow,
        windowZIndex
      }}
    >
      {children}
    </OpenWindowContext.Provider>
  );
}
