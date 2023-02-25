/* eslint-disable @next/next/no-img-element */
import { Window } from "../../components";
import styles from "./AboutMe.module.scss";

export default function AboutMeScreen() {
  const image = "/images/myPhoto2.jpg";
  return (
    <Window name="Sobre o Matheus" windowIndex={0}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src={image} alt="Foto do Matheus" />
        </div>
        <div className={styles.rightSide}>
          <main className={styles.main}>
            <div>
              <h1>Matheus P. Agostinho</h1>
              <p>Desenvolvedor de Software</p>
            </div>
            <div>
              <h3>Sobre</h3>
              <p>
                Sou desenvolvedor de software júnior e entusiasta de tecnologia,
                utilizo da programação para resolver problemas. Minha jornada
                começou quando ganhei meu primeiro computador, a partir desse
                momento fiquei fascinado por esse mundo e aprendi de forma
                autodidata um pouco tudo de cada área, influenciando-me a
                escolher o Bacharelado em Sistemas de Informação, que me deu
                embasamento teórico que ajudam ao longo da minha carreira.
                Sempre aprimorando minhas habilidades como desenvolvedor de
                software.
              </p>
            </div>
            <div>
              <h3>Formação</h3>
              <p>
                <strong>Universidade Federal do Mato Grosso do Sul</strong>
                Cursando Bacharelado em Sistemas de Informação
              </p>
            </div>
          </main>
        </div>
      </div>
    </Window>
  );
}
