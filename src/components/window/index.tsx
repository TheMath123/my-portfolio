import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useWindow, useWindowControl } from "../../hooks";

import { IWindowProps } from "../../@types";
import styles from "./window.module.scss";

export function Window({ name, windowIndex, children }: IWindowProps) {
  const { containerRef } = useWindow();
  const { toggleStateWindow, windowZIndex, minimizeWindow } =
    useWindowControl();
  const [max, setMax] = useState(false);

  // Move window
  const windowRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);

  console.log(containerRef.current.getBoundingClientRect());

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
    lastY: startValueY
  });

  useEffect(() => {
    if (!windowRef.current || !containerRef.current) return;

    const box = windowRef.current;
    const container = containerRef.current;
    const header = headerRef.current;
    const buttons = buttonsRef.current;

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      if (
        !header.contains(e.target as Node) ||
        buttons.contains(e.target as Node)
      )
        return;

      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };

    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();

      isClicked.current = false;
      coords.current.lastX = box.offsetLeft;
      coords.current.lastY = box.offsetTop;
    };

    const onMouseMove = (e: MouseEvent) => {
      e.preventDefault();

      if (!isClicked.current) return;

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
  }, []);

  return (
    <div
      ref={windowRef}
      data-message={name}
      title={name}
      className={`${styles.container} ${max && styles.max}`}
      style={{ zIndex: windowZIndex[windowIndex] }}
    >
      <header ref={headerRef}>
        <span className={styles.title}>{name}</span>
        <div ref={buttonsRef} className={styles.btnsWindow}>
          <button
            disabled={isClicked.current}
            className={styles.minimize}
            onClick={() => minimizeWindow(windowIndex)}
          >
            <Image
              src="/icons/window/minimize.svg"
              alt="Minimizar janela"
              width={20}
              height={20}
            />
          </button>

          <button
            disabled={isClicked.current}
            className={styles.maximize}
            onClick={() => (max ? setMax(false) : setMax(true))}
          >
            {max ? (
              <Image
                src="/icons/window/demaximize.svg"
                alt="Diminuir janela"
                width={20}
                height={20}
              />
            ) : (
              <Image
                src="/icons/window/maximize.svg"
                alt="Maximizar janela"
                width={20}
                height={20}
              />
            )}
          </button>

          <button
            disabled={isClicked.current}
            className={styles.close}
            onClick={() => toggleStateWindow(windowIndex, false)}
          >
            <Image
              src="/icons/window/close.svg"
              alt="Fechar janela"
              width={20}
              height={20}
            />
          </button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
