import React from 'react';
import './../Dashboard.css'

const AppointmentShortList = ({appointments}) => {
    return (
        <div className='appointment-shortlist-section'>
            <div className="p-3">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th className='text-secondary'>Name</th>
                        <th className='text-secondary text-center'>Service</th>
                        <th className='text-secondary text-center'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map(appointment => 
                            <tr key={appointment._id}>
                                <td className='h6'>{appointment.name}</td>
                                <td className='h6 text-center'>{appointment.service}</td>
                                <select className="form-control bg-select">
                                        <option value="Not-Visited">Not Visited</option>
                                        <option value="Visited">Visited</option>
                                </select>
                            </tr>
                            )
                        }
                    
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AppointmentShortList;