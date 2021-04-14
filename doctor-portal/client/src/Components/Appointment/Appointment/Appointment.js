import React, { useState } from 'react';
import Navigation from './../../Shared/Navigation/Navigation';
import Footer from './../../Shared/Footer/Footer'
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import Booking from '../Booking/Booking';

const Appointment = () => {
    const [selectDate, setSelectDate] = useState(new Date().toLocaleDateString())
    const handleDateChange = date => {
        const newDate = date.toLocaleString().split(',')[0]
        setSelectDate(newDate)      
        
    }
    
   console.log(selectDate);
//     const event = new Date();

// console.log(event.toLocaleString());

    return (
        <div>
            <Navigation></Navigation>
             <AppointmentHeader handleDateChange={handleDateChange}/>
             <Booking selectDate={selectDate}/>
            <Footer/>
        </div>
    );
};

export default Appointment;