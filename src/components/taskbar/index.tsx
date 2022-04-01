import Image from "next/image";
import { Clock } from "../clock";
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
            src="/startmessage.ico"
            alt="Aplicação do StartMessage"
            width={30}
            height={30}
          />
        </button>
      </div>
      <div className={styles.info}>
        <select name="Language" id="">
          <option value="pt-br" selected>
            PT-BR
          </option>
          <option value="en-us">EN-US</option>
        </select>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
    </div>
  );
}
