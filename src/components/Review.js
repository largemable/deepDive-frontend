import React, { useState, useEffect } from 'react';
import '../App.css';
import APIurl from '../config';
import axios from 'axios';

export default function Review({ review, id }) {
	const initialState = {
		albumId: id,
		title: review.title,
		body: review.body,
		// reviewer: '',
	};

	const [modal, setModal] = useState(false);
	const [newReview, setNewReview] = useState(initialState);
	// review
	const editShowPage = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};
	const handleChange = (event) => {
		setNewReview({ ...newReview, [event.target.name]: event.target.value });
	};
	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here

		axios
			.delete(`${APIurl}/reviews/${id}`, review)
			.then(() => {
				// history.push('/');
			})
			.catch(console.error);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your PUT fetch() or axios() request here

		axios
			.patch(`${APIurl}/reviews/${id}`, newReview)
			.then(() => {})
			.catch(console.error);
	};

	return (
		<div className='review'>
			<h2>{`${review.title}`}</h2>
			<p>{`${review.body}`}</p>
			<div className='controls'>
				<button onClick={handleDelete}>Delete</button>
				<button onClick={editShowPage}>Edit</button>
				{modal ? (
					<div>
						<div>
							<h2>Edit this Review:</h2>
							<form onSubmit={handleSubmit}>
								<label htmlFor='title' />
								<input
									onChange={handleChange}
									name='title'
									value={newReview.title}
								/>
								<label htmlFor='body' />
								<input
									onChange={handleChange}
									name='body'
									value={newReview.body}
								/>
								<br />
								<button type='submit'>Submit</button>
							</form>
							<button onClick={closeModal}>Close</button>
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}
