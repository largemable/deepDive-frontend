import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
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
					<h2 className=''>{album.title}</h2>
					<p className=''>{album.artist}</p>
					<p className=''>{album.year}</p>
				</div>
			</Link>
		</div>
	);
}
