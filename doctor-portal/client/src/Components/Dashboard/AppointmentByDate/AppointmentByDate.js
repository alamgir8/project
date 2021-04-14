import React from 'react';
import AppointmentShortList from './AppointmentShortList';
import './../Dashboard.css'

const AppointmentByDate = ({appointments, selectDate}) => {
    

    return (
        <div className='appointment-by-date-section'>
            <div className="card mt-5">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <h5 className='p-4 pb-5 sub-header'>Appointments</h5>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h5 className='text-secondary p-4 pb-5'>{selectDate}</h5>
                    </div>
                </div>
                {
                    appointments.length ? <AppointmentShortList appointments={appointments}/>
                    :
                    <div className="text-center p-3">
                        <h4>No appointment today</h4>
                    </div>
                }
            </div>
        </div>
    );
};

export default AppointmentByDate;