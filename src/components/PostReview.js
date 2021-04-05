import React, { useState } from 'react';
import axios from 'axios';
import APIurl from '../config';
import { SignUpBtn, ReviewBtn } from './styles/Login.elements';

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
			<ReviewBtn onClick={postReview}>Review this album</ReviewBtn>
			{modal ? (
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
						placeholder='Comment'
						className='review-body-input'
					/>
					<SignUpBtn id='SignUpBtn' type='submit'>
						Submit
					</SignUpBtn>
					<SignUpBtn onClick={closeModal}>Close</SignUpBtn>
				</form>
			) : null}
		</div>
	);
};
export default PostReview;
