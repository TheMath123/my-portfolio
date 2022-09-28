import { Toaster } from "react-hot-toast";
import { useWindow } from "../hooks/useControlWindow";
import { Taskbar } from "../components/taskbar";
import { Icon } from "../components/icon";

import ProjectScreen from "./Projects/ProjectScreen";
import AboutMeScreen from "./AboutMe/AboutMeScreen";
import TalkToMeScreen from "./TalkToMe/TalkToMeScreen";

import styles from "./home.module.scss";

export default function Home() {
  const { openWindows, openTheWindow } = useWindow();

  return (
    <div className={styles.workspace}>
      <Toaster />
      <main className={styles.desktop}>
        <Icon
          name="Sobre o Matheus"
          alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorrisinho."
          img="https://firebasestorage.googleapis.com/v0/b/matheuspa-projects.appspot.com/o/my-portfolio%2Ficons%2Fabout-me.png?alt=media&token=ff3060f1-39d3-4350-8ea9-5b90d3134f1d"
          commandToOpenWindow={() => openTheWindow(0, true)}
        />
        <Icon
          name="Projetos"
          alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
          img="/icons/desktop/files.svg"
          commandToOpenWindow={() => openTheWindow(1, true)}
        />
        <Icon
          name="Fale comigo"
          alt="Um balão de conversar amarelo com rostinho dentro, saindo de um ícone de telefone na cor vermelha."
          img="/icons/desktop/call.svg"
          commandToOpenWindow={() => openTheWindow(2, true)}
        />

        {/* <div className={styles.alert}>Em construção 🚧</div> */}

        {openWindows[0] && <AboutMeScreen />}

        {openWindows[1] && <ProjectScreen />}

        {openWindows[2] && <TalkToMeScreen />}
      </main>

      <Taskbar />

      <div className={styles.background} />
    </div>
  );
}
