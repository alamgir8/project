import React, { useState } from 'react';
import AppointmentForm from '../AppointmentHeader/AppointmentForm';

const BookingDetails = ({book, date}) => {
    const {title, time, space} = book;
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
   
    function closeModal(){
      setIsOpen(false);
    }

    return (
        <div className='col-md-4'>
            <div className="card text-center p-5 my-3">
                <h5 className='sub-header'>{title}</h5>
                <h6>{time}</h6>
                <p className='text-secondary'>{space}</p>
                <button onClick={openModal} className='btn button text-white'>BOOK APPOINTMENT</button>
                <AppointmentForm book={book} modalIsOpen={modalIsOpen} closeModal={closeModal} date={date}/>
             </div>          
        </div>
    );
};

export default BookingDetails;