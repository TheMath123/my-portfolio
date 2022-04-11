import Image from "next/image";
import { Anchor } from "../../Utility/Anchor";
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
        <Anchor
          url="https://hitext.vercel.app/"
          title="Aplicação do HiText"
        >
          <Image
            src="/icons/taskbar/hitext.svg"
            alt="Logo da Aplicação do HiText, um circulo branco com letra H e T dentro na cor preta."
            width={27}
            height={27}
          />
        </Anchor>
        <Anchor
          url="https://startmessage.vercel.app/"
          title="Aplicação do StartMessage"
        >
          <Image
            src="https://i.imgur.com/0dxg2EZ.png"
            alt="Logo da Aplicação do StartMessage, um bolãozinho de conversa verde com telefone na cor branco dentro."
            width={30}
            height={30}
          />
        </Anchor>
      </div>
      <div className={styles.info}>
        <select name="Language" id="1">
          <option defaultValue="pt-br">PT-BR</option>
          <option value="en-us">EN-US</option>
        </select>
        <div className={styles.clock}>
          <Clock />
        </div>
      </div>
    </div>
  );
}
