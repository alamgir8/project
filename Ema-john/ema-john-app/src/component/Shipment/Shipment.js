import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { userContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const [login, setLogin] = useContext(userContext);
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={login.name} ref={register({ required: true })} placeholder='input your name'/>
      {errors.name && <span className='error' >Name is required</span>}
      <input name="email" defaultValue={login.email} ref={register({ required: true })} placeholder='input your email'/>
      {errors.email && <span className='error' >Email is required</span>}
      <input name="address" ref={register({ required: true })} placeholder='input your address'/>
      {errors.address && <span className='error' >Address is required</span>}
      <input name="phone" ref={register({ required: true })} placeholder='input your phone number'/>
      {errors.phone && <span className='error' >Phone is required</span>}
     
      
      <input type="submit" />
    </form>
  );
};

export default Shipment;