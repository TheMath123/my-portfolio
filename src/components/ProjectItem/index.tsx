import Image from "next/image";
import { IComponentProjectProps } from "../../@types";
import { Anchor } from "../Anchor";
import { Badge } from "../Badge";
import styles from "./project.module.scss";

export function ProjectItem({
  image,
  description,
  title,
  techs,
  concepts,
  repository
}: IComponentProjectProps) {
  return (
    <div className={styles.container}>
      <div className={styles.contentImage}>
        <Image src={image.url} alt={image.alt} width={47} height={47} />
      </div>

      <main className={styles.contentDescription}>
        <div className={styles.description}>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        <footer className={styles.badgesBox}>
          <div className={styles.technologies}>
            <h2>Tecnologias Usadas</h2>
            <ul>
              {techs.map((value, index) => {
                return (
                  <Badge
                    key={index}
                    title={value.title}
                    color={value.color}
                    url={value.url}
                  />
                );
              })}
            </ul>
          </div>
          <div className={styles.technologies}>
            <h2>Conceitos utilizados</h2>
            <ul>
              {concepts.map((value, index) => {
                return (
                  <Badge
                    key={index}
                    title={value.title}
                    color={value.color}
                    url={value.url}
                  />
                );
              })}
            </ul>
          </div>
        </footer>
      </main>

      <nav className={styles.contentLinks}>
        <Anchor title="Demo" url={repository.demoURL}>
          <Image
            layout="fixed"
            src="https://firebasestorage.googleapis.com/v0/b/matheuspa-projects.appspot.com/o/my-portfolio%2Ficons%2Fairplane.png?alt=media&token=b492a411-2c6a-4fbe-a11d-677b46c4d6c6"
            alt="Um aviãozinho da cor cinza"
            width={29}
            height={29}
          />
          <span>Demo</span>
        </Anchor>

        <Anchor title="Repositório" url={repository.projectURL}>
          <Image
            layout="fixed"
            src="/icons/projects/gitIcon.svg"
            alt="Logotipo do git em cor cinza"
            width={29}
            height={29}
          />
          <span>Repositório</span>
        </Anchor>
      </nav>
    </div>
  );
}
