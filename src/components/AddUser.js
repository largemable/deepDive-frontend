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

	const handleChange = (event) => {
		setNewUser({ ...newUser, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/users`, newUser)
            .then(() => {
                history.push(`/users`);
            })
			.catch(console.error);
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

		</div>
	);
};

export default AddUser;
