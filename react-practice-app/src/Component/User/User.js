import React from 'react';
import {  } from "./User.css";

const User = (props) => {
    console.log(props);

    const {image, id, name, gender, language, job, works, email, country, city} = props.user;
    return (
        <div className='container'>
            <div className='user-image'>
                <img src={image} alt=""/>
            </div>
            <div className='user-details'>
                <p>ID : {id}</p>
                <p>Name : {name}</p>
                <p>Gender : {gender}</p>
                <p>Language : {language}</p>
                <p>Job : {job}</p>
                <p>Company : {works}</p>
                <p>Email : {email}</p>
                <p>Country : {country}</p>
                <p>City : {city}</p>
                <button onClick={() => props.addUserHandler(props)}>Add This User</button>
            </div>
        </div>
    );
};

export default User;