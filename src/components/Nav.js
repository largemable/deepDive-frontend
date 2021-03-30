import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className='nav-bar'>
			<Link to={'/'}>Home</Link>
			<Link to={'/albums'}>Explore</Link>
			{/* <Link to={'/albums'}>Post An Album</Link> */}
			<Link to={'/about'}>About</Link>
		</div>
	);
}

export default Nav;
