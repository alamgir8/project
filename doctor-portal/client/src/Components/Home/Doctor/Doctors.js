import React from 'react';
import './Doctor.css'


const Doctors = (props) => {
   
    const {name, email, imageURL} = props.doctor;
    return (
      
            <div className="col-md-4 text-center">
                    <img src={imageURL} alt="doctor one" className='img-fluid w-50'/>
                    <h6 className='pt-3'>{name}</h6>
                    <p>{email}</p>
            </div>
      
    );
};

export default Doctors;