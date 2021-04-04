import '../App.css';
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import APIurl from '../config';
import Reviews from './Reviews';
import { Route } from 'react-router-dom';
import PostReview from './PostReview';

export default function AlbumDetails({ match }) {
	const [album, setAlbum] = useState(null);

	useEffect(() => {
		fetch(`${APIurl}/albums/${match.params.id}`)
			.then((res) => res.json())
			.then((res) => setAlbum(res))
			.catch(console.error);
	}, [match.params.id]);

	if (!album) {
		return <Loading />;
	}

	return (
		<div className='center'>
			<img src={album.artwork} alt={album.title} className='album-info-cover' />
			<div className='album-info'>
				<h1>{album.title}</h1>
				<h2>{album.artist}</h2>
				<h3>{album.genre}</h3>
				<h3>{album.year}</h3>
			</div>

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
