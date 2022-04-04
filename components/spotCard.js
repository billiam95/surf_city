import DeleteButton from './deleteButton.js';
import EditForm from './editForm.js'
import { useEffect, useState } from 'react'

export default function SpotCard({spot}) {

  const [toggleEdit, setToggleEdit] = useState(true)

  const clickHandler = (e) => {
    e.preventDefault()
    // if (setToggleEdit) {
      // setToggleForm(<EditForm data={spot}/>)
      setToggleEdit(!toggleEdit)
    // } else {
      // setToggleForm(cardData)
    // }
  }


  const cardData = (
    <div className="spotCard">
      <div>
      <div className="spotHeader">
        <h2 className="spotName">
          {spot.name}
        </h2>
      </div>
      <div className="spotinfo">
        <img
        className="spotImage" src={spot.image}></img>
        <div className="writtenInfo">
            <div className="itemDiv">
                <h3 className="infoHeader">City: </h3>
                <p className="info">{spot.city}</p>
            </div>
            <div className="itemDiv">
                <h3 className="infoHeader">Region: </h3>
                <p className="info">{spot.region}</p>
            </div>
            <div className="itemDiv">
                <h3 className="infoHeader">Country: </h3>
                <p className="info">{spot.country}</p>
            </div>
        </div>
        <div className="descriptionContainer">
            <div className="descriptionItem">
                <h3 className="infoHeader">Description: </h3>
                <p className="description">{spot.description}</p>
            </div>
        </div>
      </div>
      </div>
      <div className="cardButtons">
        <DeleteButton data={spot}/>
        <button onClick={(e)=>clickHandler(e)}>Edit</button>
      </div>
    </div>
  )

// const [toggleForm, setToggleForm] = useState(cardData)


    return (
          toggleEdit ? cardData :
          <EditForm toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} data={spot}/>
    )
}
