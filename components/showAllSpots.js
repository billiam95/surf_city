import useSWR from 'swr';
import { useState } from 'react';
import DeleteButton from './deleteButton.js'
import Image from 'next/image'


export default function ShowAllSpots(){

  // Itinitialize fetcher for api calls to backend using 'useSWR'
  const fetcher = url => fetch(url).then(r => r.json());

  const {data, error} = useSWR(`http://localhost:3000/api/getAllSpots`, fetcher);

  console.log(data)

  const spotsMap = []

  if (!data) {
      return (<div>Loading...</div>)
  }

  if (error) {
      return (<div>failed to load</div>)
  }

  // name: document.getElementById('name').value,
  // city: document.getElementById('city').value,
  // region: document.getElementById('region').value,
  // country: document.getElementById('country').value,
  // description: document.getElementById('description').value,
  // image: document.getElementById('image').value

  if (data) {
    for(let i=0; i<data.length; i++) {
      spotsMap.push(
      <div className="spotCard" key={"spot" + i}>
        <div className="spotHeader">
          <h2 className="spotName">
            {data[i].name}
          </h2>
        </div>
        <div className="spotinfo">
          <img className="spotImage" src={data[i].image}></img>
          <h3>City: </h3>
          <p className="info">{data[i].city}</p>
          <h3>Region: </h3>
          <p className="info">{data[i].region}</p>
          <h3>Country: </h3>
          <p className="info">{data[i].country}</p>
          <h3>Description: </h3>
          <p className="description">{data[i].description}</p>
          <DeleteButton data={data[i]}/>
        </div>
      </div>)
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
    <>
      <h1>SURF SPOTS</h1>
      <div className="spotsContainer">
        {spotsMap}
      </div>
    </>
  )
}
