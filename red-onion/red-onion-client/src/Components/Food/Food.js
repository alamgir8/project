
import React from 'react';
import { Card } from 'react-bootstrap';
import AddShoppingCartOutlinedIcon from '@material-ui/icons/AddShoppingCartOutlined';

const Food = (props) => {
    const {image, title, body, price} = props.food;
    return (
        <div className='col-12 col-lg-4 col-md-4'>
            <Card className='my-3'>
                <Card.Img src={image} alt="" className='img-fluid w-50 m-auto pt-3'/>
                <Card.Body>
                    <Card.Title className='text-center'>{title}</Card.Title>
                    <Card.Text className='text-center'>
                    {body}
                    </Card.Text>
                    <h4 className='text-center'>{price}</h4>
                </Card.Body>
               <button className='btn btn-primary w-75 m-auto'> <AddShoppingCartOutlinedIcon/></button>
            </Card>
         
        </div>
    );
};

export default Food;