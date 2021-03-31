// Clickable link that represents an album in the Albums component 
import React from 'react';
import { Link } from 'react-router-dom';
export default function Card( { album } ) {
	// Display component that represents the album while in Browse/Albums view

	if (!album) {
		return null;
	}

	return (
		//#region [Blue]
		<div className='card'>
			 <Link to={`albums/${album._id}`} key={album._id}>

				<div className='card-image-container'>
					<img className='card-image' src={album.artwork} alt={album.name} />
				</div>

				<div className='card-details'>
					<h2 className='name'>{album.name}</h2>
					<p className='username'>{album.creator}</p>
					<p className='id'>{album.id}</p>
				</div>
			</Link>
		</div>
	);
}
//#endregion
