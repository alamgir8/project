import React from 'react';
import {  } from "./User.css";

const User = (props) => {

    const addUserHandler = props.addUserHandler;
   
    const {image, id, name, gender, language, job, works, email, country, city} = props.user;
    return (
        <div className='container'>
            <div className='user-image'>
                <img src={image} alt=""/>
            </div>
            <div className='user-details'>
                <h4>ID : {id}</h4>
                <h4>Name : {name}</h4>
                <h4>Gender : {gender}</h4>
                <h4>Language : {language}</h4>
                <h4>Job : {job}</h4>
                <h4>Comh4any : {works}</h4>
                <h4>Email : {email}</h4>
                <h4>Country : {country}</h4>
                <h4>City : {city}</h4>
                <button onClick={() => addUserHandler(props.user)}>Add Country</button>
            </div>
        </div>
    );
};

export default User;