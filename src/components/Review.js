import React from 'react'
import '../App.css';

export default function Review( { review } ) {
    return (
        <div className='review'>
            <h1>{`Review by ${review.reviewer}`}</h1>
            
        </div>
    )
}
