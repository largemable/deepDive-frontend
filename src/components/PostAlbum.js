import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import APIurl from '../config';
import { IconContext } from 'react-icons/lib';


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
		setAlbum({ ...album, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios({
			url: `${APIurl}/albums`,
			method: 'POST',
			headers: {
				Authorization: `Bearer ${localStorage.getItem('token')}`,
			},
			data: album,
		})
			.then(() => {
				history.push('/');
			})
			.catch(console.error);
	};

	return (
		<div className='center'>
			<h1>Post New Album</h1>
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
					placeholder='Url for .jpg image'
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
