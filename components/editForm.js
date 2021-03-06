import axios from 'axios';
import { useState, useEffect } from 'react';
import {useRouter} from 'next/router'

const EditForm = (props) => {
const router = useRouter();
  // const [spot, setSpot] = useState({
  //   _id: '',
  //   name: '',
  //   city: '',
  //   region: '',
  //   country: '',
  //   description: '',
  //   image: ''
  // })
//state hooks for each value form field!!!
  const [name, setName] = useState(props.data.name);
  const [city, setCity] = useState(props.data.city);
  const [region, setRegion] = useState(props.data.region);
  const [country, setCountry] = useState(props.data.country);
  const [description, setDescription] = useState(props.data.description);
  const [image, setImage] = useState(props.data.image);

  const editSurfSpot = (spot) => {
    console.log('making it to editSurfSpot func')
    axios.put('/api/editSpot', spot)
      .then((response) => {
        console.log('the response is')
        console.log(response.data);
        props.getAllSpots();
      })
      .catch((error) => {
        console.log(error.response);
      })
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      let spot = {
          _id: props.data._id,
          name: document.getElementById('name').value,
          city: document.getElementById('city').value,
          region: document.getElementById('region').value,
          country: document.getElementById('country').value,
          description: document.getElementById('description').value,
          image: document.getElementById('image').value
          };
      console.log(spot);

      editSurfSpot(spot);
      props.setToggleEdit(!props.toggleEdit)

    }

  return(
    <div className="spotCard">
    <form onSubmit={(e)=> {handleSubmit(e)}}>
      <label className="labelHeader">Name</label><br/>
      <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required/>
      <br/><br/>
      <label className="labelHeader">City</label><br/>
      <input type="text" id="city" name="city" value={city} onChange={(e)=>{setCity(e.target.value)}} required/>
      <br/><br/>
      <label className="labelHeader">Region</label><br/>
      <input type="text" id="region" name="region" value={region} onChange={(e)=>{setRegion(e.target.value)}} required/>
      <br/><br/>
      <label className="labelHeader">Country</label><br/>
      <input type="text" id="country" name="country" value={country} onChange={(e)=>{setCountry(e.target.value)}} required/>
      <br/><br/>
      <label className="labelHeader">Description</label><br/>
      <textarea type="text" id="description" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} required/>
      <br/><br/>
      <label className="labelHeader">Image</label><br/>
      <input type="text" id="image" name="image" value={image} onChange={(e)=>{setImage(e.target.value)}}
      />
      <br/><br/>

      <input type="submit" value="Submit" />
      <button>Back</button>
    </form>
    </div>

  )
}

export default EditForm;
