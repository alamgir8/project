import React from 'react';


const BlogDetails = (props) => {
    const {name, img, date, title, info} = props.blog;
    return (
        <div className="col-md-4">
            <div className='p-3 card'>
          
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
             
                   <h5 className='py-4'>
                        {title}
                   </h5>
                   <p>{info}</p>
              
                 
           
            </div>
        </div>
    );
};

export default BlogDetails;