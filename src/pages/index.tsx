import Image from 'next/image';
import { Taskbar } from "../components/taskbar";
import { Icon } from "../components/icon";
import { Window } from "../components/window";
import { useWindow } from "../hooks/useControlWindow";
import { ProjectScreen } from "../windows/ProjectScreen";
import styles from "./home.module.scss";
import { useEffect } from 'react';


export default function Home() {
  const { openWindows, openTheWindow } = useWindow();
  
  return (
    <div className={styles.workspace}>
      <main>
        <Icon
          name="Sobre o Matheus"
          alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorrisinho."
          img="https://i.imgur.com/ApMhe5P.png"
          commandToOpenWindow={() => openTheWindow(0, true)}
        />
        <Icon
          name="Projetos"
          alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
          img="/icons/files.svg"
          commandToOpenWindow={() => openTheWindow(1, true)}
        />
        <Icon
          name="Fale comigo"
          alt="Um balão de conversar amarelo com rostinho dentro, saindo de um ícone de telefone na cor vermelha."
          img="/icons/call.svg"
          commandToOpenWindow={() => openTheWindow(2, true)}
        />

        {openWindows[0] && (
          <Window name="Titulo da janela" windowIndex={0}>
            <h1>Janela 3</h1>
          </Window>
        )}

        {openWindows[1] && <ProjectScreen />}

        {openWindows[2] && (
          <Window name="Titulo da janela" windowIndex={2}>
            <h1>Janela 3</h1>
          </Window>
        )}
      </main>

      <Taskbar />
      
      <div className={styles.background} />
    </div>
  );
}
