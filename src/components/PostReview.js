import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const PostReview = ({ match, setAlbum }) => {
	const initialState = {
		albumId: match.params.id,
		title: '',
		body: '',
		// reviewer: '',
	};

	const history = useHistory();
	const [review, setReview] = useState(initialState);

	const handleChange = (event) => {
		setReview({ ...review, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post(`${APIurl}/reviews`, review)
			.then((res) => {
				// console.log(res);
				setAlbum(res.data.album);
			})
			.then(() => {
				history.push(`/albums/${match.params.id}`);
			})
			.catch(console.error);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='create-form'>
				<label htmlFor='title'>Title: </label>
				<input
					onChange={handleChange}
					name='title'
					value={review.title}
					placeholder='Title'
				/>
				<label htmlFor='artist'>Body: </label>
				<input
					onChange={handleChange}
					name='body'
					value={review.body}
					placeholder='Body'
				/>
				{/* <label htmlFor='activeUser'>User: </label>
				<input
					onChange={handleChange}
					name='activeUser'
					value={review.activeUser}
					placeholder='User'
				/> */}
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default PostReview;
