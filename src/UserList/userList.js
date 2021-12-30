import style from './userList.module.css';
import React, {useEffect} from "react";
import {useState} from 'react'
import axios from 'axios'



function UserList() {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users',)
        setUsers(response.data);
    }, [])
    return (
        <div className={style.UserContainer}>
            hi
        </div>
    );
}

export default UserList;
