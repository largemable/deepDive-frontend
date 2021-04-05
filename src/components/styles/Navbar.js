import React, { useState } from 'react';
import { IconContext } from 'react-icons/lib';
import {
	TiHome,
	TiHomeOutline,
	TiInfoLarge,
	TiInfoLargeOutline,
	TiUser,
	TiUserOutline,
} from 'react-icons/ti';
import { FaPlusSquare, FaSearch } from 'react-icons/fa';

import {
	NavbarContainer,
	Nav,
	NavLogo,
	NavIcon,
	NavBarMenu,
	NavMenu,
	NavLink,
	NavItems,
} from './Navbar.elements';
import { TiThMenuOutline, TiThMenu } from 'react-icons/ti';

const Navbar = ( { activeUser, setActiveUser } ) => {

	const [click, setClick] = useState(false);

	const handleClick = () => {
		setClick(!click);
	};

	const handleLogout = () => {
		localStorage.clear();
		setActiveUser(null);
	}


	return (
		<>
			<IconContext.Provider value={{ color: 'white' }}>
				<Nav>
					<NavLogo to='/'>
						<NavIcon /> deepDive
						<NavbarContainer></NavbarContainer>
					</NavLogo>
					<NavBarMenu onClick={handleClick}>
						{click ? <TiThMenuOutline /> : <TiThMenu />}
					</NavBarMenu>

					<NavMenu onClick={handleClick} click={click}>
						{/* <NavItems>
							<NavLink to='/' onClick={handleClick} click={click}>
								{click ? <TiHomeOutline /> : <TiHome />} Home
							</NavLink>
						</NavItems> */}
						<NavItems>
							<NavLink to='/albums'>
							<FaSearch /> Explore 
							</NavLink>
						</NavItems>
						<NavItems>
							<NavLink to='/post'>
								<FaPlusSquare /> Post an album!
							</NavLink>
						</NavItems>

							<NavItems>
								<NavLink to='/signin' onClick={handleClick} click={click}>
									{click ? <TiUser /> : <TiUserOutline />} Sign In
								</NavLink>
							</NavItems>

							<NavItems>
								<NavLink to='/signin' onClick={handleLogout} click={click}>
									Log out
								</NavLink>
							</NavItems>
						


					</NavMenu>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
