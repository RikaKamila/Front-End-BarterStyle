import React, {useState} from 'react'
import { FcGoogle } from "react-icons/fc";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";

function Login() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleGoogleLogin = () => {
    const auth = getAuth()
    const provider = new GoogleAuthProvider ()
    signInWithPopup(auth, provider)
    .then ((result) =>{
      console.info(result.user)
      localStorage.setItem('user',JSON.stringify(result.user))
      navigate ('/ProfilUser')
   
    })
    .catch ((err) => {
      console.error(err)
    }) 

  }

  const handleClosePopup = () => {
    setIsOpen(false); // Hide the popup when close icon is clicked
  };

  return (
    isOpen && (
<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div className="fixed inset-0 bg-teal-200 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
  <div className="fixed inset-0 z-10 w-screen overflow-y-auto ">
    <div className=" flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg">
        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
          <div className="sm:flex sm:items-start">
            </div>
            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
              <div className="mt-2">
                <button type="button" className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleClosePopup}><IoCloseSharp className="text-2xl font-bold"/></button>
                <h1 className="text-2xl font-bold py-5 text-center p-5 pb-5">Login BarterStyle</h1>
                <div onClick={handleGoogleLogin} className="flex border-2 border-gray-300 p-3 rounded-md mt-4 cursor-pointer"> 
                    <FcGoogle className="w-6 h-6"/>
                    <button type="button" className="font-semibold ml-12" >Continue with Google</button>
                </div>
                <div className="text-center text-sm mt-10">
                    <h1 className="mt-4">All your personal details are safe with us.</h1>
                    <h1 className="mt-4">If you continue, you are accepting <span className="text-blue-600">BarterStyle Terms and Conditions and Privacy Policy</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
)
} 
export default Login

