import React, { useState, useEffect } from 'react';
import APIurl from '../config'
import axios from 'axios'

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
        <div>
            {albums.map(album => 
            <div>
                <h1>{album.title}</h1>
                <h2>{album.artist}</h2>
                <h3>{album.genre}</h3>
                <h3>{album.year}</h3>
            </div>
            )}

        </div>
    );
};

export default Albums;