import React, { useContext, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Button } from '@material-ui/core';
import { UserContext } from '../../App';
import Booking from '../Booking/Booking';

const Bookings = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState({
      checkIn : new Date(),
      checkOut : new Date()
    });

  const handleCheckInDate = (date) => {
    const newDates = {...selectedDate};
    newDates.checkIn = date;
    setSelectedDate(newDates);
  };
  const handleCheckOutDate = (date) => {
    const newDates = {...selectedDate};
    newDates.checkOut = date;
    setSelectedDate(newDates)
  }

  const handleBooking = () => {
    const newBooking = {...loggedInUser, ...selectedDate};
    fetch('http://localhost:4000/addBooking', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newBooking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }

    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="CheckIn Date"
            value={selectedDate.checkIn}
            onChange={handleCheckInDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="CheckOut Date"
            format="dd/MM/yyyy"
            value={selectedDate.checkOut}
            onChange={handleCheckOutDate}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
      
        </Grid>
            <Button onClick={handleBooking} variant="contained" color="primary">Bookings</Button>
        </MuiPickersUtilsProvider>
        <Booking/>
        </div>
    );
};

export default Bookings;