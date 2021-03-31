import React from 'react'

export default function( { user } ) {
    return (
        <div className='user'>
            <p>{`${user.name} / ${user.password}`}</p>
        </div>
    )
}
