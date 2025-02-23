import Image from "next/image";
import { IIconProps } from "../../@types";
import styles from "./icon.module.scss";

export function Icon({ name, alt, img, commandToOpenWindow, umamiEvent }: IIconProps) {
  return (
    <div
      data-message={name}
      title={name}
      className={styles.container}
      data-umami-event={umamiEvent}
      onClick={(e) => {
        e.preventDefault();
        commandToOpenWindow();
      }}
    >
      <Image src={img} alt={alt} width={47} height={47} />
      <span>{name}</span>
      <div className={styles.background}></div>
    </div>
  );
}
