import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import LoginComponent from './styles/LoginComponent'
import { IoIosLogIn } from 'react-icons/io';
import {LogInBtn, StyledFormSection} from './styles/Login.elements'



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

<<<<<<< HEAD
    function checkLoginData() {
		users.forEach((user) => {
			if (user.name === loginData.name) {
				if (user.password === loginData.password) {
					console.log('Login successful.');
                    return setActiveUser(user);
                }
            }
        })
        return loginFailed();
    }
	
    function loginFailed() {
		console.log('Username or password not found!');
    }
	
	return (
			<>
				<StyledFormSection onSubmit={handleSubmit} >
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
					<LogInBtn className='button' id='button' type='submit'>
						<IoIosLogIn />
					</LogInBtn>
				<h2>{`Active User: ${activeUser?.name}`}</h2>
				</StyledFormSection>
			</>
=======
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
>>>>>>> main
	);
};

export default Login;
