import React from "react";
import { SiBitcoinsv } from "react-icons/si";
import { MdArrowOutward } from "react-icons/md";

const NavBar = () => {
  return (
    <>
      <div className="flex  items-center justify-around py-6 border-b-1  " >

        <div className="flex gap-2 items-center text-3xl">
          <SiBitcoinsv />
          <h1>Crypto Palace</h1>
        </div>

        <div>
          <ul className="flex space-x-6 text-white">
            <li className="hover:text-blue-400 transition">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-blue-400 transition">
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>

        <div className="relative inline-block text-left space-x-3 ">

          {/* <select className="bg-gray-800 text-white p-2 pl-3 pr-8 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
          </select> */}

          <button className="relative overflow-hidden px-6 py-2 rounded-full bg-white text-black font-semibold shadow-md border border-black group transition-all duration-300 ease-in-out">
            <span className="absolute inset-0 w-0 bg-black transition-all duration-500 group-hover:w-full"></span>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white flex items-center gap-2 ">
              Sign In <span className="text-xl" > <MdArrowOutward/> </span>
            </span>
          </button>

        </div>
      </div>
    </>
  );
};

export default NavBar;
