import React from 'react';
import chair from './../../../img/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentHeader.css'

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div className='appointMent-section my-5'>
            <div className="container">
            <div className='d-flex align-items-center justify-content-center'>
                <div className="row">
                    <div className="col-md-5 offset-md-1 mb-4">
                        <h2 className='sub-header mb-3'>Appointment</h2>
                        <Calendar
                        onChange={handleDateChange}
                        value={new Date()}/>
                    </div>
                    <div className="col-md-6">
                        <img src={chair} alt="chair" className='img-fluid'/>
                    </div>  
                </div> 
            </div>

            </div>
           </div>
    );
};

export default AppointmentHeader;