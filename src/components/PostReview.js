import React, { useState } from 'react';
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
	const [modal, setModal] = useState(false);
	const [review, setReview] = useState(initialState);

	const postReview = () => {
		setModal(true);
	};
	const closeModal = () => {
		setModal(false);
	};

	const handleChange = (event) => {
		setReview({ ...review, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			url: `${APIurl}/reviews`,
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: review,
		})
			.then(({ data }) => {
				setAlbum(data.album);
				closeModal();
			})
			.catch(console.error);
	};

	return (
		<div className='post-review'>
			<div className='review-header'>Review this album</div>
			<form onSubmit={handleSubmit} className='create-form'>
				<input
					onChange={handleChange}
					name='title'
					value={review.title}
					placeholder='Title'
				/>
				<textarea
					onChange={handleChange}
					name='body'
					value={review.body}
					placeholder='Body'
					className='review-body-input'
				/>
				<button id='button' type='submit'>
					Submit
				</button>
			</form>

		</div>
	);
};

export default PostReview;
