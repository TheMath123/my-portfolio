import styles from './taskbar.module.scss'

export function Taskbar(){
  return(
    <div className={styles.container}>
      <main></main>
      <div className={styles.bar}>
        <div className={styles.icons}>
          <button>teste</button>
        </div>
      </div>
    </div>
  )
}