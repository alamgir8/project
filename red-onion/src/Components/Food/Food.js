
import React from 'react';
import { Card } from 'react-bootstrap';

const Food = (props) => {
    const {image, title, body, price} = props.food;
    return (
        <div className='col-12 col-lg-4 col-md-4'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} alt=""/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                    {body}
                    </Card.Text>
                    <p>{price}</p>
                </Card.Body>
            </Card>
         
        </div>
    );
};

export default Food;