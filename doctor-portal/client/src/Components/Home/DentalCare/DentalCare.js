import React from 'react';
import dentalCare from './../../../img/dentalCare.png'

const DentalCare = () => {
    return (
        <div id='dental-service' className="dental-care-section  my-5">
            <div className="container">
                <div className='row'>
                    <div className="col-md-5 offset-md-1">
                        <img src={dentalCare} alt="dentalCare" className='img-fluid'/>
                    </div>
                    <div className="col-md-6">
                        <h1 className='my-5 main-header'>Exceptional Dental <br/> Care, On Your Term</h1>
                        <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis autem vero aspernatur odit eveniet cupiditate officiis explicabo illo? Reprehenderit mollitia minus voluptates molestiae nostrum, animi iusto officiis aut exercitationem molestias. Minus optio, nisi soluta saepe aliquid dolores illum iure magnam. Quos impedit cum molestiae beatae! Suscipit ipsum accusantium ullam saepe.</p>
                        <button className='btn button text-white mt-5'>Learn More</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default DentalCare;