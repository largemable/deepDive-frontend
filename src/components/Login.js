import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import LoginComponent from './styles/LoginComponent'
import { IoIosLogIn } from 'react-icons/io';
import {LogInBtn, StyledFormSection} from './styles/Login.elements'



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
	);
};

export default Login;
