import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Footer() {

  return (

<footer className="w-full bg-teal-500 shadow text-center items-center justify-center rounded p-10 text-xl p-5 py-5">
  <nav className="grid grid-flow-col justify-center gap-[20px] py-5">
    <Link to = {'/About'} className="hover:underline">About Us</Link>
    <Link to = {'/Contact'} className="hover:underline">Contact</Link>
    <Link to= {'/'} className="hover:underline">Katalog</Link>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-[20px] text-center justify-center py-5 text-2xl">
        <GrInstagram />
        <FaFacebook />
        <FaTwitter />
        <FaYoutube />
    </div>
  </nav>
  <aside>
    <p className="py-5 font-bold">Copyright © {new Date().getFullYear()} - All right reserved by BarterStyle</p>
  </aside>
</footer>

  )
}

export default Footer
