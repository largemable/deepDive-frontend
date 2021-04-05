import React from 'react';
import { Link } from 'react-router-dom';
export default function Card( { album } ) {

	if (!album) {
		return null;
	}

	return (
		<div className='card'>
			 <Link to={`albums/${album._id}`} key={album._id}>

				<div className='card-image-container'>
					<img className='card-image' src={album.artwork} alt={album.name} />
				</div>

				<div className='card-details'>
					<p className='card-album-title'>{album.title}</p>
					<p className='card-album-artist'>{album.artist}</p>
					<p className='card-album-year'>{album.year}</p>
				</div>
			</Link>
		</div>
	);
}
