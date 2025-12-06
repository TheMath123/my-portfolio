import { Window } from "../../components";

export function AboutMeScreen() {
  return (
    <Window name="Sobre o Matheus" windowIndex={0}>
      <div className="flex flex-col gap-6 p-6 mx-auto">
        <div>
          <h1 className="font-bold">Matheus P. Agostinho</h1>
          <h2 className="font-medium text-slate-300">
            Desenvolvedor de Software
          </h2>
        </div>
        <article className="flex flex-col gap-4 text-justify leading-6">
          <p>
            Minha paixão por tecnologia começou ainda na adolescência, quando
            tive o primeiro contato com um computador. A curiosidade virou
            vocação, e mergulhei no aprendizado autodidata até buscar uma base
            mais sólida com o Bacharelado em Sistemas de Informação. Essa
            formação me deu não só fundamentos técnicos, mas também visão
            estratégica para usar a tecnologia como ferramenta de transformação.
          </p>

          <p>
            Hoje atuo como Head Tech e Desenvolvedor Front-end em uma startup
            focada em soluções white-label para e-commerce nos segmentos de
            seguros, assistências e infoprodutos. Ao longo da minha trajetória,
            passei por empresas de diferentes perfis, sempre próximo dos
            processos e das pessoas, o que me ensinou a enxergar além do código
            e entender o real impacto das soluções desenvolvidas.
          </p>

          <p>
            Sou entusiasta de novas tecnologias e metodologias, e busco
            constantemente evoluir, tanto tecnicamente quanto como pessoa.
            Acredito na colaboração, no aprendizado contínuo e em construir
            soluções que gerem valor — sempre com o propósito de crescer junto
            com quem compartilha da mesma visão.
          </p>
        </article>
      </div>
    </Window>
  );
}
