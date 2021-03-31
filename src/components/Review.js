import React from 'react'

export default function Review( { review } ) {
    return (
        <div className='review'>
            <h1>{`Review Title: ${review.title}`}</h1>
            <p>{`${review.body}`}</p>
        </div>
    )
}
