import React from 'react';
import AppointMent from '../AppointMent/AppointMent';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctor from '../Doctor/Doctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header/Header';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';



const Home = () => {
    return (
        <div className='container'>
           <Header/>
           <Services/>
           <DentalCare/>
           <AppointMent/>
           <Testimonial/>
           <Blog/>
           <Doctor/>
           <Contact/>
           <Footer/>
        </div>
    );
};

export default Home;