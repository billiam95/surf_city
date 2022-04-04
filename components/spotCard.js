import DeleteButton from './deleteButton.js';
import EditForm from './editForm.js'
import { useEffect, useState } from 'react'

export default function SpotCard(props) {

  const [toggleEdit, setToggleEdit] = useState(true)

  const clickHandler = (e) => {
    e.preventDefault()
      console.log('hitting ClickHandler')
      setToggleEdit(!toggleEdit)
  }


  const cardData =
    <div className="spotCard">
      <div>
      <div className="spotHeader">
        <h2 className="spotName">
          {props.spot.name}
        </h2>
      </div>
      <div className="spotinfo">
        <img
        className="spotImage" src={props.spot.image}></img>
        <div className="writtenInfo">
            <div className="itemDiv">
                <h3 className="infoHeader">City: </h3>
                <p className="info">{props.spot.city}</p>
            </div>
            <div className="itemDiv">
                <h3 className="infoHeader">Region: </h3>
                <p className="info">{props.spot.region}</p>
            </div>
            <div className="itemDiv">
                <h3 className="infoHeader">Country: </h3>
                <p className="info">{props.spot.country}</p>
            </div>
        </div>
        <div className="descriptionContainer">
            <div className="descriptionItem">
                <h3 className="infoHeader">Description: </h3>
                <p className="description">{props.spot.description}</p>
            </div>
        </div>
      </div>
      </div>
      <div className="cardButtons">
        <DeleteButton data={props.spot}/>
        <button onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>
      </div>
    </div>


// const [toggleForm, setToggleForm] = useState(cardData)

    return (
          toggleEdit ? cardData :
          <EditForm
          toggleEdit={toggleEdit}
          setToggleEdit={setToggleEdit}
          data={props.spot}
          getAllSpots={props.getAllSpots}
          />
    )
}
