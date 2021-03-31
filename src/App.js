import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import styled from 'styled-components'
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Users from './components/Users';
import PostAlbum from './components/PostAlbum';
import PostReview from './components/PostReview';
import GlobalStyle from './GlobalStyle'


function App() {

	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState(null);


	return (
		<div>
			<nav>
				<Route path='/' component={Nav} />
			</nav>
			<main>
				<Switch>
					<Route exact path='/' render={() => <Home users={users} activeUser={activeUser} setActiveUser={setActiveUser}/> } />

					<Route exact path='/users' render={() => <Users users={users} setUsers={setUsers} activeUser={activeUser} setActiveUser={setActiveUser}/> } />
					
					<Route exact path='/about' component={About} />
					{/* <Route exact path='/' component={Home} /> */}
					<Route exact path='/albums' component={() => <Albums />} />
					<Route
						exact
						path='/albums/:id'
						render={(routerProps) => <AlbumDetails match={routerProps.match} />}
					/>

					
					{/* <Route exact path='/albums/create' render={() => <PostAlbum /> } /> */}
					{/* <PostAlbum /> */}
				</Switch>
			</main>
		</div>
	);
}

export default App;
