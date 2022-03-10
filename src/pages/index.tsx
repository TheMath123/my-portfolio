import Image from "next/image";
import { Taskbar } from "../components/taskbar";
import { Icon } from "../components/icon";
import styles from "./home.module.scss";

export default function Home() {
  const teste = function () {
    alert(teste);
  };

  return (
    <div className={styles.workspace}>
      <main>
        <Icon name="Sobre o Matheus" img="/icons/character.svg" func={teste} />
        <Icon name="Projetos" img="/icons/files.svg" func={teste} />
        <Icon name="Fale comigo" img="/icons/call.svg" func={teste} />
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
