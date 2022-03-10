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
        <Icon name="Teste Longo e bem grande" img="/hitext.svg" func={teste} />
      </main>
      <Taskbar />
    </div>
  );
}
