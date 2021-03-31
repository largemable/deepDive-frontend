import React from 'react'
import Login from './Login';

export default function Home( { users, activeUser, setActiveUser } ) {
    return (
        <div>
            <h1>Login</h1>
            <Login users={users} activeUser={activeUser} setActiveUser={setActiveUser} />
        </div>
    )
}
