// Main show route
import '../App.css';
import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import APIurl from '../config'
import Reviews from './Reviews'

// Show route for each individual asset
export default function AlbumDetails( { match } ) {

	const [album, setAlbum] = useState(null);

    useEffect(() => {
        fetch(`${APIurl}/albums/${match.params.id}`)
        .then((res) => res.json())
        .then((res) => setAlbum(res))
        .catch(console.error);
    }, [])

    // If data is not yet loaded, show loading component
	if (!album) {
		return (
			<Loading />
		);
	}

	return (
		//#region [Blue]
			<div className='album-details-container'>

                    <img src={album.artwork} alt={album.title} />
                    <h1>{album.title}</h1>
                    <h2>{album.artist}</h2>
                    <h3>{album.genre}</h3>
                    <h3>{album.year}</h3>

                <div className='reviews-container'>
                    <Reviews album={album}/>
                </div>  
			</div>
	);
}
//#endregion
