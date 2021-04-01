import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='center'>
            <h1>Music Blog and Rating App</h1>
            <p>Post, review, and rate your favorite albums!</p>
            <Link className='ghost-button' to='/albums'>Get Started</Link>
        </div>
    )
}
