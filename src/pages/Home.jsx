import React from 'react';
import Navbar from '../components/Navbar';
import Menubar from '../components/Menubar';
import Hero from '../components/Hero';
import Katalog from '../components/Katalog';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Menubar/>
        <Katalog/>
        <Footer/>
    </div>
  );
}

export default Home;
