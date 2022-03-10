import Image from "next/image";
import styles from "./icon.module.scss";

type iconProps = {
  name: string;
  img: string;
  func?: () => void;
};

export function Icon({ name, img, func }: iconProps) {
  return (
    <div className={styles.container} onClick={() => func}>
      <Image src={img} alt={name} width={47} height={47} />
      <span>{name}</span>
      <div className={styles.background}></div>
    </div>
  );
}
