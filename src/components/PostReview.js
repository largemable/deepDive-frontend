import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import { IconContext } from 'react-icons/lib';
import {IoIosCheckmarkCircleOutline} from "react-icons/io";



const PostReview = ({ match, setAlbum }) => {
	
	const initialState = {
		albumId: match.params.id,
		title: '',
		body: '',
		// reviewer: '',
	};

	const [review, setReview] = useState(initialState);

	const handleChange = (event) => {
		setReview({ ...review, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			url: `${APIurl}/reviews`,
			method: 'POST',
			headers: {
			  'Authorization': `Bearer ${localStorage.getItem('token')}`
			},
			data: review
		  })
			.then(({ data }) => {
				setAlbum(data.album);
			})
			.catch(console.error);
	};

	return (
		<div>
			<h2>Review this album</h2>
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
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default PostReview;
