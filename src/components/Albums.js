import React, { useState, useEffect } from 'react';
import APIurl from '../config';
import Card from './Card';
import Loading from './Loading';

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`${APIurl}/albums`)
        .then((res) => res.json())
        .then((res) => setAlbums(res))
        .catch(console.error);
    }, [])

    if (!albums) {
        return <Loading />
    }

    return (
        <div className='albums-wrapper'>
			<div className='albums-container'>
				{albums.map((album) => {
					return <Card album={album} key={album._id} />;
				})}
			</div>
        </div>
    );
};

export default Albums;