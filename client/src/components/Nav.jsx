import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import React from 'react'
import Menu from "./Menu";

const Nav = () => {
  return (
   <header className="padding-x py-8 absolute z-10 w-full">
    <nav className="flex justify-between text-center max-container">
      <a href="/">
       <img src={headerLogo} alt="Logo" 
       width={130} height={29} ></img>
      </a>

      <ul className='flex-1 justify-center items-center gap-16 hidden md:flex'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        
        {/* <div className='lg:hidden'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div> */}

        <div className="md:hidden">
        <Menu/>
      </div>

        
    </nav>
   </header>
  )
}

export default Nav
