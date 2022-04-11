import { ProjectItem } from "./ProjectItem";
import { Window } from "../window";

export function ProjectScreen() {
  return (
    <Window name="Projetos" windowIndex={1}>
      <ProjectItem
        title="Start Message"
        description="Gerador um link para iniciar um conversa no WhatsApp a partir de um número de telefone."
        image={{
          alt:"Logo da Aplicação do StartMessage, um bolãozinho de conversa verde com telefone na cor branco dentro.",
          url:"https://i.imgur.com/0dxg2EZ.png"
        }}
        repository={{
          demoURL:"https://startmessage.vercel.app/",
          projectURL:"https://github.com/TheMath123/StartMessage",
        }}
        techs={[
          {
            color:'js',
            title:'Javascript',
          },
          {
            color:'html',
            title:'HTML',
          },
          {
            color:'css',
            title:'CSS',
          },
        ]}
        concepts={[
          {
            color:'ux',
            title:'UX'
          },
          {
            color:'mobile',
            title:'Mobile First'
          },
          {
            color:'responsiveness',
            title:'Responsividade'
          },
        ]}
      />
    </Window>
  );
}
