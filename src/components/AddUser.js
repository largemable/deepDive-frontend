import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const AddUser = () => {
	const initialState = {
		name: ''
	};

	const history = useHistory();
	const [newUser, setNewUser] = useState(initialState);
	const [signUpError, setSignUpError]  = useState(false);

	const handleChange = (event) => {
		setNewUser({ ...newUser, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/users/signup`, newUser)
            .then(() => {
                history.push(`/signin`);
            })
			.catch(() => setSignUpError(true));
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='add-user-form'>
				<input
					onChange={handleChange}
					name='name'
					value={newUser.name}
					placeholder='username'
				/>
				<input
					onChange={handleChange}
                    type='password'
					name='password'
					value={newUser.password}
					placeholder='password'
				/>
				<button className='button' id='button' type='submit'>
					Add User
				</button>
			</form>
			{signUpError && <p style="color:red ">Username already exists</p>}

		</div>
	);
};

export default AddUser;
