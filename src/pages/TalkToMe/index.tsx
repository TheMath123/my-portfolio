import { Contact, Window } from "../../components";
import styles from "./TalkToMe.module.scss";

export default function TalkToMeScreen() {
  return (
    <Window name="Fale comigo" windowIndex={2}>
      <div className={styles.container}>
        <Contact
          title="E-mail"
          description="math.p.agostinho@outlook.com"
          url="mailto:math.p.agostinho@outlook.com"
          imageUrl="/icons/contacts/mail.png"
          imageAlt="Envelope na cor azul"
        />

        <Contact
          title="Linkedin"
          description="matheus-p-agostinho"
          url="https://www.linkedin.com/in/matheus-p-agostinho/"
          imageUrl="/icons/contacts/linkedin.png"
          imageAlt="Logo da rede social Linkedin, um quadrado com borda arrendondada na cor azul,
          com letras i n em cor branca no meio"
        />

        <Contact
          title="Github"
          description="TheMath123"
          url="https://github.com/TheMath123"
          imageUrl="/icons/contacts/github.png"
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
