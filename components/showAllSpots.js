import useSWR from 'swr';
import { useState } from 'react';
import DeleteButton from './deleteButton.js'


export default function ShowAllSpots(){

  // Itinitialize fetcher for api calls to backend using 'useSWR'
  const fetcher = url => fetch(url).then(r => r.json());

  const {data, error} = useSWR(`http://localhost:3000/api/getAllSurfSpots`, fetcher);

  console.log(data)

  const spotsMap = []

  if (!data) {
      return (<div>Loading...</div>)
  }

  if (error) {
      return (<div>failed to load</div>)
  }

  if (data) {
    for(let i=0; i<data.length; i++) {
      spotsMap.push(<div key={"spot" + i}>{data[i].name}<DeleteButton data={data[i]}/></div>)
    }
    // make a hook to use map correctly
    // const map = data.map((spot) => {
    //   return (
    //     <div key={spot._id}>{spot[i].name}</div>
    //   )
    // })

    console.log(spotsMap)
  }


  return(
    <div>
      <h1>SURF SPOTS</h1>
      {spotsMap}
    </div>
  )
}
