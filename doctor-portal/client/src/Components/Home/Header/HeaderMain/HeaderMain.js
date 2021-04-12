import React from 'react';
import { Link } from 'react-router-dom';
import chair from './../../../../img/chair.png';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
           <div className="header-section">
               <div className="container my-3">
               <div className='header-main d-flex align-items-center'>
                <div className="row">
                    <div className="col-md-4 offset-md-1 mb-3">
                        <h2>Your New Smile <br/> Start Here</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda expedita adipisci esse libero repellendus blanditiis.</p>
                        <Link to='/appointment'><button className='btn button text-white'>GET APPOINTMENT </button></Link> 
                    </div>
                    <div className="col-md-6 ">
                        <img src={chair} alt="chair" className='img-fluid'/>
                    </div>  
                </div> 
                </div>
               </div>
           </div>
      
    );
};

export default HeaderMain;