import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function About() {


  return (
    <>
    <div className="w-screen flex flex-col items-center">
        <Navbar/>
        <div className="w-full h-[150px] bg-teal-500 flex justify-center items-center font-bold text-3xl">
            <h1 className="text-center items-center">ABOUT US</h1>
        </div>
        <div className="w-[50%] flex justify-center text-2xl p-[50px] text-center">
            <h2><span className="font-bold">BarterStyle</span> adalah sebuah platform tukar baju online. Dengan BarterStyle, kamu bisa menukarkan pakaian kamu yang sudah tidak terpakai lagi dengan pakaian lain yang ada di katalog website Barterstyle dan menemukan gaya baru tanpa harus membeli baju baru.</h2>
        </div>
        <div className="text-center w-[60%] p-[40px]">
            <h4 className="text-md font-semibold pb-5"> Quotes</h4>
            <h3 className="text-xl italic">"Setiap pakaian yang kita tukar adalah langkah kecil untuk masa depan bumi yang lebih baik. 
            Mari jadikan gaya hidup berkelanjutan sebagai tren yang tak lekang waktu."</h3>
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

export default About;
