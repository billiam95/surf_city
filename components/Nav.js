import AddForm from '../components/addForm.js'
import Link from 'next/link'


const Nav = () => {
  return (
    <div className="navContainer">
        <Link href="/">
            <h3 className="navLink">Home</h3>
        </Link>
        <Link href="/showSpots">
            <h3 className="navLink">Spots</h3>
        </Link>
        <Link href="/addSpotPage">
            <h3 className="navLink">Add</h3>
        </Link>
    </div>
  )
}

export default Nav;
