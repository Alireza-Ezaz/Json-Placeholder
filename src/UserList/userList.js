import style from './userList.module.css';
import React, {useEffect} from "react";
import {useState} from 'react'
import axios from 'axios'
import User from "../User/user";
import loading from "../loading.gif"

let showLoading = true

function UserList() {
    const [users, setUsers] = useState([])

    useEffect(async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users',)
        showLoading = false
        setUsers(response.data);
    }, [])
    return (
        <div className={style.UserContainer}>

            {showLoading ? (
                <img src={loading}/>
            ) : (
                users.map((user) => {
                    return <User key={user.id} name={user.name} email={user.email} phoneNumber={user.phoneNumber}
                                 website={user.website}></User>
                })
            )}
        </div>
    );
}

export default UserList;
