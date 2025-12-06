import Image from "next/image";
import { IComponentProjectProps } from "../../@types";
import { Anchor } from "..";

export function ProjectItem({ image, description, title, repository }: IComponentProjectProps) {
  return (
    <div className="flex flex-row justify-between max-[850px]:flex-col">
      <main className="flex flex-row gap-7 [&::-webkit-scrollbar]:hidden">
        <Image src={image.url} alt={image.alt} width={47} height={47} />
        <div className="flex flex-col gap-[0.2rem]">
          <h1 className="font-semibold text-2xl">{title}</h1>
          <p className="font-light text-[1.2rem]">{description}</p>
        </div>

        {/* <footer className={styles.badgesBox}>
          <div className={styles.technologies}>
            <h2>Tecnologias Usadas</h2>
            <ul>
              {techs?.map((value, index) => {
                return <Badge key={index} title={value.title} color={value.color} url={value.url} />;
              })}
            </ul>
          </div>
          <div className={styles.technologies}>
            <h2>Conceitos utilizados</h2>
            <ul>
              {concepts?.map((value, index) => {
                return <Badge key={index} title={value.title} color={value.color} url={value.url} />;
              })}
            </ul>
          </div>
        </footer> */}
      </main>

      <nav className="flex flex-col justify-self-end items-end gap-2 max-[850px]:items-start">
        <Anchor title="Demo" url={repository.demoURL}>
          <Image
            layout="fixed"
            src="/icons/projects/airplane.png"
            alt="Um aviãozinho da cor cinza"
            width={29}
            height={29}
          />
          <span className="font-light text-base text-white">Ao vivo</span>
        </Anchor>

        <Anchor title="Repositório" url={repository.projectURL}>
          <Image
            layout="fixed"
            src="/icons/projects/gitIcon.svg"
            alt="Logotipo do git em cor cinza"
            width={29}
            height={29}
          />
          <span className="font-light text-base text-white">Repositório</span>
        </Anchor>
      </nav>
    </div>
  );
}
