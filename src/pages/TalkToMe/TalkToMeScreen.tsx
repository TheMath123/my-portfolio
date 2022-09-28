
import { Window } from "../../components/window";
import { Contact } from "../../components/Contact";
import styles from "./TalkToMe.module.scss";

export default function TalkToMeScreen() {
  return (
    <Window name="Fale comigo" windowIndex={2}>
      <div className={styles.container}>
        <Contact
          title="E-mail"
          description="mat.matheus_pa@hotmail.com"
          url="mailto:mat.matheus_pa@hotmail.com"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/matheuspa-projects.appspot.com/o/my-portfolio%2Ficons%2Fmail.png?alt=media&token=0341b64a-51b9-45d9-bd50-8df459f5d1de"
          imageAlt="Envelope na cor azul"
        />

        <Contact
          title="Linkedin"
          description="matheus-p-agostinho"
          url="https://www.linkedin.com/in/matheus-p-agostinho/"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/matheuspa-projects.appspot.com/o/my-portfolio%2Ficons%2Flinkedin.png?alt=media&token=465e0c72-05d4-4d63-b7f0-51ebc11916a3"
          imageAlt="Quadrado com borda arrendondada na cor azul,
          com letras i n em cor branca no meio"
        />

        <Contact
          title="Github"
          description="TheMath123"
          url="https://github.com/TheMath123"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/matheuspa-projects.appspot.com/o/my-portfolio%2Ficons%2Fgithub.png?alt=media&token=bb96b166-f48f-41fe-b908-7b7657f08cec"
          imageAlt="Circulo na cor azul arroxeado 
          com gato polvo simbolo do github dentro na cor do fundo"
        />

        <Contact
          title="Discord"
          description="TheMath123#2823"
          imageUrl="/icons/contacts/discord.svg"
          imageAlt="Logotipo do discord o controle na cor azul"
        />
      </div>
    </Window>
  );
}
