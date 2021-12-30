import style from './user.module.css';
import React from "react";
import PropTypes from 'prop-types'

User.defaultProps = {
    key: 0,
    name: 'user does not have a name',
    website: 'user does not have a website',
    email: 'user does not have an email',
    phoneNumber: 'user does not have a phone number'
}

User.prototype = {
    key: PropTypes.number,
    name: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.number
}

function User({key, name, website, email, phoneNumber}) {
    return (
        <div key={key}>
            <div className={style.userContainer}>
                <div className={style.propertyContainer}>{name}</div>
                <div className={style.propertyContainer}>{website}</div>
                <div className={style.propertyContainer}>{email}</div>
                <div className={style.propertyContainer}>{phoneNumber}</div>
            </div>
        </div>
    );
}

export default User;
