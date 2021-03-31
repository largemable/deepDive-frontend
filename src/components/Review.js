import React from 'react';
import '../App.css';
import APIurl from '../config';
import axios from 'axios';

export default function Review({ review, id, setAlbum }) {
	const handleDelete = () => {
		// Write your DELETE fetch() or axios() request here

		axios
			.delete(`${APIurl}/reviews/${id}`, review)
			.then(() => {
				// history.push('/');
			})
			.catch(console.error);
	};
	return (
		<div className='review'>
			<h2>{`${review.title}`}</h2>
			<p>{`${review.body}`}</p>
			<div className='controls'>
				<button onClick={handleDelete}>Delete</button>
				{/* <button onClick={handleEdit}>Edit</button> */}
			</div>
		</div>
	);
}
