import React from 'react'
import '../App.css';
import Review from './Review'


export default function Reviews( { album } ) {
    return (
        <div>
            <h1>Reviews</h1>
            <div className='reviews-container'>
                {album.reviews.map((review) => {
                    return <Review review={review} key={review._id} />;
                })}
            </div>
        </div>
		);
}
