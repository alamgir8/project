import React from 'react';


const UserCart = (props) => {
   
    const user = props.userCart;
    // const {id, name, gender, language, job, works, email, country, city} = user;
    
    console.log(user);
    
    return (
        <div>
                <h1>Added User list :  {user.length}</h1>
                {
                    user.map(ur => ur.name)
                }
                {/* <h4>ID : {id}</h4>
                <h4>Name : {name}</h4>
                <h4>Gender : {gender}</h4>
                <h4>Language : {language}</h4>
                <h4>Job : {job}</h4>
                <h4>Company : {works}</h4>
                <h4>Email : {email}</h4>
                <h4>Country : {country}</h4>
                <h4>City : {city}</h4> */}
           

        </div>
    );
};

export default UserCart;