import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import LoginComponent from './styles/LoginComponent'
import { IoIosLogIn } from 'react-icons/io';
import {LogInBtn, StyledFormSection, SignUpBtn} from './styles/Login.elements'

const Login = ( { activeUser, setActiveUser } ) => {
    
    const initialState = {
        name: '',
        password: ''
    }
	const history = useHistory();
	const [loginData, setLoginData] = useState(initialState);
	const [loginError, setLoginError] = useState(false);

	const handleChange = (event) => {
		setLoginData({ ...loginData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
		.post(`${APIurl}/users/signin`, loginData)
		.then(({ data }) => {
			localStorage.setItem('token', data.token);
			localStorage.setItem('expiration', Date.now() + 360000);   
			setActiveUser(loginData.name);
			console.log(activeUser);
			history.push('/');
		})
		.catch(() => setLoginError(true));
	};

	// useEffect(() => {
	// 	checkForSessionExpired();
	// }, [])

	// any time we make a request using a token,
	// compare Date.now() to localStorage.get('expiration')
	// function checkForSessionExpired() {
	// 	if (Date.now() > localStorage.getItem('expiration')) {
	// 		console.log('session expired');
	// 		history.push('/signin');
	// 	}
	// }

	return (
		<div className='center'>
			<h1>Sign In</h1>
			<StyledFormSection onSubmit={handleSubmit} className='login-form'>
				<input
					onChange={handleChange}
					name='name'
					value={loginData.name}
					placeholder='username'
				/>
				<input
					onChange={handleChange}
					type='password'
					name='password'
					value={loginData.password}
					placeholder='password'
				/>
				<LogInBtn className='' id='button' type='submit'>
					Sign In
				</LogInBtn>
			</StyledFormSection>
			{loginError && <p>Username or password not found</p>}
			<p>No account yet?</p>
			<Link to={'/users'}>
				<SignUpBtn>Sign Up</SignUpBtn>
			</Link>
		</div>
	);
};

export default Login;
