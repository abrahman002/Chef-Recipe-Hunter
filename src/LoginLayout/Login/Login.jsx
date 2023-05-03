import React, { useContext, useState } from 'react';
import { Link, Navigate,useLocation,useNavigate  } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle,FaGithub} from 'react-icons/fa';


const Login = () => {
   const [error,setError]=useState('')
   const [success,setSuccess]=useState('');
   const Navigate=useNavigate()

   const location =useLocation()
//    console.log(location)
   const from=location.state?.from?.pathname || '/';
//    console.log(from)

   const {signIn,singInGoogle,signInGithub}=useContext(AuthContext);

    const handleLogin=event=>{
        // console.log(event.target);
        event.preventDefault();
        
        setError('')
        setSuccess('')

        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        // password and email condition
       

        signIn(email,password)
        .then(result=>{
            const userlogged=result.user;
            console.log(userlogged);
            setSuccess("Successfully Login ")
            Navigate(from)
            form.reset();
        })
        .catch(error=>{
            console.log(error);
            setError(error.message)
            form.reset();
        })
    }

    const googleSignIn=()=>{
        singInGoogle()
        .then(result=>{
           console.log(result.user)
           Navigate(from)
          
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const signUpGithub=()=>{
        signInGithub()
        .then(result=>{
            console.log(result.user)
            Navigate(from)

        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-3">Login now!</h1>
                    <button className="btn btn-outline mb-5" onClick={googleSignIn}><FaGoogle /> <span className='ml-2'>Login With Google</span></button> <br />
                    <button className="btn btn-outline" onClick={signUpGithub}><FaGithub /><span className='ml-2'>Login With Github</span></button>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <p className="label-text-alt link link-hover">New to FoodVillage?<Link to='/register'>Register</Link></p>
                            </label>
                            {/* Error and success message */}
                            <label className="label">
                                <p className="text-success">
                                        {success}
                                </p>
                            </label>
                            <label className="label">
                                <p className="text-warning">
                                        {error}
                                </p>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;