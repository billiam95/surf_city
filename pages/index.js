import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import '../public/surf_city.png'
import useSWR from 'swr';

import ShowAllSpots from '../components/showAllSpots.js';
import Nav from '../components/Nav.js';


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
        <div className="welcomeMessage">
            <center><h2 className="welcomeHeader">welcome to SWELL</h2></center>
        </div>
        <iframe
            width="100%"
            height="1000"
            src="https://www.youtube.com/embed/Q_ReXuz3xww"
            autoPlay muted
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
        <div className="welcomeMessage">
            <center><h2 className="welcomeHeader">Catalogue all your favorite spots or plan your next surf trip in one place!</h2></center>
        </div>
        <center><img className="homeImage" src="/surf_city.png"/></center>
    </div>
  )
}
