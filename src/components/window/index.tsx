import { ReactNode } from "react";
import Image from "next/image";
import styles from "./window.module.scss";

type windowProps = {
  name: string;
  children?: ReactNode;
};

export function Window({ name, children }: windowProps) {
  return (
    <div data-message={name} title={name} className={styles.container}>
      <header>
        <div className={styles.title}>{name}</div>
        <div className={styles.btnsWindow}>
          <button className={styles.minimize}>
            <Image
              src="/window/minimize.svg"
              alt="Minimizar"
              width={20}
              height={20}
            />
          </button>

          <button className={styles.maximize}>
            <Image
              src="/window/maximize.svg"
              alt="Maximizar"
              width={20}
              height={20}
            />
          </button>

          <button className={styles.close}>
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
