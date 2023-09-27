import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate'
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import {  updateProfile } from "firebase/auth";
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BG_IMG } from '../utils/constants';

export const Login = () => {
    const  [isSignIn , setIsSignIn] = useState(true)
    const [errorMessage , setIsErrorMessage] = useState(null)
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const handleButtonClick = () => {
      const message =  checkValidateData(email.current.value ,password.current.value)
      setIsErrorMessage(message)
      
      if(message) return ;
     
          if(!isSignIn) {
         
            createUserWithEmailAndPassword(auth,email.current.value ,password.current.value)
              .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value , photoURL:   "https://pbs.twimg.com/profile_images/1678792762853040128/zAZMas9T_400x400.jpg"
                  
                }).then(() => {
                  // Profile updated!
                  const {uid,displayName,email,photoURL} = user
                  dispatch(addUser({uid:uid , displayName : displayName, email:email , photoURL: photoURL}))
                  
                  // ...
                }).catch((error) => {
                  // An error occurred
                  // ...
                  setIsErrorMessage(error.message)
                });
          
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setIsErrorMessage(errorCode + "-" + errorMessage)
                // ..
              });
          }
          else{
            signInWithEmailAndPassword(auth,email.current.value ,password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
            
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setIsErrorMessage(errorCode + "-" + errorMessage)
            });
          
          }
      
    }
    const toggleSignInForm = () => {
       setIsSignIn(!isSignIn)
    }
   
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src =  {BG_IMG}/> 
        </div>
        <form onSubmit = {(e) => e.preventDefault()}className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up" }</h1>
            {!isSignIn &&<input ref={name} type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />}
            <input ref={email} type='email' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
        
            <input ref = {password} type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
            <p className='text-red-600 font-bold text-lg py-2'>{errorMessage}</p>
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}
