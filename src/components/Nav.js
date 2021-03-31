import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { NavbarContainer, NavLogo, NavIcon } from './styles/Navbar.elements';

import Navbar from '../components/styles/Navbar';

function Nav() {
	return (
		<>
			<p>
				<Navbar></Navbar>
			</p>
		</>
	);
}

export default Nav;
