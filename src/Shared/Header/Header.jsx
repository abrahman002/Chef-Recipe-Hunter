import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ActiveLink from '../../ActiveLink/ActiveLink';


const Header = () => {
    const { auth , logOut} = useContext(AuthContext);
    
    const logOutUser=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className='banner'>
            <div className="navbar bg-base-100 container mx-auto banner ">
                <div className="flex-1 ">
                    <a className="text-xl title">FoodVillage</a>
                    <div className='menubar  flex'>
                        <Link to='/'>Home</Link>
                        <ActiveLink to='/about'>About</ActiveLink>
                        <ActiveLink to='/contact'>Contact</ActiveLink>
                        <ActiveLink to='/blog'>Blog</ActiveLink>
                    </div>
                </div>
                <div className="flex-none">

                    <div className='flex gap-5'>
                        {
                            auth.currentUser && <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={auth.currentUser?.photoURL} />
                                </div>
                            </label>
                        }

                        {auth.currentUser ?
                            <button className="btn btn-success" onClick={logOutUser}>Logout</button> :
                            <button className="btn btn-warning"><Link to='/login'>Login</Link></button>
                        }


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;