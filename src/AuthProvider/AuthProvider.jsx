import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const provider =new GoogleAuthProvider()

const githubProvider=new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true);


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider);
    }

    const signInGithub=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider);
    }

    const profileUpdate = ({ name, photoUrl}) => {
        updateProfile(auth.currentUser, { displayName: name, photoURL: photoUrl })
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser);
            setLoading(false);
        })
        return()=>{
            unSubscribe
        }
    },[])
    const authInfo = {
        user,
        signIn,
        createUser,
        singInGoogle,
        logOut,
        signInGithub,
        profileUpdate,
        loading,
        auth,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;