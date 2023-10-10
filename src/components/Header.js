import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';

const Header = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const user = useSelector(store => store.user)
   const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
   }
   useEffect(() => {
  const unsubscribe  =  onAuthStateChanged(auth, (user) => {
      if (user) {
       
        const {uid,displayName,email,photoURL} = auth.currentUser
          dispatch(addUser({uid:uid , displayName : displayName, email:email , photoURL: photoURL}))
          navigate("/browse")
      } else {
       dispatch(removeUser());
        navigate("/")
      }
    });

      //unsubscribe when components unmounts
    return () => unsubscribe();
  },[])
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen  flex justify-between'>
        <img className='w-40 cursor-pointer' src = {LOGO} alt='logo'/>
    { user && <div className='flex p-2 gap-3'>
      <img className='w-12 h-12' src =   {USER_ICON}
 alt='userIcon' />
      <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
     </div>}
    </div>
    
  )

}

export default Header