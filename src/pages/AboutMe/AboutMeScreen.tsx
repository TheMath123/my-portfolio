import { Window } from "../../components/window";
import styles from "./AboutMe.module.scss";

export default function AboutMeScreen() {
  return (
    <Window name="Sobre o Matheus" windowIndex={0}>
      <main className={styles.container}>
        <h1>Sobre o Matheus!</h1>
        <p>Está pagina ainda encontra-se em desenvolvimento, recomendo que retorne aqui em outro momento.</p>
      </main>
    </Window>
  );
}
