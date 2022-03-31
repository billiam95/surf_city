import AddForm from '../components/addForm.js'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import styles from '../styles/Home.module.css'




export default function AddPage() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <button>Home</button>
      </Link>
      <AddForm />
    </div>
  )
}
