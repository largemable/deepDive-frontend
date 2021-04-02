import styled, { createGlobalStyle } from 'styled-components';
import Space from './bckgroundImg/Fresh-Turboscent.jpg';
const GlobalStyle = createGlobalStyle`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'GloriaHallelujah','Sacramento', Tahoma, Geneva, Verdana, sans-serif;
	font-size: 20px;
	
}

body {
	text-align: center;
	height: 100%;
	margin-left: 5px;
	background-image: url(${Space});
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

export default GlobalStyle;