import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {auth} from './firebase'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import Detail from './pages/Detail'
import Home from './pages/Home'
import ProfilUser from './pages/ProfilUser';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  
  //state
  const [isLogin,setIsLogin] = useState(false)
  const [loading,setLoading] = useState (true)

  useEffect(()=> {

    const auth = getAuth ()
    onAuthStateChanged (auth, (result) => {
      if (result) {
        setIsLogin(true)
        setLoading(false)
        return
      }
      setIsLogin(false)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
    <div className='w-screen h-screen flex flex-col justify-center items-center text-3xl'>
      Loading..
      </div>
      )
  }
  return (
    <>
          {isLogin ? (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Detail" element={<Detail/>}/>
        <Route path="/ProfilUser" element={<ProfilUser/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      ) : (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Detail" element={<Login/>} />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      )}
      


    </>
  )
}

export default App
