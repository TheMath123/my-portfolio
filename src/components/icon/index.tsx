import Image from "next/image";
import styles from "./icon.module.scss";

type iconProps = {
  name: string;
  alt: string;
  img: string;
  func?: () => void;
};

export function Icon({ name, alt, img, func }: iconProps) {
  return (
    <div data-message={name} className={styles.container} onClick={() => func}>
      <Image src={img} alt={alt} width={47} height={47} />
      <span>{name}</span>
      <div className={styles.background}></div>
    </div>
  );
}
