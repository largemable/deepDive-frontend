import React, { useState, useEffect } from 'react';
import { useHistory, Route } from 'react-router-dom';
import Loading from './Loading';
import APIurl from '../config';
import AddUser from './AddUser';
import axios from 'axios';
import User from './User';

function Users ( { users, setUsers } ) {

    useEffect(() => {
        axios
        .get(`${APIurl}/users`)
        .then((res) => setUsers(res.data))
        .catch(console.error);
    }, [])

    if (!users) {
        return <Loading />
    }

    return (
        <div className='users-container'>
             <h1>Add User</h1>
            <AddUser />
            <h2>All Users</h2>
            {users.map((user) => {
                return <User user={user} key={user._id} />;
            })}
        </div>
	);
};

export default Users;