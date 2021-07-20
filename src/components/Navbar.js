import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Navbar = () => {
    const [navopen, setnavopen] = useState(false);
    return (
        <>
        <nav className="flex justify-between relative items-center h-16 bg-white text-black  shadow-sm font-mono">
           <Link to='/' className="ml-8 p-4 hover:bg-purple-400 hover:border-2 shadow-sm hover:shadow-lg rounded-full">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
           </Link>
           <div className="px-4 cursor-pointer md:hidden" onClick={()=>setnavopen(!navopen)}>
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
           </div>
           <div className="mr-20  md:block hidden">
               <Link className="p-3 mx-2 transition duration-300 ease-in-out hover:bg-purple-200 hover:border-2 shadow-sm hover:shadow-lg rounded-lg transform hover:-translate-y-1 hover:scale-110 ..." to="/">Home</Link>
               <Link className="p-3 mx-2 transition duration-300 ease-in-out  hover:bg-pink-200 hover:border-2 shadow-sm hover:shadow-lg rounded-lg transform hover:-translate-y-1 hover:scale-110 ... " to="/grid">Grid</Link>
               <Link className="p-3 mx-2 transition duration-300 ease-in-out hover:bg-blue-200 hover:border-2 shadow-sm hover:shadow-lg rounded-lg transform hover:-translate-y-1 hover:scale-110 ..." to="/about">About</Link>
               <Link className="p-3 mx-2 transition duration-300 ease-in-out hover:bg-yellow-200 hover:border-2 shadow-sm hover:shadow-lg rounded-lg transform hover:-translate-y-1 hover:scale-110 ..." to="/Tipcal">Tip calculator</Link>
           </div>
        </nav>
         <div className="md:hidden relative "> 
         {
             navopen?
             <ul className="h-64  ease-in-out font-mono text-white font-semibold bg-white flex flex-col justify-evenly items-center">
                 <li className="flex justify-center items-center border-b-2 w-full h-full bg-gray-900"><Link  to="/">Home</Link></li>
                 <li className="flex justify-center items-center border-b-2 w-full h-full bg-gray-800">
                     <Link to="/grid">Grid</Link>
                 </li>
                 <li className="flex justify-center items-center border-b-2 w-full h-full bg-gray-700">
                     <Link to="/about">About</Link>
                 </li>
                 <li className="flex justify-center items-center border-b-2 w-full h-full bg-gray-600">
                     <Link to="/Tipcal">Tip Calculator</Link>
                 </li>
             </ul>
             :null
         }
          </div>
          </>
    )
}

export default Navbar
