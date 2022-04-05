import { useState } from "react";
import Image from "next/image";
import { UseWindow } from "../../hooks/useWindow";
import { IWindowProps } from "../../@types";
import styles from "./window.module.scss";

export function Window({ name, children }: IWindowProps) {
  const { window, closeWindow } = UseWindow();
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
          <button className={styles.minimize} onClick={() => setMax(false)}>
            <Image
              src="/window/minimize.svg"
              alt="Minimizar"
              width={20}
              height={20}
            />
          </button>

          <button className={styles.maximize} onClick={() => setMax(true)}>
            <Image
              src="/window/maximize.svg"
              alt="Maximizar"
              width={20}
              height={20}
            />
          </button>

          <button className={styles.close} onClick={() => console.log("open")}>
            <Image
              src="/window/close.svg"
              alt="Fechar"
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
function useWindow(): {} {
  throw new Error("Function not implemented.");
}
