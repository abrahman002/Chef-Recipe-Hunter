import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { FaGoogle,FaGithub} from 'react-icons/fa';

const Register = () => {
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')

    const {createUser,singInGoogle,signInGithub, profileUpdate } = useContext(AuthContext);


    const googleSignIn=()=>{
        singInGoogle()
        .then(result=>{
           console.log(result.user)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const signUpGithub=()=>{
        signInGithub()
        .then(result=>{
            console.log(result.user)

        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleRegister = event => {

        event.preventDefault();
         setError('')
         setSuccess('')

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name,photo,email,password);
        // password condition
        if(!/.{6,}/.test(password)){
            setError('Minimum eight in Six');
            return;
        }

        createUser(email,password)
        .then(result=>{
            profileUpdate({ name, photoUrl: photo })
            setSuccess('Successfully Register')
            form.reset();
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
        })

    }
    return (
        <div className="hero man-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold mb-5">Register now!</h1>
                    <button className="btn btn-outline mb-5" onClick={googleSignIn}><FaGoogle /> <span className='ml-2'>Login With Google</span></button> <br />
                    <button className="btn btn-outline" onClick={signUpGithub}><FaGithub /><span className='ml-2'>Login With Github</span></button>
                </div>
                <form onSubmit={handleRegister}>
                    <div className="card flex-shrink-0 w-screen  max-w-sm shadow-xl bg-base-100 " >
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="Photo url" name='photo' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
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
                                <p className="label-text-alt link link-hover">Already Have An Account?<Link to='/login'>Login</Link></p>
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

export default Register;