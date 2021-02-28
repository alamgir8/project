import React from 'react';


const UserCart = (props) => {
   
    const user = props.userCart;

    
    return (
        <div>
                <h1>Added User list :  {user.length}</h1>          

        </div>
    );
};

export default UserCart;