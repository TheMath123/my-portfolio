import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useWindow, useWindowControl } from "../hooks";
import { AboutMeScreen, ProjectScreen, TalkToMeScreen } from "../screens";
import { Loading, Taskbar, Icon } from "../components";
import { umami } from "../lib/umami";

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
      umami.track((props: any) => ({
        ...props,
        name,
        data: {
          url: "https://m.matheuspa.com"
        },
      }));
      redirectTo("https://m.matheuspa.com");
    }
    const customID = Math.floor(Math.random() * 100000);
    umami.identify({
      email: `teste-tracker-${customID}@example.com`,
      user: `Test User ${customID}`,
      id: customID,
    });
    return;
  }, []);

  const redirectTo = (url: string) => {
    window.location.href = url;
  };


  return (
    <>
      {isMobile ? (
        <div className="grid grid-rows-[1fr_50px] relative h-screen w-screen">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-rows-[1fr_50px] relative h-screen w-screen">
          <Toaster />
          <main className="p-4" ref={containerRef}>
            <Icon
              name="Sobre o Matheus"
              alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorrisinho."
              img="/icons/desktop/about-me.png"
              umamiEvent="Open AboutMe"
              commandToOpenWindow={() => toggleStateWindow(0, true)}
            />
            <Icon
              name="Projetos"
              alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
              umamiEvent="Open Projects"
              img="/icons/desktop/files.svg"
              commandToOpenWindow={() => toggleStateWindow(1, true)}
            />
            <Icon
              name="Fale comigo"
              alt="Um balão de conversar amarelo com rostinho dentro, saindo de um ícone de telefone na cor vermelha."
              umamiEvent="Open TalkToMe"
              img="/icons/desktop/call.svg"
              commandToOpenWindow={() => toggleStateWindow(2, true)}
            />

            {/* <div className="absolute top-[5%] right-[5%] z-[9999] py-2 px-2 rounded-2xl bg-[rgba(196,196,196,0.16)]">Em construção 🚧</div> */}

            {stateWindows[0] && <AboutMeScreen />}

            {stateWindows[1] && <ProjectScreen />}

            {stateWindows[2] && <TalkToMeScreen />}
          </main>

          <Taskbar />

          <div className="flex absolute z-[-9999] w-full h-[calc(100vh-50px)] bg-cover bg-[0_60%] bg-[url('/images/daniel-leone-197357-unsplash.jpg')]" />
        </div>
      )}
    </>
  );
}
