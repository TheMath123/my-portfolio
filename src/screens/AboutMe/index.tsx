/* eslint-disable @next/next/no-img-element */
import { Window } from "../../components";

export function AboutMeScreen() {
  const image = "/images/myPhoto2.jpg";
  return (
    <Window name="Sobre o Matheus" windowIndex={0}>
      <div className="flex flex-col justify-start gap-8 p-8">
        <main className="flex flex-col gap-8">
          <div className="flex flex-col gap-[5px]">
            <h1 className="text-[1.1rem] font-bold underline">Matheus P. Agostinho</h1>
            <p className="flex flex-col text-base font-normal">Desenvolvedor de Software</p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[1.1rem] font-bold underline">Sobre</h3>
            <p className="flex flex-col text-base font-normal">
              <span className="font-light">Sou desenvolvedor de software júnior e entusiasta de tecnologia, utilizo da programação para resolver
                problemas. Minha jornada começou quando ganhei meu primeiro computador, a partir desse momento fiquei
                fascinado por esse mundo e aprendi de forma autodidata um pouco tudo de cada área, influenciando-me a
                escolher o Bacharelado em Sistemas de Informação, que me deu embasamento teórico que ajudam ao longo da
                minha carreira. Sempre aprimorando minhas habilidades como desenvolvedor de software.</span>
            </p>
          </div>
          <div className="flex flex-col gap-[5px]">
            <h3 className="text-[1.1rem] font-bold underline">Formação</h3>
            <p className="flex flex-col text-base font-normal">
              <strong>Universidade Federal do Mato Grosso do Sul</strong>
              <span className="font-light">Cursando Bacharelado em Sistemas de Informação</span>
            </p>
          </div>
        </main>
      </div>
    </Window>
  );
}
