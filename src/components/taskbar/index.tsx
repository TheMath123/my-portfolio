import Image from "next/image";
import { Clock } from "../clock";
import styles from "./taskbar.module.scss";

export function Taskbar() {
  return (
    <div className={styles.taskbar}>
      <div className={styles.icons}>
        <button title="Doors">
          <Image
            src="/door.svg"
            alt="Icone de uma porta na cor branca."
            width={27}
            height={27}
          />
        </button>
        <button
          onClick={() => window.open("https://hitext.vercel.app/")}
          title="Aplicação do HiText"
        >
          <Image
            src="/hitext.svg"
            alt="Logo da Aplicação do HiText, um circulo branco com letra H e T dentro na cor preta."
            width={27}
            height={27}
          />
        </button>
        <button
          onClick={() => window.open("https://startmessage.vercel.app/")}
          title="Aplicação do StartMessage"
        >
          <Image
            src="/startmessage.ico"
            alt="Logo da Aplicação do StartMessage, um bolãozinho de conversa verde com telefone na cor branco dentro."
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
