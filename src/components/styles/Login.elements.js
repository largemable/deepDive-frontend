import styled from 'styled-components';
import Button from '../../GlobalStyle';
import Container from '../../GlobalStyle';

export const LogInBtn = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px 16px;
	height: 100%;
	width: 100%;
	border: none;
	outline: none;

	${Button}
`;
