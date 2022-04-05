import AddForm from '../components/addForm.js'
import Link from 'next/link'
import Head from 'next/head'


const Nav = () => {
  return (
    <div className="navContainer">
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Comforter+Brush&display=swap" rel="stylesheet" />
        <meta name="description" content="surf tracking application" />
      </Head>

        <Link href="/">
            <h3 className="navLink appTitle">SWELL</h3>
        </Link>
        <Link href="/showSpots">
            <h3 className="navLink">SPOTS</h3>
        </Link>
        <Link href="/addSpotPage">
            <h3 className="navLink">ADD</h3>
        </Link>
    </div>
  )
}

export default Nav;
