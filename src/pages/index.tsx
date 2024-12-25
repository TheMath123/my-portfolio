import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useWindow, useWindowControl } from "../hooks";
import { AboutMeScreen, ProjectScreen, TalkToMeScreen } from "../screens";
import { Loading, Taskbar, Icon } from "../components";

import styles from "../styles/home.module.scss";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const { stateWindows, toggleStateWindow } = useWindowControl();
  const { containerRef } = useWindow();

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(
      window.navigator.userAgent,
    );

    if (isMobile) {
      setIsMobile(isMobile);
      const name = 'redirect-to-mobile';
      document.querySelectorAll('a').forEach(a => {
        if (a.host !== window.location.host && !a.getAttribute('data-umami-event')) {
          a.setAttribute('data-umami-event', name);
          a.setAttribute('data-umami-event-url', a.href);
        }
      });
      redirectTo("https://m.matheuspa.com");
    }
    return;
  }, []);

  const redirectTo = (url: string) => {
    window.location.href = url;
  };

  return (
    <>
      {isMobile ? (
        <div className={styles.workspace}>
          <Loading />
        </div>
      ) : (
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
      )}
    </>
  );
}
