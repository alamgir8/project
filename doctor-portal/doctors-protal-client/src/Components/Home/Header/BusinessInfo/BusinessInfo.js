import React from 'react';
import InfoCard from './InfoCard';
import clock from './../../../../img/clock.svg';
import location from './../../../../img/geo-alt.svg';
import phone from './../../../../img/telephone.svg';
import './InfoCard.css'



const infoData = [
    {
        id: 1,
        title: 'Opening Hour',
        description: 'Our Dental services open all 7 days',
        icon: clock,
        background: 'primary'
    },
    {
        id: 2,
        title: 'Location',
        description: 'North Tower, Uttara, Dhaka-1230',
        icon: location,
        background: 'second'
    },
    {
        id: 3,
        title: 'Contact Us Now',
        description: '01957930032',
        icon: phone,
        background: 'primary'
      
    }
]
const BusinessInfo = () => {
    return (
        <div className="info-section">
            <div className="w-75 m-auto">
                <div className='row'>
                {
                    infoData.map(info => <InfoCard info={info} key={info.id}></InfoCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;