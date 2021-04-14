import React from 'react';
import {useForm} from "react-hook-form";
import Modal from 'react-modal';
Modal.setAppElement('#root');


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : '50%',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const AppointmentForm = ({book, modalIsOpen, closeModal, selectDate}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      data.service = book.title;
      data.date = selectDate.toLocaleString();
      data.created = new Date().toLocaleString();

      fetch('http://localhost:8000/addAppointment', {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(success => {
          if (success) {
              closeModal();
              alert('Your appointment created successfully!')
          }
      })
      .catch(err => {
          console.log(err);
      })
   
  };
 


    return (
        <div className='appoint-form-section'>
               <div className="container">
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
            
                        <div className="text-center ">
                            <h4 className='sub-header'>{book.title}</h4>
                            <p className='text-secondary'>{selectDate}</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-4">
                           
                                <div className="py-2">
                                    <input className="form-control" type="text" placeholder="Your Name" {...register("name", {required: true, maxLength: 100})} />
                                    {errors.name && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className="py-2">
                                    <input className="form-control" type="tel" placeholder="Mobile number" {...register("phone", {required: true, minLength: 11, maxLength: 14})} />
                                    {errors.phone && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className="py-2">
                                    <input className="form-control" type="text" placeholder="Email" {...register("email", {required: true, pattern: /^\S+@\S+$/i})} />
                                    {errors.email && <span className='text-danger'>This field is required</span>}
                                </div>
                                <div className="py-2 row">
                                    <div className="col-md-4">
                                    <select className="form-control lg" {...register("gender", { required: true })}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    {errors.gender && <span className='text-danger'>This field is required</span>}
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control" type="number" placeholder="Age" {...register("age", {required: true})} />
                                        {errors.age && <span className='text-danger'>This field is required</span>}
                                    </div>
                                    <div className="col-md-4">
                                        <input className="form-control" type="number" placeholder="Weight" {...register("weight", {required: true})} />
                                        {errors.weight && <span className='text-danger'>This field is required</span>}
                                    </div>
                                </div>
                                <div className="py-3 text-right">
                                    <button className='btn button text-white'>SEND</button>
                                </div>
                            </div>                      

                        
                    </form>
                </Modal>
            </div>           
        </div>
    );
};

export default AppointmentForm;