// import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Albums from './components/Albums'
// import Nav from './components/Nav'
// import APIurl from './config'
// import axios from 'axios'

function App() {

  // useEffect(() => {
  //   axios
  //   .get(`${APIurl}/albums`)
  //   .then((res) => setAlbums(res.data))
  //   .catch(console.error);
  // }, [])

  return (
    <div>
        {/* <Nav/> */}
        {/* <Route path="/" exact component={ <Albums /> }/> */}
      <Albums />
    </div>
  );
}

export default App;
