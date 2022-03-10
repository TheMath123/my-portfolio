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
        <Icon name="Teste" img="" func={teste} />
      </main>
      <Taskbar />
    </div>
  );
}
