import Image from "next/image";
import styles from "./taskbar.module.scss";

export function Taskbar() {
  return (
    <div className={styles.taskbar}>
      <div className={styles.icons}>
        <button>
          <Image src="/door.svg" alt="Door" width={27} height={27} />
        </button>
        <button onClick={() => window.open("https://hitext.vercel.app/")}>
          <Image
            src="/hitext.svg"
            alt="Aplicação do HiText"
            width={27}
            height={27}
          />
        </button>
        <button onClick={() => window.open("https://startmessage.vercel.app/")}>
          <Image
            src="/startmessage.png"
            alt="Aplicação do StartMessage"
            width={27}
            height={27}
          />
        </button>
      </div>
      <div className={styles.info}>
        <span>21:51</span>
        <span>03/03/2022</span>
      </div>
    </div>
  );
}
