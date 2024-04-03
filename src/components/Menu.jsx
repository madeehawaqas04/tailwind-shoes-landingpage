import React, { useState } from 'react'
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
import { close } from "../assets/icons";

const Menu = () => {
    const [open, setOpen] = useState(false);
  
    // TEMPORARY
    const user = false;
    return (
      <div>
        {!open ? (
          <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={() => setOpen(true)} />
        ) : (
          <img src={close} alt="" width={20} height={20} onClick={() => setOpen(false)} />
        )
        }
        {open && <div className="bg-white left-0 top-24 w-full 
        absolute h-[calc(100vh-6rem)] flex flex-col items-center z-10
         justify-center text-3xl gap-8  ">
          {
             <ul className='flex-1 justify-center items-center gap-16 '>
             {navLinks.map((item) => (
               <li key={item.label}>
                 <a
                   href={item.href}   onClick={() => setOpen(false)}
                   className='font-montserrat leading-normal text-lg text-slate-gray'
                 >
                   {item.label}
                 </a>
               </li>
             ))}
           </ul>
          }
  
        </div>
        }
      </div>
    );
  };

export default Menu
