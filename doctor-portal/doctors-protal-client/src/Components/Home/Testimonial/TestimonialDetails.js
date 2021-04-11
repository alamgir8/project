import React from 'react';
import { Card } from 'react-bootstrap';

const TestimonialDetails = (props) => {
    const {quote, img, name, from} = props.testimonial;
    return (
        <div className="col-md-4">
            <Card className='p-2'>
            <Card.Body>
                <Card.Text>
                {quote}
                </Card.Text>
                 <div className="row pt-3">
                     <div className="d-flex align-items-center justify-content-center m-auto">
                        <div className="col-md-7 col-sm-7">
                            <img src={img} alt="patient" className='img-fluid w-75'/>
                        </div>
                        <div className="col-md-5 col-sm-5">
                            <h6>{name}</h6>
                            <p>{from}</p>
                        </div>
                     </div>
                </div>
            </Card.Body>
            </Card>
        </div>
    );
};

export default TestimonialDetails;