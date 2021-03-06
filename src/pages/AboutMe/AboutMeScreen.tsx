/* eslint-disable @next/next/no-img-element */
import { Window } from "../../components/window";
import styles from "./AboutMe.module.scss";

export default function AboutMeScreen() {
  const image = 'https://i.imgur.com/u0QBOKH.jpg';
  return (
    <Window name="Sobre o Matheus" windowIndex={0}>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <img src={image} alt="Foto do Matheus"/>
        </div>
        <div className={styles.rightSide}>
          <main className={styles.main}>
            <div>
              <h1>Matheus P. Agostinho</h1>
              <p>Desenvolvedor Front-end</p>
            </div>
            <div>
              <h3>Sobre</h3>
              <p>Sou Matheus, estou envolvido com a área de tecnologia desde a adolescência e adoro aprender sobre esse mundo, sou desenvolvedor há cerca de 5 anos. Atualmente minha stack é desenvolvimento web, porém passei já estudei e pratiquei em várias areas diferentes, passando por desenvolvendo back-end de API Rest, devops aprendendo um pouco de deploy de aplicações e computação em nuvem, segurança da informação aprendendo mais sobre falhas de segurança e como detecta-las, e front-end onde atuo atualmente como desenvolvedor mobile.</p>
            </div>
            <div>
              <h3>Formação</h3>
              <p>
                <strong>Universidade Federal do Mato Grosso do Sul</strong>
                Cursando Bacharelado em Sistemas de Informação
                <span>Previsão de termino 12/2023</span>
              </p>
            </div>
          </main>
        </div>
      </div>
    </Window>
  );
}
