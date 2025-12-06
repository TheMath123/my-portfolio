import { useEffect, useRef } from "react";

type BadgeProps = {
  title: string;
  color: string;
  url?: string;
};

export function Badge(props: BadgeProps) {
  const mainCompRef = useRef<HTMLDivElement>({} as HTMLDivElement);

  useEffect(() => {
    fillColorBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function fillColorBackground() {
    if (props.color.charAt(0) === "#") {
      mainCompRef.current.style.background = props.color;
    } else {
      mainCompRef.current.style.background = `var(--color-${props.color})`;
    }
  }

  return (
    <main
      ref={mainCompRef}
      className="flex justify-center items-center flex-wrap text-center py-[5.6px] px-[11px] rounded-2xl [&::-webkit-scrollbar]:hidden"
      onClick={props.url ? () => window.open(props.url) : () => { }}
    >
      <span className="font-medium text-[0.8rem] text-white">{props.title}</span>
    </main>
  );
}
