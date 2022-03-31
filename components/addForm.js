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
    <form onSubmit={(e)=> {handleSubmit(e)}}>
      <label>Name
      <input type="text" id="name" name="name" required/>
      </label><br/><br/>
      <label>City
      <input type="text" id="city" name="city" required/>
      </label><br/><br/>
      <label>Region
      <input type="text" id="region" name="region" required/>
      </label><br/><br/>
      <label>Country
      <input type="text" id="country" name="country" required/>
      </label><br/><br/>
      <label>Description
      <textarea type="text" id="description" name="description" required/>
      </label><br/><br/>
      <label>Image
      <input type="text" id="image" name="image" required/>
      </label><br/><br/>

      <input type="submit" value="Submit" />
    </form>
  )
}
