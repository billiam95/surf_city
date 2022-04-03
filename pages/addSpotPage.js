import AddForm from '../components/addForm.js'
import Nav from '../components/Nav.js'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'





export default function AddPage() {
  return (
    <div>
      <Nav />
      <AddForm />
    </div>
  )
}
