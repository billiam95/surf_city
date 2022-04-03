import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'

import ShowAllSpots from '../components/showAllSpots.js'
import Nav from '../components/Nav.js'


export default function Home() {
  return (
    <div className="index">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap" rel="stylesheet" />
            <title>
                SWELL APP
            </title>
            <meta name="description" content="surf tracking application" />
        </Head>
        <Nav />
    </div>
  )
}
