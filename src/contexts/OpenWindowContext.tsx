import { createContext, useState } from "react";
import { IChildrenProps, IOpenWindowContextProps } from "../@types";

export const OpenWindowContext = createContext({} as IOpenWindowContextProps);

export function OpenWindowProvider({ children }: IChildrenProps) {
  // 0 - About-me | 1 - Projects | 2 - Talk-me
  const [stateWindows, setOpenWindows] = useState<boolean[]>([false, false, false]);

  const [windowZIndex, updateWindowZIndex] = useState<number[]>([100, 100, 100]);

  const [orderTask, setOrderTask] = useState<number[]>([]);

  function toggleStateWindow(windowsIndex: number, open: boolean) {
    // Ao abrir janelas ou clicar novamente nelas
    if (stateWindows[windowsIndex]) {
      // Verifica se index aberto foi chamado, caso chamado coloca em 1º plano
      updateWindowZIndex(windowZIndex.map((_, index) => (index === windowsIndex ? 999 : 100)));
    }

    // Orden de janelas
    if (open) {
      addToOrder(windowsIndex);
    } else {
      removeOfOrder(windowsIndex);
    }

    // Alterna entre fechar e abrir a janela
    setOpenWindows(stateWindows.map((value, index) => (index === windowsIndex ? open : value)));
  }

  function focusWindow(windowsIndex: number) {
    updateWindowZIndex(windowZIndex.map((_, index) => (index === windowsIndex ? 999 : 100)));
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
    updateWindowZIndex(windowZIndex.map((value, index) => (index === windowsIndex ? 100 : 100)));

    let newArray = orderTask.filter((element) => {
      if (element !== windowsIndex) {
        return element;
      }
    });

    setOrderTask(newArray); // usa a função setState com o valor anterior
  }

  function minimizeWindow(windowsIndex: number) {
    setOpenWindows(stateWindows.map((value, index) => (index === windowsIndex ? false : value)));
  }

  return (
    <OpenWindowContext.Provider
      value={{
        stateWindows,
        toggleStateWindow,
        minimizeWindow,
        focusWindow,
        windowZIndex,
        orderTask,
      }}
    >
      {children}
    </OpenWindowContext.Provider>
  );
}
