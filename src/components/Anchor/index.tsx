import styles from './anchor.module.scss';

type ButtonProps = {
  url?: string;
  title: string;
  children: React.ReactNode;
};

export function Anchor(props: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={() =>
        props.url
          ? window.open(props.url)
          : navigator.clipboard.writeText(props.title)
      }
      title={props.title}
    >
      {props.children}
    </button>
  );
}
