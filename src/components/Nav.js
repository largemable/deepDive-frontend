import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className='navbar-container'>
			<div className='navbar'>
				<Link to={'/'}>Home</Link>
				<Link to={'/albums'}>Explore</Link>
				<Link to={'/post'}>Post An Album</Link>
				<Link to={'/signin'}>Sign In</Link>
			</div>
		</div>

	);
}

export default Nav;
