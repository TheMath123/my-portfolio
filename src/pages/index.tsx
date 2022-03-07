import Head from 'next/head'
import Image from 'next/image'
import { Taskbar } from '../components/taskbar'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.workspace}>
      <main> Hi Portfolio!</main>
      <Taskbar/>
    </div>
  )
}
