import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const Login = () => {
    
    const initialState = {
        name: '',
        password: ''
    }
	const history = useHistory();
    const [loginData, setLoginData] = useState(initialState);
	const [loginError, setLoginError]  = useState(false);

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
			<form onSubmit={handleSubmit} className='login-form'>
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
				<button className='' id='button' type='submit'>
					Sign In
				</button>
			</form>
			{loginError && <p>Username or password not found</p>}
			<p>No account yet?</p><Link to={'/users'}>Sign Up</Link>


		</div>
	);
};

export default Login;
