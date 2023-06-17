import React, { useState } from 'react';
import axios from 'axios';
import Gallery from './Gallery';

function App() {
  const apikey='34a3e6a020f62943ff47fbf6e337e2ba'
  const [search, setData] = useState('');
  const [data,setPhotos] = useState([]);

  const formData = (e) => {
    setData(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    axios
    .get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apikey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => { setPhotos(response.data.photos.photo)
     console.log(data,'pppppp')})
    .catch(err => err)
  };

  return (
    <center>
      <div>
        <h2>Gallery App</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Name"
            onChange={formData}
            value={search}
          />
          <br />
          <button type="submit" class="btn btn-primary">Primary</button>
          <input type="submit"  value="Search" />
        </form>
      </div>
      {data.length>1?<Gallery data={data} / >:<p>No Data Found</p>}


    </center>
  );
}

export default App;
