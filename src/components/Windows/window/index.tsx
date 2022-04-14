import { useState } from "react";
import Image from "next/image";
import { IWindowProps } from "../../../@types";
import { useWindow } from "../../../hooks/useControlWindow";
import styles from "./window.module.scss";

export function Window({ name, windowIndex, children }: IWindowProps) {
  const { openTheWindow } = useWindow();

  const [max, setMax] = useState(false);

  return (
    <div
      data-message={name}
      title={name}
      className={`${styles.container} ${max && styles.max}`}
    >
      <header>
        <span className={styles.title}>{name}</span>
        <div className={styles.btnsWindow}>
          <button className={styles.minimize} onClick={() => {}}>
            <Image
              src="/icons/window/minimize.svg"
              alt="Minimizar janela"
              width={20}
              height={20}
            />
          </button>

          <button
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
            className={styles.close}
            onClick={() => openTheWindow(windowIndex, false)}
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
