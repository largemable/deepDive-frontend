import React from 'react';
import Navbar from './styles/Navbar';

function Nav( { activeUser, setActiveUser } ) {
	return (
		<>
		<Navbar activeUser={activeUser} setActiveUser={setActiveUser}/>
		</>
	);
}

export default Nav;
