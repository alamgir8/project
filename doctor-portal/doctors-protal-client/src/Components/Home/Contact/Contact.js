
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className="contact-section my-4 p-4">
            <div className='text-center'>
            <h5 className='sub-header'>CONTACT US</h5>
            <h2 className='text-white main-header'>Always Connect with Us</h2>
            <Form className='p-5'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Enter Subject" />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder='Your Massage' />
                </Form.Group>
                <button className='btn button text-white px-5 py-2 mt-3'>Submit</button>
         </Form>
            
        </div>
        </div>
    );
};

export default Contact;