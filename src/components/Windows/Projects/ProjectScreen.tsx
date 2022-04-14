import { useEffect, useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { Window } from "../window";
import projectsList from "../../../assets/projects.json";
import styles from "./ProjectScreen.module.scss";

export function ProjectScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log(projectsList);
    setProjects(projectsList);
  }, []);

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
    </Window>
  );
}
