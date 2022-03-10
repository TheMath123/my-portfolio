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
        <Icon name="Sobre o Matheus" img="/icons/character.png" func={teste} />
        <Icon name="Projetos" img="/icons/files.png" func={teste} />
        <Icon name="Fale comigo" img="/icons/call.png" func={teste} />
      </main>
      <Taskbar />
    </div>
  );
}
