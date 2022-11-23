import Image from "next/image";
import { useWindow } from "../../hooks/useControlWindow";
import { Anchor } from "../Anchor";
import { Clock } from "../clock";
import styles from "./taskbar.module.scss";

export function Taskbar() {
  const { openWindows, openTheWindow } = useWindow();
  return (
    <div className={styles.taskbar}>
      <div className={styles.icons}>
        <button title="Doors">
          <Image
            src="/icons/taskbar/door.svg"
            alt="Icone de uma porta na cor branca."
            width={27}
            height={27}
          />
        </button>
        <Anchor url="https://hitext.vercel.app/" title="Aplicação do HiText">
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
            src="/icons/projects/whatsapp.png"
            alt="Logo da Aplicação do StartMessage, um bolãozinho de conversa verde com telefone na cor branco dentro."
            width={30}
            height={30}
          />
        </Anchor>

        {openWindows[0] && (
          <Anchor
            title="Sobre o Matheus"
            onClick={() => openTheWindow(0, true)}
          >
            <Image
              src="/icons/desktop/about-me.png"
              alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorrisinho."
              width={27}
              height={27}
            />
          </Anchor>
        )}
        {openWindows[1] && (
          <Anchor title="Projetos" onClick={() => openTheWindow(1, true)}>
            <Image
              src="/icons/desktop/files.svg"
              alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
              width={27}
              height={27}
            />
          </Anchor>
        )}
        {openWindows[2] && (
          <Anchor title="Fale Comigo" onClick={() => openTheWindow(2, true)}>
            <Image
              src="/icons/desktop/call.svg"
              alt="Um balão de conversar amarelo com rostinho dentro, saindo de um ícone de telefone na cor vermelha."
              width={27}
              height={27}
            />
          </Anchor>
        )}
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
