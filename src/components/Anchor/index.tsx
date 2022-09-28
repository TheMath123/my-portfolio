import toast from 'react-hot-toast';
import styles from './anchor.module.scss';

type ButtonProps = {
  url?: string;
  title: string;
  children: React.ReactNode;
};

export function Anchor(props: ButtonProps) {

  function copy() {
    navigator.clipboard.writeText(props.title);
    toast("Texto copiado!", {
      icon: "📄",
      style: {
        borderRadius: "15px",
        background: "var(--color2)",
        color: "white"
      }
    });
  }

  return (
    <button
      className={styles.button}
      onClick={() => (props.url ? window.open(props.url) : copy())}
      title={props.title}
    >
      {props.children}
    </button>
  );
}
