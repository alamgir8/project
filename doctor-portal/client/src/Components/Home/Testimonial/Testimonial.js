import React from 'react';
import firstPatient from './../../../img/Ellipse 1.png';
import secondPatient from './../../../img/Ellipse 2.png';
import thirdPatient from './../../../img/Ellipse 3.png'
import TestimonialDetails from './TestimonialDetails';

const testimonialData = [
    {
        id: 1,
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias sint itaque quas ipsa illo vel voluptas laudantium cupiditate quod?",
        img: firstPatient,
        name: 'Hasan',
        from: 'Mirpur'
    },
    {
        id: 2,
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias sint itaque quas ipsa illo vel voluptas laudantium cupiditate quod?",
        img: secondPatient,
        name: 'Sahara',
        from: 'Pabna'
    },
    {
        id: 3,
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta molestias sint itaque quas ipsa illo vel voluptas laudantium cupiditate quod?",
        img: thirdPatient,
        name: 'Motiya',
        from: 'Savar'
    }
]
const Testimonial = () => {
    return (
        <div className='testimonial-section my-4'>
            <div className="container">
                <div>
                    <h5 className='sub-header'>TESTIMONIAL</h5>
                    <h2 className='main-header'>What's our patient says</h2>
                </div>
                <div className='row my-5'>
                    {
                        testimonialData.map(testimonial => <TestimonialDetails testimonial={testimonial} key={testimonial.id}></TestimonialDetails>)
                    }
                </div>
            </div>           
        </div>
    );
};

export default Testimonial;