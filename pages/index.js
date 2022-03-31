import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import ShowAllSpots from '../components/showAllSpots.js'
import AddForm from '../components/addForm.js'


export default function Home() {
  return (
    <div className="index">
      <Link href="/addSpotPage"><button>Add New Spot</button></Link>
      <ShowAllSpots />
    </div>
  )
}
