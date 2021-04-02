import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Users from './components/Users';
import PostAlbum from './components/PostAlbum';
import Login from './components/Login';

//Styles
import { IconContext } from 'react-icons/lib';
import { TiMail } from "react-icons/ti";
import { SiGithub } from 'react-icons/si';
import GlobalStyle from './GlobalStyle';
import {StyledFooter, StyledFooterUl, StyledFooterLi} from './components/styles/Navbar.elements';








function App() {
	const [users, setUsers] = useState([]);
	const [activeUser, setActiveUser] = useState(null);

	return (
		<div>
			<GlobalStyle />
			<Nav />
			<main style={{ marginBottom: '-80px', minHeight: '100%' }}>
				<Switch>
					<Route
						exact
						path='/'
						render={() => (
							<Home
								users={users}
								activeUser={activeUser}
								setActiveUser={setActiveUser}
							/>
						)}
					/>

					<Route
						exact
						path='/users'
						render={() => (
							<Users
								users={users}
								setUsers={setUsers}
								activeUser={activeUser}
								setActiveUser={setActiveUser}
							/>
						)}
					/>

					<Route exact path='/about' component={About} />
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
			<footer>
				<StyledFooter>
					<p> Contributors : </p>
					<StyledFooterUl>
						<StyledFooterLi>
							 Mable{' '}
							<a href='mailto:mable.palombogmail.com'>
								<TiMail />
							</a>
							<a href='https://https://www.github.com/StephtheITSloth'>
								<SiGithub />
							</a>
						</StyledFooterLi>
						<StyledFooterLi>
							Ford{' '}
							<a href='mailto:fordpickert@gmail.com'>
								<TiMail />
							</a>
							<a href='https://https://www.github.com/StephtheITSloth'>
								<SiGithub />
							</a>
						</StyledFooterLi>
						<StyledFooterLi>
							Jordan{' '}
							<a href='mailto:mrjordantanner@gmail.com'>
								<TiMail />
							</a>
							<a href='https://https://www.github.com/StephtheITSloth'>
								<SiGithub />
							</a>
						</StyledFooterLi>
						<StyledFooterLi>
							Stephane
							<a href='mailto:stephan.karim.sk@gmail.com'>
								<TiMail />
							</a>
							<a href='https://https://www.github.com/StephtheITSloth'>
								<SiGithub />
							</a>
						</StyledFooterLi>
					</StyledFooterUl>
				</StyledFooter>
			</footer>
		</div>
	);
}

export default App;
