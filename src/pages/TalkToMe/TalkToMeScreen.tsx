import { Window } from "../../components/window";
import { Contact } from "../../components/Contact";
import styles from "./TalkToMe.module.scss";

export function TalkToMeScreen() {
  return (
    <Window name="Fale comigo" windowIndex={2}>
      <div className={styles.container}>
        <Contact
          title="WhatsApp"
          description="+55 (18) 9 9 9811 0199"
          url=""
          imageUrl="/icons/contacts/whatsapp.webp"
          imageAlt="Balão de conversar preenchido na cor verde, 
          com borda branca e também o telefone na cor branca dentro 
          do balão"
        />

        <Contact
          title="E-mail"
          description="mat.matheus_pa@hotmail.com"
          url=""
          imageUrl="/icons/contacts/email.webp"
          imageAlt="Envelope na cor azul"
        />

        <Contact
          title="Linkedin"
          description="matheus-p-agostinho"
          url=""
          imageUrl="/icons/contacts/linkedin.webp"
          imageAlt="Quadrado com borda arrendondada na cor azul,
          com letras i n em cor branca no meio"
        />

        <Contact
          title="Github"
          description="TheMath123"
          url=""
          imageUrl="/icons/contacts/github.webp"
          imageAlt="Circulo na cor azul arroxeado 
          com gato polvo simbolo do github dentro na cor do fundo"
        />

        <Contact
          title="Discord"
          description="TheMath123#2823"
          url=""
          imageUrl="/icons/contacts/discord.webp"
          imageAlt="Logotipo do discord o controle na cor azul"
        />
      </div>
    </Window>
  );
}
