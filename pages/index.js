import Head from 'next/head'
import Image from 'next/image'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'

import ShowAllSpots from '../components/showAllSpots.js'



export default function Home() {



  return (
    <div className={styles.container}>
      <ShowAllSpots />
    </div>
  )
}
