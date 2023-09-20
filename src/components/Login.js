import React, { useState } from 'react'
import Header from './Header'

export const Login = () => {
    const  [isSignIn , setIsSignIn] = useState(true)
    const toggleSignInForm = () => {
       setIsSignIn(!isSignIn)
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src =  "https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"/> 
        </div>
        <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up" }</h1>
            {!isSignIn &&<input type='text' placeholder='Full Name' className='p-4 my-2 w-full bg-gray-700' />}
            <input type='text' placeholder='Email Address' className='p-4 my-2 w-full bg-gray-700' />
            <input type='password' placeholder='Password' className='p-4 my-2 w-full bg-gray-700' />
            <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignIn ? "New to Netflix? Sign Up now" : "Already Registered? Sign In Now."}</p>
        </form>
    </div>
  )
}
