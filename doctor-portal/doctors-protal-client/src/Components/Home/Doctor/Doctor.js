import React from 'react';
import drOne from './../../../img/dr.png';
import drTwo from './../../../img/dr.png';
import drThree from './../../../img/dr.png'

const Doctor = () => {
    return (
        <div className="doctor-section">
            <div className='py-5'>
                <h3 className='text-center sub-header'>Our Doctors</h3>
            <div className='row py-5 text-center'>
            <div className="col-md-4">
                <img src={drOne} alt="doctor one" className='img-fluid w-75'/>
                <h6 className='pt-3'>Dr. Kevin</h6>
                <p>+0088018382121</p>
            </div>
            <div className="col-md-4">
                <img src={drTwo} alt="doctor one" className='img-fluid w-75'/>
                <h6 className='pt-3'>Dr. Kooper</h6>
                <p>+0088011352121</p>
            </div>
            <div className="col-md-4">
                <img src={drThree} alt="doctor one" className='img-fluid w-75'/>
                <h6 className='pt-3'>Dr. Sherlok</h6>
                <p>+0088019532121</p>
            </div>
            
            </div>
            </div>
        </div>
    );
};

export default Doctor;