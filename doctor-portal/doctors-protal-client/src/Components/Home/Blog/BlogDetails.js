import React from 'react';
import { Card } from 'react-bootstrap';

const BlogDetails = (props) => {
    const {name, img, date, title, info} = props.blog;
    return (
        <div className="col-md-4">
            <Card className='p-2'>
            <Card.Body>
            <div className="row pt-3">
                     <div className="d-flex align-items-center justify-content-center m-auto">
                        <div className="col-md-5 col-sm-5">
                            <img src={img} alt="patient" className='img-fluid w-75'/>
                        </div>
                        <div className="col-md-7 col-sm-7">
                            <h6>{name}</h6>
                            <p className='text-secondary'>{date}</p>
                        </div>
                     </div>
                </div>
                <Card.Text>
                   <h5 className='py-4'>
                        {title}
                   </h5>
                   <p>{info}</p>
                </Card.Text>
                 
            </Card.Body>
            </Card>
        </div>
    );
};

export default BlogDetails;