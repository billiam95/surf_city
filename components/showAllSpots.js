import useSWR from 'swr';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SpotCard from './spotCard.js'
import Image from 'next/image';
import EditForm from './editForm.js';
import { useRouter } from 'next/router';

export default function ShowAllSpots(){

const [spotsMap, setSpotsMap] = useState([])

  // Itinitialize fetcher for api calls to backend using 'useSWR'

  // const fetcher = (url) => fetch(url).then(r => r.json());
  // const {data, error} = useSWR(`http://localhost:3000/api/getAllSpots`, fetcher);
  //
  // if (!data) {
  //     return (<div>Loading...</div>)
  // }
  // if (error) {
  //     return (<div>failed to load</div>)
  // }

  const getAllSpots = () => {
    axios.get('/api/getAllSpots')
        .then((response) => {
            console.log('data retrieved successfully')
            setSpotsMap(response.data)
        })
  }

useEffect(()=> {
  getAllSpots();
}, []);





  // name: document.getElementById('name').value,
  // city: document.getElementById('city').value,
  // region: document.getElementById('region').value,
  // country: document.getElementById('country').value,
  // description: document.getElementById('description').value,
  // image: document.getElementById('image').value


//toggle the edit field in each card
  // const editForm = () => {
  //   setToggleEdit(!toggleEdit)
  // }

//mapping the information from the database
  // if (response.data) {
  //   for(let i=0; i<data.length; i++) {
  //     spotsMap.push(
  //       <SpotCard key={"spot" + i} spot={data[i]}/>
  //     )
  //   }
  // }


  const map = spotsMap.map((spot) => {
      return (
      <SpotCard key={`spot ${spot._id}`} spot={spot} getAllSpots={getAllSpots} />
      )
  });



  return(
    <>
      <div className="spotsContainer">
        {map}
      </div>
    </>
  )
}
