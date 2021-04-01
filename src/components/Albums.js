import React, { useState, useEffect } from 'react';
import APIurl from '../config'
import '../App.css';
import Card from './Card'

const Albums = () => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`${APIurl}/albums`)
        .then((res) => res.json())
        .then((res) => setAlbums(res))
        .catch(console.error);
    }, [])

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