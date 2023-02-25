import { Toaster } from "react-hot-toast";
import { Taskbar } from "../components/taskbar";
import { Icon } from "../components/icon";

import ProjectScreen from "./Projects/ProjectScreen";
import AboutMeScreen from "./AboutMe/AboutMeScreen";
import TalkToMeScreen from "./TalkToMe/TalkToMeScreen";

import styles from "./home.module.scss";
import { useWindow, useWindowControl } from "../hooks";

export default function Home() {
  const { stateWindows, toggleStateWindow } = useWindowControl();
  const { containerRef } = useWindow();

  return (
    <div className={styles.workspace}>
      <Toaster />
      <main className={styles.desktop} ref={containerRef}>
        <Icon
          name="Sobre o Matheus"
          alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorrisinho."
          img="/icons/desktop/about-me.png"
          commandToOpenWindow={() => toggleStateWindow(0, true)}
        />
        <Icon
          name="Projetos"
          alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
          img="/icons/desktop/files.svg"
          commandToOpenWindow={() => toggleStateWindow(1, true)}
        />
        <Icon
          name="Fale comigo"
          alt="Um balão de conversar amarelo com rostinho dentro, saindo de um ícone de telefone na cor vermelha."
          img="/icons/desktop/call.svg"
          commandToOpenWindow={() => toggleStateWindow(2, true)}
        />

        {/* <div className={styles.alert}>Em construção 🚧</div> */}

        {stateWindows[0] && <AboutMeScreen />}

        {stateWindows[1] && <ProjectScreen />}

        {stateWindows[2] && <TalkToMeScreen />}
      </main>

      <Taskbar />

      <div className={styles.background} />
    </div>
  );
}
