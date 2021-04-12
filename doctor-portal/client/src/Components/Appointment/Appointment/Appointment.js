import React, { useState } from 'react';
import Navigation from './../../Shared/Navigation/Navigation';
import Footer from './../../Shared/Footer/Footer'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Booking from '../Booking/Booking';

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date())
    const handleDateChange = date => {
        console.log(date);
        setSelectDate(date)
    }
    return (
        <div>
            <Navigation></Navigation>
             <AppointmentHeader handleDateChange={handleDateChange}/>
             <Booking date={selectDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;