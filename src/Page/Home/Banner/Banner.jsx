import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner '>
            <div className=' flex justify-center items-center banner-info'>
                <div className='p-20 '>
                    <h2 className='text-5xl mb-5'>Fresh Grocery <br />
                        Shopping.
                    </h2>
                    <p className='text-sm'>
                        It is a long established fact that a reader will be <br /> the readable content of a page
                    </p>
                    <button className='btn btn-warning mt-2 px-10'>VIEW MORE</button>
                </div>
                <div className='pt-5'>
                    <img src="https://wordpress.iqonic.design/foodsto/wp-content/uploads/revslider/foodsto211/man.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;