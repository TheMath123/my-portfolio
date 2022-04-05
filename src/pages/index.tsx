import { Taskbar } from "../components/taskbar";
import { Icon } from "../components/icon";
import { Window } from "../components/window";
import { useWindow } from "../hooks/useControlWindow";
import styles from "./home.module.scss";
import { useEffect } from "react";

export default function Home() {
  const { openWindows, openTheWindow } = useWindow();

  const teste = alert(teste);

  useEffect(() => {
    console.log(openWindows)
  }, [openWindows])
  

  return (
    <div className={styles.workspace}>
      <main>
        <Icon
          name="Sobre o Matheus"
          alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorrisinho."
          img="/icons/character.svg"
          func={() => openTheWindow(0, true)}
        />
        <Icon
          name="Projetos"
          alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
          img="/icons/files.svg"
          func={teste}
        />
        <Icon
          name="Fale comigo"
          alt="Um balão de conversar amarelo com rostinho dentro, saindo de um ícone de telefone na cor vermelha."
          img="/icons/call.svg"
          func={teste}
        />

        { openWindows[0] && (
          <Window
            name="Titulo da janela"
            windowIndex={0}
          >
            <h1>Título do conteúdo</h1>
            <a href="https://google.com">Link</a>
            <p>em construção...</p>
          </Window>
        )}

      </main>

      <Taskbar />
    </div>
  );
}
