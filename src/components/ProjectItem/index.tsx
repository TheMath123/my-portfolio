import Image from "next/image";
import { IComponentProjectProps } from "../../@types";
import { LiveButton } from "./live-button";
import { RepoButton } from "./repo-button";

export function ProjectItem({ image, description, title, repository }: IComponentProjectProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 border-b border-slate-300/10 pb-4 mb-4 w-full">
      <div className="flex flex-row gap-4 items-center w-full">
        <Image src={image.url} alt={image.alt} width={47} height={47} />
        <article>
          <h3 className="font-semibold">{title}</h3>
          <p>{description}</p>
        </article>
      </div>
      <nav className="flex flex-row md:flex-col gap-2 justify-center items-end w-full md:w-fit">
        {repository.demoURL && <LiveButton to={repository.demoURL} />}
        {repository.projectURL && <RepoButton to={repository.projectURL} />}
      </nav>
    </div>
  );
}
