import React, { useState, useEffect } from 'react';
import APIurl from '../config'
import Card from './Card'


// Shows all albums in a browse/gallery type fashion
const Albums = () => {

    const [albums, setAlbums] = useState([])

    // useEffect(() => {
    //     axios
    //     .get(`${APIurl}/albums`)
    //     .then((res) => setAlbums(res.data))
    //     .catch(console.error);
    // }, [])

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