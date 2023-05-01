import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="flex-1 ">
                <a className="text-xl">FoodVillage</a>
                <div className='menubar'>
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/blog'>Blog</Link>
                 </div>
            </div>
            <div className="flex-none gap-2">
                
                <div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>

                </div>
            </div>
        </div>
    );
};

export default Header;