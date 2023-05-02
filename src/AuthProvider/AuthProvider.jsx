import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app)

const provider =new GoogleAuthProvider()

const githubProvider=new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const singInGoogle=()=>{
        return signInWithPopup(auth,provider);
    }

    const signInGithub=()=>{
        return signInWithPopup(auth,githubProvider);
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser)
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
        signInGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;