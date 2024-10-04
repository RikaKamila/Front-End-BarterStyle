import React, { useState, useEffect } from 'react';

function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Jadilah bagian dari Gerakan Fashion Berkelanjutan. Tukarkan Pakaianmu, Perbarui Gaya, dan Selamatkan Bumi.';

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText(prevText => {
        if (prevText.length === fullText.length) {
          return ''; 
        } else {
          return prevText + fullText.charAt(prevText.length);
        }
      });
    }, 80); 

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-[300px] bg-amber-300 bg-center text-black">
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl text-teal-700">
          Rajanya Barter Pakaian
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-center p-5">
          <span className="animate-typing">{text}</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;