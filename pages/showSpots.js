import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import ShowAllSpots from '../components/showAllSpots.js'
import Nav from '../components/Nav.js'


export default function Home() {
  return (
    <div className="index">
      <Nav />
      <ShowAllSpots />
    </div>
  )
}
