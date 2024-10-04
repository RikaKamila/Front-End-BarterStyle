import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {getAuth,signOut} from "firebase/auth"


function ProfilUser() {
     //State User
  const [user,setUser] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  //Logout Function
  const handleLogout = () => {
    const auth = getAuth ()
    signOut (auth)
    .then(result => {
      localStorage.clear()
      navigate('/')
  })
  .catch((err) => {
    console.error (error)
  })
}

return (
    <div>
        <Navbar/>
        <div className=" flex flex-col items-center w-screen h-screen py-5 p-5 ">
          <div className="w-[50%] flex flex-col rounded-lg gap-4 bg-teal-500 p-[50px] justify-center items-center">
            <h1 className="text-4xl font-bold">Welcome To BarterStyle</h1>
            <img src={user?.photoURL} clasName=" w-[200px] h-[100] rounded-full object-cover"/>
            <h3 className="text-2xl font-bold">{user?.displayName}</h3>
            <h3 className="text-2xl">{user?.email}</h3>
          <div className="flex gap-5 p-5">
            <Link to={'/'} className='h-[50px] bg-black text-white rounded-lg w-[200px] items-center text-center items-center text-xl  py-2'>Mulai Barter</Link>
            <button className='h-[50px] bg-black text-white rounded-lg w-[200px] py-2 text-xl' onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <Footer/>
  </div> 

  );
}

export default ProfilUser;
