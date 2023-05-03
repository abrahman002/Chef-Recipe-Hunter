import React from 'react';
import './Work.css'
import { FaSignInAlt,FaTruckMoving,FaUtensils} from 'react-icons/fa';

const Work = () => {
    return (
        <div className='p-10 work'>
            <h1 className='text-3xl text-center'>How To Works?</h1>
            <div className='flex justify-center gap-10 mt-10 work'>
                <div>
                  <div className='mb-2 text-3xl'>
                  <FaSignInAlt/>
                  </div>
                    Sign In & Choose <br /> From Our Weekly Menu
                </div>

                <div>
                  <div className='mb-2 text-3xl'>
                  <FaTruckMoving/>
                  </div>
                    We Will Deliver Your <br /> Purchase
                </div>
                
                <div>
                  <div className='mb-2 text-3xl'>
                  <FaUtensils/>
                  </div>
                   Enjoy Our Tasty <br /> Organic Food!
                </div>
            </div>
        </div>
    );
};

export default Work;