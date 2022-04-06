import Image from "next/image";
import { IIconProps } from "../../@types";
import { useWindow } from "../../hooks/useControlWindow";
import styles from "./icon.module.scss";

export function Icon({ name, alt, img, func, windowIndexToOpen }: IIconProps) {
  const { openTheWindow } = useWindow()

  windowIndexToOpen()
  return (
    <div
      data-message={name}
      title={name}
      className={styles.container}
      onClick={(e) => {
        e.preventDefault();
        if(windowIndexToOpen !== null){
          // openTheWindow(windowIndexToOpen, true)
        }
      }}
    >
      <Image src={img} alt={alt} width={47} height={47} />
      <span>{name}</span>
      <div className={styles.background}></div>
    </div>
  );
}
