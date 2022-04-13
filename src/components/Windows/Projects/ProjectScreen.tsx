import { useEffect, useState } from "react";
import { ProjectItem } from "./ProjectItem";
import { Window } from "../window";

export function ProjectScreen() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects("../../../assets/projects.json");
  });

  return (
    <Window name="Projetos" windowIndex={1}>
      {projects.map((item, index) => {
        return (
          <ProjectItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            repository={item.repository}
            techs={item.techs}
            concepts={item.concepts}
          />
        );
      })}
    </Window>
  );
}
