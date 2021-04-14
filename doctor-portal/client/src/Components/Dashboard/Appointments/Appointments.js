import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';

const Appointments = () => {

    const [appointments, setAppointments] = useState([]);

    const [selectDate, setSelectDate] = useState(new Date().toLocaleDateString())
    const handleDateChange = date => {
        const newDate = date.toLocaleString().split(',')[0]
        setSelectDate(newDate)      
        
    }

    useEffect( () => {
        fetch('http://localhost:8000/appointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({date: selectDate})
        })
        .then(res=>res.json())
        .then(data =>setAppointments(data))

    }, [selectDate])

    return (
        <div className='dashboard-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-4 pt-5 bg-light-blue">
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}/>
                    </div>
                    <div className="col-md-5 bg-light-blue">
                        <AppointmentByDate appointments={appointments} selectDate={selectDate}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Appointments;