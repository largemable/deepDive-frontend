import React, { useState } from 'react';
import '../App.css';
import APIurl from '../config';
import axios from 'axios';
import { AiOutlineEdit } from 'react-icons/ai';
export default function Review({ review, id, album, setAlbum }) {
	const initialState = {
		albumId: id,
		title: review.title,
		body: review.body,
		// reviewer: '',
	};
	const [controlsModal, setControlsModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [newReview, setNewReview] = useState(initialState);
	// review
	const openControls = () => {
		setControlsModal(true);
	};
	const closeControlsModal = () => {
		setControlsModal(false);
	};
	const editPost = () => {
		setEditModal(true);
	};
	const closeEditModal = () => {
		setEditModal(false);
	};
	const handleChange = (event) => {
		setNewReview({ ...newReview, [event.target.name]: event.target.value });
	};
	const handleDelete = () => {
		axios({
			url: `${APIurl}/reviews/${id}`,
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: newReview,
		})
			.then(() => {
				const filteredReviews = album.reviews.filter(
					(review) => review._id != id
					//warning for loose equality
				);
				setAlbum({ ...album, reviews: filteredReviews });
			})
			.catch(console.error);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			url: `${APIurl}/reviews/${id}`,
			method: 'PATCH',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: newReview,
		})
			.then(() => {
				const filteredReviews = album.reviews.filter(
					(review) => review._id != id
				);
				newReview._id = id;
				filteredReviews.push(newReview);
				setAlbum({ ...album, reviews: filteredReviews });
				closeEditModal();
			})
			.catch(console.error);
	};
	return (
		<div className='review'>
			<h2>{`${review.title}`}</h2>
			<p>{`${review.body}`}</p>
			<button onClick={openControls}>
				<AiOutlineEdit />
			</button>
			{controlsModal ? (
				<div className='controls'>
					<button onClick={handleDelete}>Delete</button>
					<button onClick={editPost}>Edit</button>
					<button onClick={closeControlsModal}>Close</button>
					{editModal ? (
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
									<textarea
										onChange={handleChange}
										name='body'
										value={newReview.body}
										className='comment'
									/>
									<br />
									<button type='submit'>Submit</button>
								</form>
								<button onClick={closeEditModal}>Close</button>
							</div>
						</div>
					) : null}
				</div>
			) : null}
		</div>
	);
}