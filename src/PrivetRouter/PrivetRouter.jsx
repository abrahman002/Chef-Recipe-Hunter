import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouter = ({Children}) => {
   const {user,loading}=useContext(AuthContext)
   const location =useLocation()

   if(loading){
    return (
        <progress className="progress w-56"></progress>
    )
   }
   if(user){
    return Children;
   }
   return <Navigate to='/login' state={{from:location}}></Navigate>
};

export default PrivetRouter;