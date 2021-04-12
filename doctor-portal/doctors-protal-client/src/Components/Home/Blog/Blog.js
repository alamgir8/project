import React from 'react';
import firstDoctor from './../../../img/Ellipse 1.png';
import secondDoctor from './../../../img/Ellipse 1.png';
import thirdDoctor from './../../../img/Ellipse 1.png'
import BlogDetails from './BlogDetails';


const blogData = [
    {
        id: 1,
        name: 'Dr. Kevin',
        img: firstDoctor,
        date: '11 Jan 2021',
        title: 'Check al least a doctor in a year for your teeth',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repellat incidunt, sint odit ut officia perspiciatis ipsam quia doloremque tempore?'
    },
    {
        id: 2,
        name: 'Dr. Kooper',
        img: secondDoctor,
        date: '10 Dec 2020',
        title: '2 times of brush in a day can make you healthy',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repellat incidunt, sint odit ut officia perspiciatis ipsam quia doloremque tempore?'
    },
    {
        id: 3,
        name: 'Dr. Sherlook',
        img: thirdDoctor,
        date: '14 April 2021',
        title: 'The tooth cancer is talking a challenge',
        info: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum repellat incidunt, sint odit ut officia perspiciatis ipsam quia doloremque tempore?'
    }
]
const Blog = () => {
    return (
        <div id='blog' className='blog-section my-5'>
            <div className="container">
                <div className='py-4'>
                    <h5 className='sub-header'>OUR BLOG</h5>
                    <h2 className='main-header'>From Our News</h2>
                </div>
                <div className='row'>
                    {
                        blogData.map(blog => <BlogDetails blog={blog} key={blog.id}></BlogDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blog;