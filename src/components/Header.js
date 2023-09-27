import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
        <img className='w-40 cursor-pointer' src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
    { user && <div className='flex p-2 gap-3'>
      <img className='w-12 h-12' src =   "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
 alt='userIcon' />
      <button className='font-bold text-white' onClick={handleSignOut}>(Sign Out)</button>
     </div>}
    </div>
    
  )

}

export default Header