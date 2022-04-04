import { useState } from "react";
import Image from "next/image";
import styles from "./window.module.scss";

type windowProps = {
  name: string;
  children?: ReactNode;
};

export function Window({ name, children }: windowProps) {
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

          <button className={styles.close} onClick={() => setOpen(false)}>
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
