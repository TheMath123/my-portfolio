import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useWindow, useWindowControl } from "../../hooks";

import { IWindowProps } from "../../@types";
import { cn } from "@/utils/class-merge";
import { ArrowsInSimpleIcon, CornersInIcon, CornersOutIcon, FrameCornersIcon, XIcon } from "@phosphor-icons/react";

export function Window({ name, windowIndex, children, className }: IWindowProps) {
  const { containerRef } = useWindow();
  const { toggleStateWindow, windowZIndex, minimizeWindow, focusWindow } = useWindowControl();
  const [max, setMax] = useState(false);

  // Move window
  const windowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  const startValueX = containerRef.current.getBoundingClientRect().width / 10;
  const startValueY = containerRef.current.getBoundingClientRect().height / 10;

  const coords = useRef<{
    startX: number;
    startY: number;
    lastX: number;
    lastY: number;
  }>({
    startX: startValueX,
    startY: startValueY,
    lastX: startValueX,
    lastY: startValueY,
  });

  useEffect(() => {
    if (!windowRef.current || !containerRef?.current) return;

    const box = windowRef.current;
    const container = containerRef.current;
    const header = headerRef.current;
    const buttons = buttonsRef.current;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      if (max) return;
      if (!header?.contains(e.target as Node) || buttons?.contains(e.target as Node)) return;

      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      if (max) return;
      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();

      if (!isClicked.current || max) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    };

    box.addEventListener("mousedown", onMouseDown);
    box.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseUp);

    const cleanup = () => {
      box.removeEventListener("mousedown", onMouseDown);
      box.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseUp);
    };

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max]);

  const handlerClickWindow = () => {
    focusWindow(windowIndex);
  };

  const handleMaximize = () => {
    if (!max && windowRef.current) {
      // Salvar posição atual antes de maximizar
      coords.current.lastX = windowRef.current.offsetLeft;
      coords.current.lastY = windowRef.current.offsetTop;
      // Resetar estilos inline
      windowRef.current.style.top = '';
      windowRef.current.style.left = '';
    } else if (windowRef.current) {
      // Restaurar posição ao desmaximizar
      windowRef.current.style.top = `${coords.current.lastY}px`;
      windowRef.current.style.left = `${coords.current.lastX}px`;
    }
    setMax(!max);
  };

  return (
    <div
      ref={windowRef}
      data-message={name}
      title={name}
      className={cn('grid grid-rows-[32px_1fr] absolute z-100 w-4/5 h-3/5 bg-neutral-800/80 backdrop-blur-2xl rounded-2xl shadow-md',
        max
          ? 'top-0 left-0 w-screen h-[calc(100vh-50px)] rounded-none'
          : 'top-[10%] left-[10%]'
      )}
      style={{
        zIndex: windowZIndex[windowIndex],
      }}
      onClick={() => handlerClickWindow()}
    >
      <header
        ref={headerRef}
        className={cn('flex items-center justify-center relative bg-neutral-900',
          max ? 'rounded-none' : 'rounded-t-2xl'
        )}
      >
        <span className="text-white font-medium text-center">{name}</span>
        <div ref={buttonsRef} className="flex flex-row gap-2 absolute right-2">
          <button
            disabled={isClicked.current}
            onClick={() => minimizeWindow(windowIndex)}
            className="hover:bg-neutral-100/10 cursor-pointer rounded-md transition-all duration-200 p-[5px] text-[0] bg-none border-none"
          >
            <ArrowsInSimpleIcon className="w-5 h-5" />
          </button>

          <button
            disabled={isClicked.current}
            onClick={handleMaximize}
            className="hover:bg-neutral-100/10 cursor-pointer rounded-md transition-all duration-200 p-[5px] text-[0] bg-none border-none"
          >
            {max ? (
              <CornersInIcon className="w-5 h-5" />
            ) : (
              <CornersOutIcon className="w-5 h-5" />
            )}
          </button>

          <button
            disabled={isClicked.current}
            onClick={() => toggleStateWindow(windowIndex, false)}
            className="hover:bg-red-500/20 cursor-pointer rounded-md transition-all duration-200 p-[5px] text-[0] bg-none border-none"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>
      </header>
      <main className={cn('overflow-auto', className)}>{children}</main>
    </div>
  );
}
