import useSWR from 'swr';
import { useState } from 'react';


export default function Delete({data}) {
  console.log(data)
  const newVar = {
    name: data.name
  }

  const handleDelete = (e) => {
    e.preventDefault()
    fetch("/api/removeSpot", {
      method: "DELETE",
      headers:
      {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newVar),
    })
  }


  return (
    <div>
      <button onClick = {(e)=>handleDelete(e)}>Delete</button>
    </div>
  )
}
