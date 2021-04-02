import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import LoginStyle from './styles/LoginStyle'

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
		<div>

			
		</div>
	);
};

export default Login;
