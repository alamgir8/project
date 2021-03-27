import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:4000/bookings?email='+loggedInUser.email, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                authorization : `Bearer ${sessionStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h2>Bookings</h2>
            {
                bookings.map(booking => <li>{booking.name} From {(new Date(booking.checkIn).toDateString('dd/MM/yyyy'))}  to {(new Date(booking.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Booking;