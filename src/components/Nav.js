import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from '../components/styles/Navbar';

function Nav() {
	return (
		<>
			<Navbar>
				<Link to={'/'}>Home</Link>
				<Link to={'/albums'}>Explore</Link>
				<Link to={'/users'}>Users</Link>
				{/* <Link to={'/albums'}>Post An Album</Link> */}
				<Link to={'/about'}>About</Link>
			</Navbar>
		</>
	);
}

export default Nav;
