import '../App.css';

import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import APIurl from '../config';
import Reviews from './Reviews';
import { Router, Route, Switch } from 'react-router-dom';
import PostReview from './PostReview';

export default function AlbumDetails({ match }) {
	const [album, setAlbum] = useState(null);

	useEffect(() => {
		fetch(`${APIurl}/albums/${match.params.id}`)
			.then((res) => res.json())
			.then((res) => setAlbum(res))
			.catch(console.error);
	}, []);

	if (!album) {
		return <Loading />;
	}

	return (
		<div className='center'>
			<img className='album-details-image' src={album.artwork} alt={album.title} />

			<div className='album-title'>{album.title}</div>
			<div className='album-artist'>{album.artist}</div>
			<div className='album-genre'>{album.genre}</div>
			<div className='album-year'>{album.year}</div>

			<div>
				<Route
					exact
					path='/albums/:id'
					render={(routerProps) => (
						<PostReview
							album={album}
							setAlbum={setAlbum}
							match={routerProps.match}
						/>
					)}
				/>
				<Reviews album={album} setAlbum={setAlbum} />
			</div>
		</div>
	);
}
//#endregion
