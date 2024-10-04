import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'

function Contact() {
  return (
    <>
    <div className="w-screen flex flex-col items-center">
        <Navbar/>
        <div className="w-full h-[150px] bg-teal-500 flex justify-center items-center font-bold text-3xl">
            <h1 className="text-center items-center">CONTACT US</h1>
        </div>
        <div className="w-full h-[300px] justify-center text-center flex flex-col">
          <h2 className="text-2xl p-1">Jalan Mampang Prapatan Jakarta Selatan 12790</h2>
          <h2 className="text-2xl p-1">08818181818</h2>
          <h2 className="text-2xl p-1">info.barterstyle.com</h2>
        </div>

        <div className="w-[50%] p-[50px] text-center justify-center">
          <h3 className="text-2xl font-bold pb-5">Contact Us for More Information!</h3>
          <button className="border rounded-full bg-amber-400 hover:bg-amber-300 p-3 font-semibold">Contact Us</button>
        </div>
    </div>
    <Footer/>

    </>
  );
}

export default Contact;
