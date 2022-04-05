import useSWR from 'swr';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Delete(props) {
  const router = useRouter();
  console.log(props.data)
  const newVar = {
    name: props.data.name
  }

  // const handleDelete = (e) => {
  //   e.preventDefault()
  //   fetch("/api/removeSpot", {
  //     method: "DELETE",
  //     headers:
  //     {
  //     "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newVar),
  //   })
  //   // page reload
  //   return router.push(router.asPath);
  // }


  const handleDelete = () => {
    axios.delete('/api/removeSpot', { data: newVar })
      .then((response) => {
        console.log('hitting .then')
        console.log(response)
        props.getAllSpots()
      })
      .catch((error) => {
        console.log('catching error')
        console.log(error.response);
      })
  }

  return (
    <div>
      <button onClick = {(e)=>handleDelete(e)}>Delete</button>
    </div>
  )
}
