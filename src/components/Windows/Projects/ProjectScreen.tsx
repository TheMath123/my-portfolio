import { useState } from "react";
import Image from "next/image";
import { ProjectItem } from "./ProjectItem";
import { Window } from "../window";
import { Anchor } from "../../Utility/Anchor";
import projectsList from "../../../assets/projects.json";
import styles from "./ProjectScreen.module.scss";

export function ProjectScreen() {
  const [projects] = useState(projectsList);

  return (
    <Window name="Projetos" windowIndex={1}>
      {projects.map((item, index) => {
        return (
          <div className={styles.projectBox}>
            <ProjectItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              repository={item.repository}
              techs={item.techs}
              concepts={item.concepts}
            />
            <div className={styles.partition}></div>
          </div>
        );
      })}
      <div className={styles.otherProjects}>
        <div>
          <Image
            src="/icons/projects/githubIcon.svg"
            alt="Logo do gatinho polvo do github, em degrade do cinza para branco"
            width={47}
            height={47}
          />
        </div>
        <div className={styles.descOtherProjects}>
          <h1>Demais projetos</h1>
          <p>
            Para ver outros projetos ainda em desenvolvimento, acesse meu perfil
            no github.
          </p>
        </div>
        <Anchor
          title="Acessar perfil no Github"
          url="https://github.com/TheMath123"
        >
          <Image
            layout="fixed"
            src="https://i.imgur.com/nI0TLjX.png"
            alt="Um aviãozinho da cor cinza"
            width={29}
            height={29}
          />
          <span>Acessar perfil no Github</span>
        </Anchor>
      </div>
    </Window>
  );
}
