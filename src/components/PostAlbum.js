import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';

const PostAlbum = () => {
	const initialState = {
		title: '',
		artist: '',
		artwork: '',
		genre: '',
		year: '',
	};

	const history = useHistory();
	const [album, setAlbum] = useState(initialState);

	const handleChange = (event) => {
		// event.preventDefault();
		setAlbum({ ...album, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Write your POST fetch() or axios() request here
		axios
			.post(`${APIurl}/albums`, album)
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='create-form'>
				<label htmlFor='title'>Album Title: </label>
				<input
					onChange={handleChange}
					name='title'
					value={album.title}
					placeholder='Album'
				/>
				<label htmlFor='artist'>Artist: </label>
				<input
					onChange={handleChange}
					name='artist'
					value={album.artist}
					placeholder='Artist'
				/>
				<label htmlFor='artwork'>Artwork: </label>
				<input
					onChange={handleChange}
					name='artwork'
					value={album.artwork}
					placeholder='Artwork'
				/>
				<label htmlFor='genre'>Genre: </label>
				<input
					onChange={handleChange}
					name='genre'
					value={album.genre}
					placeholder='Genre'
				/>
				<label htmlFor='year'>Release Year: </label>
				<input
					onChange={handleChange}
					name='year'
					value={album.year}
					placeholder='Year'
				/>
				<button id='button' type='submit'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default PostAlbum;
