import React from 'react';
import doctor from './../../../img/doctor.png';
import './Appointment.css'

const AppointMent = () => {
    return (
        <div className='appointment-section'>
            <div className="container">
                <div className="row">
                    <div className="d-flex align-items-center justify-content-center">
                    <div className="col-md-5">
                        <img src={doctor} alt="doctor" className='img-fluid'/>

                    </div>
                    <div className="col-md-7 col-sm-12 text-white">
                        <h5 className='my-3 sub-header'>APPOINTMENT</h5>
                        <h1>Make an appointment <br/> today</h1>
                        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident rerum nostrum dicta optio mollitia aliquid.</p>
                        <button className='btn button text-white my-2'>Learn More</button>
                    </div>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default AppointMent;