import React, { useEffect, useState } from 'react';
import Doctors from './Doctors';

const Doctor = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
  
    return (
        <div className="doctor-section">
            <div className="container">
                <div className='py-5'>
                    <h3 className='text-center sub-header'>Our Doctors</h3>
                </div>
                <div className='row'>
                    {
                        doctors.map(doctor => <Doctors doctor={doctor} key={doctor._id}></Doctors>)
                    }           
                </div>
            </div>
        </div>
    );
};

export default Doctor;