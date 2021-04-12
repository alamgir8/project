import React from 'react';
import BookingDetails from './BookingDetails';


const bookingData = [
    {
        id: 1,
        title: 'Teeth Orthodontics',
        time: '8:00-9:00 Am',
        space: '10 SPACE AVAILABLE'
    },
    {
        id: 2,
        title: 'Cosmetic Dentistry',
        time: '8:30-10:30 Am',
        space: '8 SPACE AVAILABLE'
    },
    {
        id: 3,
        title: 'Teeth Cleaning',
        time: '11:00-12:00 Am',
        space: '5 SPACE AVAILABLE'
    },
    {
        id: 4,
        title: 'Cavity Protection',
        time: '1:00-2:00 Pm',
        space: '11 SPACE AVAILABLE'
    },
    {
        id: 5,
        title: 'Teeth Cleaning',
        time: '2:30-5:00 Am',
        space: '15 SPACE AVAILABLE'
    },
    {
        id: 6,
        title: 'Teeth Orthodontics',
        time: '5:30-8:00 Pm',
        space: '12 SPACE AVAILABLE'
    }
]
const Booking = ({date}) => {
    return (
        <div className='booking-section'>
            <div className="container">
                <div className='text-center sub-header my-5'>
                    <h2>Available Appointments on {date.toDateString()}</h2>
                </div>
                <div className="row">
                    {
                        bookingData.map(book => <BookingDetails book={book} key={book.id} date={date}></BookingDetails>)
                    }
                </div>
            </div>            
        </div>
    );
};

export default Booking;