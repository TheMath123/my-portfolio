import Image from "next/image";
import { IComponentProjectProps } from '../../@types';
import styles from './project.module.scss';

export function Project({image}: IComponentProjectProps,){
  return(
    <div className={styles.container}>
      <div className={styles.contentImage}>
        <Image src={image.url} alt={image.alt} width={47} height={47} />
      </div>

      <main className={styles.contentDescription}>

      </main>

      <nav className={styles.contentLinks}>
        
      </nav>
    </div>
  )
}