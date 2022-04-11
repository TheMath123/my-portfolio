import { ProjectItem } from "./ProjectItem";
import { Window } from "../window";

export function ProjectScreen() {
  return (
    <Window name="Projetos" windowIndex={1}>
      <ProjectItem image={{url:"teste", alt:"teste"}}/>
    </Window>
  );
}
