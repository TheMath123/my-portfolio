import Image from 'next/image';
import { IComponentProjectProps } from '../../../../@types';
import { Anchor } from '../../../Utility/Anchor';
import { Badge } from "../../../Utility/Badge";
import styles from './project.module.scss';

export function ProjectItem({image, description, title, techs, concepts, repository}: IComponentProjectProps,){
  return(
    <div className={styles.container}>
      <div className={styles.contentImage}>
        <Image src={image.url} alt={image.alt} width={47} height={47} />
      </div>

      <main className={styles.contentDescription}>
        <div className={styles.description}>
          <h1>{title}</h1>
          <article>{description}</article>
        </div>

        <footer>
          <div className={styles.technologies}>
            <h2>Tecnologias Usadas</h2>
            <ul>
              {techs.map( (value, index) => {
                <Badge key={index} title={value.title} color={value.color} url={value.url} />
              })}
            </ul>
          </div>
          <div className={styles.technologies}>
            <h2>Conceitos utilizados</h2>
            <ul>
              {concepts.map( (value, index) => {
                <Badge key={index} title={value.title} color={value.color} url={value.url} />
              })}
            </ul>
          </div>
        </footer>
      </main>

      <nav className={styles.contentLinks}>
        <Anchor title='Demo' url={repository.demoURL}> 
          <Image src='https://i.imgur.com/nI0TLjX.png' alt='Um aviãozinho da cor cinza' width={47} height={47} />
          <span>Demo</span>
        </Anchor>

        <Anchor title='Repositório' url={repository.projectURL}> 
          <Image src='/icons/projects/gitIcon.svg' alt='Logotipo do git em cor cinza' width={47} height={47} />
          <span>Repositório</span>
        </Anchor>
      </nav>
    </div>
  )
}