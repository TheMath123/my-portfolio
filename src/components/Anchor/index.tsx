import toast from 'react-hot-toast';
import styles from './anchor.module.scss';

type ButtonProps = {
  url?: string;
  title: string;
  onClick?: () => void;
  children: React.ReactNode;
};

export function Anchor({url, title, onClick, children}: ButtonProps) {

  function copy() {
    navigator.clipboard.writeText(title);
    toast("Texto copiado!", {
      icon: "📄",
      style: {
        borderRadius: "15px",
        background: "var(--color2)",
        color: "white"
      }
    });
  }

  function handlerOnClick() {
    if (onClick) {
      onClick();
    } else {
      if (url) {
        window.open(url);
      } else {
        copy();
      }
    }
  }

  return (
    <button className={styles.button} onClick={handlerOnClick} title={title}>
      {children}
    </button>
  );
}
