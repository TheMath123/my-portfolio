import { useState } from "react";
import { ProjectItem, Window } from "../../components";
import projectsList from "../../assets/projects.json";
import { cn } from "@/utils/class-merge";

export function ProjectScreen() {
  const [projects] = useState(projectsList);
  const github = "https://github.com/TheMath123"

  return (
    <Window name="Projetos" windowIndex={1}>
      <div className={cn('flex flex-col gap-4 p-6')} >
        {projects.map((item, index) => {
          return (
            <ProjectItem
              key={`project-item-${index}`}
              title={item.title}
              description={item.description}
              image={item.image}
              repository={item.repository}

            />
          );
        })}
        <ProjectItem
          title="E muitos outros..."
          description="Esses são apenas alguns dos projetos que desenvolvi. Tenho muitos outros em meu GitHub, incluindo projetos pessoais e contribuições para projetos de código aberto."
          image={{
            url: "/icons/projects/githubIcon.svg",
            alt: "Logo do gatinho polvo do github, em degrade do cinza para branco"
          }}
          repository={{ projectURL: github }}
        />
      </div>
    </Window>
  );
}
