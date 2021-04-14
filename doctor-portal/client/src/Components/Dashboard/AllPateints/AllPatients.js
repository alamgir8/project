import React, { useEffect, useState } from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AllPatients = () => {
    const [appointment, setAppointment] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/appointments')
        .then(res => res.json())
        .then(data => setAppointment(data))
    }, [])
    return (
        <div className='all-patients-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                    <h5 className='py-5 sub-header'>Patients</h5>
                        <div className="card p-2">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th className='text-secondary text-center'>Sr No</th>
                                    <th className='text-secondary text-center'>Name</th>
                                    <th className='text-secondary text-center'>Gender</th>
                                    <th className='text-secondary text-center'>Age</th>
                                    <th className='text-secondary text-center'>Weight</th>
                                    <th className='text-secondary text-center'>Phone</th>
                                    <th className='text-secondary text-center'>Email</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   appointment.map((appoint, index) =>

                                <tr key={appoint._id}>
                                    <td className='h6 text-center'>{index + 1}</td>
                                    <td className='h6'>{appoint.name}</td>
                                    <td className='h6 text-center'>{appoint.gender}</td>
                                    <td className='h6 text-center'>{appoint.age}</td>
                                    <td className='h6 text-center'>{appoint.weight}</td>
                                    <td className='h6 text-center'>{appoint.phone}</td>
                                    <td className='h6 ms-3'>{appoint.email}</td>
                                </tr>
                                )
                               }                                 
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AllPatients;