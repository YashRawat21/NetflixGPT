import React, { useEffect } from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, USER_ICON } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const user = useSelector(store => store.user)
const showGptSearch = useSelector(store => store.gpt.showGptSearch)
 const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
 }

 const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
 }
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
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen  flex flex-col md:flex-row  justify-between'>
        <img className='w-40 cursor-pointer mx-auto md:mx-0' src = {LOGO} alt='logo'/>
    { user && <div className='flex p-2 gap-3'>
      
      { showGptSearch && <select className='p-2 rounded-lg m-2 bg-gray-900 text-white ' onChange={handleLanguageChange}>
        <option value= "eng">English</option>
        <option value= "hindi">Hindi</option>
        <option value="spanish">Spanish</option>

      </select>}
      <button className='px-4 py-2 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearch}>{showGptSearch ? "HomePage" : "GPT Search"}</button>
      <img className='w-12 h-12' src =   {USER_ICON}
 alt='userIcon' />
      <button className='font-bold text-white' onClick={handleSignOut}>Sign Out</button>
     </div>}
    </div>
    
  )

}

export default Header