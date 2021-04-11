import React from 'react';
import './InfoCard.css'

const InfoCard = (props) => {
    const {title, description, icon, background} = props.info;
    return (
        <div className='col-md-4 info-card mb-2'>
            <div className={`d-flex align-items-center justify-content-center info-${background} p-3 text-white`}>
                <div className='info-icon px-4'>
                     <img src={icon} alt="icon" className='text-white'/>
                </div>
                <div>
                    <h5>{title}</h5>
                    <small>{description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;