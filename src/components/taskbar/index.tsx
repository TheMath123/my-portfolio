import Link from 'next/link'
import styles from './taskbar.module.scss'

export function Taskbar(){
  return(
    <div className={styles.taskbar}>
      <div className={styles.icons}>
        <button>Start</button>
        <Link href="#">HiText</Link>
        <Link href="#">StartMessage</Link>
      </div>
      <div className={styles.info}>
        <span>21:51</span>
        <span>03/03/2022</span>
      </div>
    </div>
  )
}