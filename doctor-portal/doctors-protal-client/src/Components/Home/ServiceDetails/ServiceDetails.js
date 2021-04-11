import React from 'react';

const ServiceDetails = (props) => {
    const {title, img} = props.service;

    return (
        <div className='col-md-4 text-center'>
            <img src={img} alt="" className='img-fluid h-25 my-3'/>
            <h6 className='my-4'>{title}</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, cupiditate.</p>
        </div>
    );
};

export default ServiceDetails;