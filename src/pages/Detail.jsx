import React, {useState} from 'react';
import { MdFavorite } from "react-icons/md";
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Komen from '../components/Komen';
import {useLocation} from 'react-router-dom'

function Detail() {

const location = useLocation()
const product = location?.state?.product;


  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center justify-center w-[80%]"> {/* Full width container */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <img src={product?.image} className="w-full h-[250px] object-contain rounded-lg" alt={product?.title} /> {/* Added alt text for accessibility */}
        </div>
        <div className="flex flex-col text-left">
          <div className="flex-col border rounded-md p-3">
            <h2 className="font-bold text-2xl">{product?.title}</h2>
          </div>
          <div className="flex-col border rounded-md p-3">
            <h3 className="font-bold text-xl">Kondisi Pakaian:</h3>
            <h2 className="text-base">Bekas, Masih Layak Pakai</h2>
          </div>
          <div className="flex-col border rounded-md p-3">
            <h3 className="font-bold text-xl">Lokasi:</h3>
            <h2 className="text-base">Jabodetabek</h2>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Link to="/profilUser" className="flex rounded-xl text-black p-3 justify-center gap-3 cursor-pointer bg-teal-400 font-bold">
              <h1 className="text-xl">Profil</h1>
            </Link>
            <Link to="/" className="flex rounded-xl text-white p-3 justify-center gap-3 cursor-pointer bg-black font-bold">
              <h1 className="text-xl">Katalog</h1>
            </Link>
            <div
              className="flex rounded-full text-black p-3 justify-center gap-3 cursor-pointer bg-amber-300 font-bold"
            >
              <MdFavorite className="text-2xl" />
              <h1 className="text-xl">Like <span></span></h1>
            </div>
          </div>
        </div>
      </div>
        <div className="w-full p-[20px] mt-5">
        <Komen/>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Detail;