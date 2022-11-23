import { useEffect, useRef } from "react";
import styles from "./badge.module.scss";

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
      mainCompRef.current.style.background = `var(--${props.color})`;
    }
  }

  return (
    <main
      ref={mainCompRef}
      className={styles.badgeBox}
      onClick={props.url ? () => window.open(props.url) : ()=>{}}
    >
      <span className={styles.title}>{props.title}</span>
    </main>
  );
}
