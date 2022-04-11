import { Project } from "../../components/project";
import { Window } from "../../components/window";

export function ProjectScreen() {
  return (
    <Window name="Projetos" windowIndex={1}>
      <Project image={{url:"teste", alt:"teste"}}/>
    </Window>
  );
}
