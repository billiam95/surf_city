import useSWR from 'swr';
import { useState, useEffect } from 'react';
import DeleteButton from './deleteButton.js'
import Image from 'next/image'
import EditForm from './editForm.js'

export default function ShowAllSpots(){

const [toggleEdit, setToggleEdit] = useState(false)


  // Itinitialize fetcher for api calls to backend using 'useSWR'
  const fetcher = (url) => fetch(url).then(r => r.json());

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


//toggle the edit field in each card
  // const editForm = () => {
  //   setToggleEdit(!toggleEdit)
  // }




//mapping the information from the database
  if (data) {
    for(let i=0; i<data.length; i++) {
      spotsMap.push(
      <div className="spotCard" key={"spot" + i}>
        { !toggleEdit ?
        <div>
        <div className="spotHeader">
          <h2 className="spotName">
            {data[i].name}
          </h2>
        </div>
        <div className="spotinfo">
          <img
          className="spotImage" src={data[i].image}></img>
          <div className="writtenInfo">
              <div className="itemDiv">
                  <h3 className="infoHeader">City: </h3>
                  <p className="info">{data[i].city}</p>
              </div>
              <div className="itemDiv">
                  <h3 className="infoHeader">Region: </h3>
                  <p className="info">{data[i].region}</p>
              </div>
              <div className="itemDiv">
                  <h3 className="infoHeader">Country: </h3>
                  <p className="info">{data[i].country}</p>
              </div>
          </div>
          <div className="descriptionContainer">
              <div className="descriptionItem">
                  <h3 className="infoHeader">Description: </h3>
                  <p className="description">{data[i].description}</p>
              </div>
          </div>
        </div>
        </div> : <EditForm data={data[i]} />
        }
        <div className="cardButtons">
          <DeleteButton data={data[i]}/>
          <button onClick={()=>setToggleEdit(!toggleEdit)}>Edit</button>
        </div>
      </div>)
    }
  }


  return(
    <>
      <div className="spotsContainer">
        {spotsMap}
      </div>
    </>
  )
}
