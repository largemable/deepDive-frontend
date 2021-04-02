import styled, { createGlobalStyle } from 'styled-components';
import NavBar from './components/styles/Navbar';

const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}

`;

export const Container = styled.div`
	z-index: 1;
	width: 100%;
	max-width: 1300px;
	margin-right: auto;
	margin-left: auto;
	padding-right: 50px;
	padding-left: 50px;

	@media screen and (max-width: 991px) {
		padding-right: 30px;
		padding-left: 30px;
	}
`;

export const Button = styled.button`
	border-radius: 5px;
	background: ${({ primary }) => (primary ? '#3366ff' : '#ff3300')};
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	color: white;
	font-size: ${({ fontbig }) => (fontbig ? '20px' : '16px')};
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		transition: all 0.3s ease-out;
		background: white;
		background: ${({ primary }) => (primary ? '#ff3300' : '#3366ff')};
	}

	@media screen and (max-width: 960px) {
		width: 100%;
	}
`;

export default GlobalStyle;
