import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@material-ui/lab/Rating';

export default function Home() {
    return (
        <div className='home'>
            <div className='home-title'>deepDive</div>
            <p>Post and review your favorite albums</p>
            <Link className='ghost-button' to='/albums'>Get Started</Link>
        </div>
    )
}
