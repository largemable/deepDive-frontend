import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Container from '../../GlobalStyle';
import { ImHeadphones } from 'react-icons/im';
import { Mirage} from '../../bckgroundImg/Mirage.jpg'


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
	margin-right: 0.5;
	display: flex;
	justify-self: flex-start;
`;

export const NavBarMenu = styled.div`
	display: none;

	@media screen and (max-width: 960px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate() (-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;

		left: ${({ click }) => (click ? 0 : '-100%')};
		opacity: 0.9;
		transition: all 0.5s ease;
		background: gray;
	}
`;

export const NavItems = styled.li`
	height: 80px;
	color: white;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #4b59f7;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLink = styled(Link)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #4b59f7;
			transition: all 0.3s ease;
		}
	}
`;

export const StyledFooter = styled(Nav)`
	position: fixed;
	bottom: 0;
	left: 0;
	top: auto;
	width: 100%;
	height: 80px;

	

`;
 export const StyledFooterUl = styled.ul`
	color: white;
	text-decoration: none;
 `;

 export const StyledFooterLi = styled.li`
	color: white;
	display: inline-block;
	
 `;