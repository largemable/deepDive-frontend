import styled from 'styled-components';
import {Link} from 'react-router-dom'
import Container from '../../GlobalStyle';
import { ImHeadphones } from 'react-icons/im';

export const Nav = styled.nav`
	background: black;
	color: white;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 999;
`;

export const NavbarContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
	height: 80px;
	color: white;

	${Container}
`;

export const NavLogo = styled(Link)`
	color: white;
	justify-self: flex-start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	display: flex;
	align-items: center;
`;

export const NavIcon = styled(ImHeadphones)`
margin-right: 0;
display: flex;
justify-self: flex-start;

`;
