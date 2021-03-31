import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const Login = ( { users, activeUser, setActiveUser } ) => {
    
    const initialState = {
        name: '',
        password: ''
    }

    const [loginData, setLoginData] = useState(initialState);

	const handleChange = (event) => {
		 setLoginData({ ...loginData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
        event.preventDefault();
        checkLoginData();

	};

    function checkLoginData() {
        users.forEach((user) => {
            if (user.name == loginData.name) {
                if (user.password == loginData.password) {
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
		<div>
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
				<button className='button' id='button' type='submit'>
					Login
				</button>
			</form>
            <h2>{`Active User: ${activeUser?.name}`}</h2>

		</div>
	);
};

export default Login;
