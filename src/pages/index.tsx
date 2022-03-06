import Head from 'next/head'
import Image from 'next/image'
import { Taskbar } from '../components/taskbar'

export default function Home() {
  return (<>
    <h1>Hello NextJS!</h1>
    <Taskbar/>
  </>)
}
