dev
// import { useState, useEffect } from 'react'
import { Route } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums';
import PostAlbum from './components/PostAlbum';
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

			{/* Displays all albums  */}
			<Albums />
			<PostAlbum postAlbum={PostAlbum} />
		</div>
	);

import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums'
import AlbumDetails from './components/AlbumDetails'
import Home from './components/Home'


function App() {

  return (
    <div>
        <Switch>
          <Route exact path='/' component={() => <Home /> } />
          <Route exact path='/albums' component={() => <Albums /> } />
          <Route exact path='/albums/:id' render={(routerProps) => <AlbumDetails match={routerProps.match}/> } />
        </Switch> 
      
    </div>
  );
main
}

export default App;
