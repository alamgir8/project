import React from 'react';
import { Col, Form, Nav } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Admin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="container">
            <div className='row'>
                    <div className="col-12 col-lg-4 col-md-4">
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link>
                                <span className='mx-2'>
                                        <i className="bi bi-plus"></i>
                                </span>
                                    Add Product
                            </Nav.Link>
                            <Nav.Link>
                                <span className='mx-2'>
                                        <i className="bi bi-grid"></i>
                                </span>
                                    Manage Product
                            </Nav.Link>
                            <Nav.Link>
                                <span className='mx-2'>
                                        <i className="bi bi-pencil-square"></i> 
                                </span> 
                                    Edit Product
                            </Nav.Link>
                           
                        </Nav>
                    </div>
                <div className="col-12 col-lg-8 col-md-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Row>
                                        <Form.Group as={Col}>
                                        <Form.Label>Photo</Form.Label>
                                        <Form.Control type="file" name='photo' placeholder="Product photo" ref={register} required/>
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                        <Form.Label>Food Name</Form.Label>
                                        <Form.Control type="name" name='food-name' placeholder="Food name" ref={register} required />
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row>
                                        <Form.Group as={Col}>
                                        <Form.Label>Food Info</Form.Label>
                                        <Form.Control type="text" name='food-info' placeholder="Food description" ref={register} required/>
                                        </Form.Group>

                                        <Form.Group as={Col}>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" name='price' placeholder="Price" ref={register} required/>
                                        </Form.Group>
                                    </Form.Row> 
                                <button type='submit' className='btn btn-info'>AddProduct</button>
                            </form>
                </div>
             </div>
        </div>
    );
};

export default Admin;