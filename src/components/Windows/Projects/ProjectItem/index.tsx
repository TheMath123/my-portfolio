import { IComponentProjectProps } from '../../../../@types';
import { Badge } from "../../../Utility/Badge";
import styles from './project.module.scss';

//--------------------->image
export function ProjectItem({}: IComponentProjectProps,){
  return(
    <div className={styles.container}>
      <div className={styles.contentImage}>
        {/* <Image src={image.url} alt={image.alt} width={47} height={47} /> */}
      </div>

      <main className={styles.contentDescription}>
        <Badge title="Javascript" color="js"/>
        <Badge title="Mobile First" color="mobile"/>
      </main>

      <nav className={styles.contentLinks}>
        
      </nav>
    </div>
  )
}