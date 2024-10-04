import React, { useState } from 'react';
import barterstyle from '../assets/barterstyle.png';
import Login from './Login';
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbar() {
  const [loginPop, setLoginPop] = useState(false);

  return (
    <>
      <div className="w-full bg-slate-100 shadow">
        <nav className="flex justify-between mx-auto py-5 p-5 items-center">
          <Link to="/">
            <img src={barterstyle} className="w-25 h-10" />
          </Link>
          <ul className="flex justify-between items-center">
            <li className="flex ml-5 cursor-pointer gap-5">
              <BiSolidMessageDetail className="w-12 h-10 mt-1 ml-3" />
              <IoNotificationsSharp className="w-12 h-10 mt-1 ml-3" />
            </li>
            <li onClick={() => setLoginPop(!loginPop)}>
                <h1 className="flex p-2 ml-6 cursor-pointer underline hover:no-underline font-bold text-2xl ml-6">Login</h1>
            </li>
            <li>
              <button className="font-bold text-2xl ml-5 rounded-full bg-teal-500 hover:bg-teal-400 px-4 py-2 cursor-pointer">Barter +</button>
            </li>
          </ul>
        </nav>
      </div>
      {loginPop && <Login />}
    </>
  );
}

export default Navbar;