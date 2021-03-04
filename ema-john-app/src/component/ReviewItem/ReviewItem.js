import React from 'react';

const ReviewItem = (props) => {
    const { name, quantity} = props.product;
    return (
        <div>
            <h2>This is review items</h2>
            <h3>{name}</h3>
            <h3>{quantity}</h3>
        </div>
    );
};

export default ReviewItem;