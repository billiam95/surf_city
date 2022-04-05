import axios from 'axios'


export default function AddForm() {


  const saveSurfSpot = (spot) => {
    axios.post('http://localhost:3000/api/createSpot', spot)
      .then((response) => {
        console.log(response)
        getItems()
      })
      .catch((error) => {
        console.log(error.response);
  })
}

  const handleSubmit = (e) => {
      e.preventDefault()
      let spot = {
          name: document.getElementById('name').value,
          city: document.getElementById('city').value,
          region: document.getElementById('region').value,
          country: document.getElementById('country').value,
          description: document.getElementById('description').value,
          image: document.getElementById('image').value
          };
      console.log(spot);
      saveSurfSpot(spot);

    }

  return(
    <center><div className="spotCard">
        <form onSubmit={(e)=> {handleSubmit(e)}}>
          <label className="labelHeader">Name</label><br/>
          <input type="text" id="name" name="name" required/>
          <br/><br/>
          <label className="labelHeader">City</label><br/>
          <input type="text" id="city" name="city" required/>
          <br/><br/>
          <label className="labelHeader">Region</label><br/>
          <input type="text" id="region" name="region" required/>
          <br/><br/>
          <label className="labelHeader">Country</label><br/>
          <input type="text" id="country" name="country" required/>
          <br/><br/>
          <label className="labelHeader">Description</label><br/>
          <textarea type="text" id="description" name="description" required/>
          <br/><br/>
          <label className="labelHeader">Image</label><br/>
          <input type="text" id="image" name="image" required/>
          <br/><br/>

          <input type="submit" value="Submit" />
        </form>
    </div></center>
  )
}
