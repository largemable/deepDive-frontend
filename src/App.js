import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Users from './components/Users';
import PostAlbum from './components/PostAlbum';
import Login from './components/Login';

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
					<Route exact path='/' render={() => <Home /> } />

					<Route exact path='/signin' render={() => <Login users={users} activeUser={activeUser} setActiveUser={setActiveUser}/> } />

					<Route exact path='/users' render={() => <Users users={users} setUsers={setUsers} activeUser={activeUser} setActiveUser={setActiveUser}/> } />
					
					<Route exact path='/about' component={About} />
					<Route exact path='/albums' component={() => <Albums />} />
					<Route
						exact
						path='/albums/:id'
						render={(routerProps) => <AlbumDetails match={routerProps.match} />}
					/>

					<Route exact path='/post' render={() => <PostAlbum /> } />
				</Switch>
			</main>
		</div>
	);
}

export default App;
