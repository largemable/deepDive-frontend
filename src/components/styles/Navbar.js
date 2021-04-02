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

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};
	return (
		<>
			<IconContext.Provider value={{ color: 'white' }}>
				<Nav>
					<NavLogo to='/'>
						<NavIcon /> Music Review
						<NavbarContainer></NavbarContainer>
					</NavLogo>
					<NavBarMenu onClick={handleClick}>
						{click ? <TiThMenuOutline /> : <TiThMenu />}
					</NavBarMenu>

					<NavMenu onClick={handleClick} click={click}>
						<NavItems>
							<NavLink to='/' onClick={handleClick} click={click}>
								Home{click ? <TiHomeOutline /> : <TiHome />}
							</NavLink>
						</NavItems>
						<NavItems>
							<NavLink to='/about' onClick={handleClick} click={click}>
								About{click ? <TiInfoLarge /> : <TiInfoLargeOutline />}
							</NavLink>
						</NavItems>
						<NavItems>
							<NavLink to='/albums'>
								Explore <FaSearch />
							</NavLink>
						</NavItems>
						<NavItems>
							<NavLink to='/albums'>
								Post an album!
								<FaPlusSquare />
							</NavLink>
						</NavItems>

						<NavItems>
							<NavLink to='/signin' onClick={handleClick} click={click}>
								Sign In{click ? <TiUser /> : <TiUserOutline />}
							</NavLink>
						</NavItems>
					</NavMenu>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
