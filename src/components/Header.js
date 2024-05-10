import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'



function Header() {
    const [toggleMenu, setToggleMenu]=useState(false);
    
  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black " href="#"> Bala</a>

{/* // for desktop view */}
      <nav className="hidden md:block"> 
      <ul className="flex text-white">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>


      {/* // for mobile view */}
      {toggleMenu &&  <nav className="block md:hidden">
      <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white mobile-nav">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </nav>}

      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className='text-white h-5'/></button>
      
    </header>
  );
}

export default Header;
