import { createContext, useEffect, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  // 0 - About-me | 1 - Projects | 2 - Talk-me
  const [openWindows, setOpenWindows] = useState<boolean[]>([
    false,
    false,
    false
  ]);
  const [windowZIndex, updateWindowZIndex] = useState<number[]>([
    100, 100, 100
  ]);
  const [orderTask, setOrderTask] = useState<number[]>([]);

  function openTheWindow(indexWindow: number, open: boolean) {
    // Ao abrir janelas ou clicar novamente nelas
    if (openWindows[indexWindow]) {
      // Verifica se index aberto foi chamado, caso chamado coloca em 1º plano
      updateWindowZIndex(
        windowZIndex.map((value, index) => (index === indexWindow ? 110 : 100))
      );
    }

    // Orden de janelas
    if (open) {
      addToOrder(indexWindow);
    } else {
      removeOfOrder(indexWindow);
    }

    // Alterna entre fechar e abrir a janela
    setOpenWindows(
      openWindows.map((value, index) => (index === indexWindow ? open : value))
    );
  }

  // Adiciona uma janela a uma lista de ordem
  function addToOrder(windowsIndex: number) {
    if (!orderTask.includes(windowsIndex)) {
      let newArray = [...orderTask, windowsIndex];
      setOrderTask(newArray);
    }
  }

  // Remove uma janela a uma lista de ordem
  function removeOfOrder(windowsIndex: number) {
    let newArray = orderTask.map((element) => {
      if (element !== windowsIndex) {
        return element;
      }
    });
    setOrderTask(newArray);
  }

  return (
    <OpenWindowContext.Provider
      value={{
        openWindows,
        openTheWindow,
        windowZIndex,
        orderTask
      }}
    >
      {children}
    </OpenWindowContext.Provider>
  );
}
