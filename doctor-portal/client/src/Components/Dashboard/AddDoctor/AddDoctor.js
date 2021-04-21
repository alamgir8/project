import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Shared/Sidebar/Sidebar';

const AddDoctor = () => {
    const [imageURL, setImageURL] = useState();
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        const doctorInfo = {
            name: data.name,
            email: data.email,
            imageURL: imageURL
        }
        fetch('https://doctors-portal-official.herokuapp.com/addDoctor', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: JSON.stringify(doctorInfo)
        })
        .then(res => {
            alert('Doctor added successfully !')
        })
    }


    const handleImageUpload = (e) => {
      
        const imageData = new FormData();
        imageData.set('key', '12b535c0bab20335db20c56b41e1120a');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            const url = res.data.data.display_url;
            setImageURL(url)
           
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='add-doctor-section'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar/>
                    </div>
                    <div className="col-md-9">
                        <h5 className='py-5 sub-header'>Add A Doctor Photo</h5>
                        <div className="card my-3 p-4">
                            <form className='p-3 bg-form' onSubmit={handleSubmit(onSubmit)}>
                                        <div className="mb-3">
                                            <label className="form-label h6">Photo</label>
                                            <input type="file" name='file' className="form-control" onChange={handleImageUpload} required />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label className="form-label h6">Doctor Name</label>
                                            <input type="text" name='name' className="form-control" placeholder='Name' {...register("name")} required/>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label h6" >Email</label>
                                            <input type="email" name='email' className="form-control"  placeholder='Email' {...register("email")} required/>
                                        </div>
                                       
                                        <div className="my-3 text-right">
                                            <button type="submit" className="btn text-white button">Add Doctor</button>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AddDoctor;