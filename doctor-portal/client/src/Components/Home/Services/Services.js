import React from 'react';
import './Services.css'
import fluoride from './../../../img/fluoride.png';
import cavity from './../../../img/cavity.png';
import whitening from './../../../img/whitening.png'
import ServiceDetails from './../ServiceDetails/ServiceDetails';



const servicesData = [
    {   
        id: 1,
        title: 'Fluoride Treatment',
        img: fluoride
    },
    {
        id: 2,
        title: 'Cavity Filling',
        img: cavity
    },
    {
        id: 3,
        title: 'Teeth Whitening',
        img: whitening
    }
]
const Services = () => {
    return (
        <div id='service' className='service-section'>
           <div className="container">
            <div className='my-5 text-center'>
                    <h5 className='sub-header'>OUR SERVICES</h5>
                    <h2 className='main-header'>Service We Provide</h2>
                </div>
                <div className="row">
                    {
                        servicesData.map(service => <ServiceDetails service={service} key={service.id}></ServiceDetails>)
                    }
                </div>
           </div>
        </div>
    );
};

export default Services;