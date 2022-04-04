import { Taskbar } from "../components/taskbar";
import { Icon } from "../components/icon";
import { Window } from "../components/window";
import styles from "./home.module.scss";

export default function Home() {
  const teste = function () {
    alert(teste);
  };

  return (
    <div className={styles.workspace}>
      <main>
        <Icon
          name="Sobre o Matheus"
          alt="Personagem de cor de pele (um rosinha claro), de olhos preto, e com sorizinho."
          img="/icons/character.svg"
          func={teste}
        />
        <Icon
          name="Projetos"
          alt="Caderno marron, com um etiqueta branca na capa, e com marcadores de pagina coloridos."
          img="/icons/files.svg"
          func={teste}
        />
        <Icon
          name="Fale comigo"
          alt="Um balão de conversar amarelo com rostinho dentro, saindo de um icone de telefone na cor vermelha."
          img="/icons/call.svg"
          func={teste}
        />
        <Window name="Titulo da janela">Conteudo futuro...</Window>
      </main>
      <Taskbar />
      {/* <Image
        src={"/wallpaper.jpg"}
        alt="Deveria ter um papel de parede! =("
        width="100%"
        height="100%"
      /> */}
    </div>
  );
}
