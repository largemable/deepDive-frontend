import React from 'react'
import { Link } from 'react-router-dom';
// import SimpleRating from './SimpleRating';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/core/styles';

export default function Home() {
    return (
        <div className='center'>
            <h1>Music Blog and Rating App</h1>
            <p>Post, review, and rate your favorite albums!</p>
            <Link className='ghost-button' to='/albums'>Get Started</Link>
        
        </div>
    )
}
