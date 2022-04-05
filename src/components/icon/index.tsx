import Image from "next/image";
import { IIconProps } from "../../@types";
import styles from "./icon.module.scss";

export function Icon({ name, alt, img, func }: IIconProps) {
  return (
    <div
      data-message={name}
      title={name}
      className={styles.container}
      onClick={() => func}
    >
      <Image src={img} alt={alt} width={47} height={47} />
      <span>{name}</span>
      <div className={styles.background}></div>
    </div>
  );
}
