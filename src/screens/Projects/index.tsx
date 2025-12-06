import { useState } from "react";
import Image from "next/image";
import { ProjectItem, Anchor, Window } from "../../components";
import projectsList from "../../assets/projects.json";

export function ProjectScreen() {
  const [projects] = useState(projectsList);

  return (
    <Window name="Projetos" windowIndex={1}>
      {projects.map((item, index) => {
        return (
          <div className="flex w-full flex-col flex-wrap py-4 px-8 gap-8 max-[850px]:p-4 max-[850px]:gap-2 max-[450px]:p-2 max-[450px]:gap-2" key={index}>
            <ProjectItem
              title={item.title}
              description={item.description}
              image={item.image}
              repository={item.repository}
              techs={item.techs}
              concepts={item.concepts}
            />
            <div className="flex w-full h-px border-none rounded-2xl bg-white"></div>
          </div>
        );
      })}
      <div className="grid grid-cols-[60px_1fr_300px] w-full py-4 px-8 mb-12 gap-8 max-[850px]:flex max-[850px]:flex-col max-[850px]:p-4 max-[850px]:gap-4 max-[450px]:flex max-[450px]:flex-col max-[450px]:p-2">
        <div>
          <Image
            src="/icons/projects/githubIcon.svg"
            alt="Logo do gatinho polvo do github, em degrade do cinza para branco"
            width={47}
            height={47}
          />
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <h1 className="font-semibold text-2xl">Demais projetos</h1>
          <p className="font-normal text-[1.2rem]">Para ver outros projetos ainda em desenvolvimento, acesse meu perfil no github.</p>
        </div>
        <button className="flex flex-row justify-end items-center py-[0.8rem] px-4 gap-2 mb-8 justify-self-end bg-none border-none rounded-2xl cursor-pointer transition-all duration-200 hover:scale-90 hover:rounded-2xl hover:bg-[rgba(175,175,175,0.3)] max-[850px]:self-start max-[850px]:mb-8 max-[450px]:flex max-[450px]:flex-row max-[450px]:gap-8">
          <Anchor title="Acessar perfil no Github" url="https://github.com/TheMath123">
            <Image
              layout="fixed"
              src="/icons/projects/airplane.png"
              alt="Um aviãozinho da cor cinza"
              width={29}
              height={29}
            />
            <span className="font-light text-base text-white">Acessar perfil no Github</span>
          </Anchor>
        </button>
      </div>
    </Window>
  );
}
