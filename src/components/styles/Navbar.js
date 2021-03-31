import React from 'react';
import styled from 'styled-components';
import { NavbarContainer, Nav, NavLogo, NavIcon } from './Navbar.elements';

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavIcon /> Music Review
					<NavLogo to='/'>
				<NavbarContainer>
						Review App
				</NavbarContainer>
					</NavLogo>
			</Nav>
		</>
	);
};

export default Navbar;
