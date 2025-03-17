import  React, { useState }  from 'react';
import { VscClose } from "react-icons/vsc";
import { CiMenuBurger } from "react-icons/ci";
import { VscChromeClose } from "react-icons/vsc";
import { NavLink } from 'react-router';
import { Navmenu } from '../Data'


const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (

    <nav className='flex w-full  text-white justify-between items-center px-5 py-4 bg-[#567daa]  '>
      
      <div className='flex items-center justify-center bg-slate-400/40 rounded-xl px-2 py-2'>
        <NavLink to="/home"><h2 className='text-l '>DENTTY</h2></NavLink>
      </div>

      <div className=' bg-slate-400/40 rounded-xl hidden sm:flex px-5 py-2'>
        <ul className=' text-nowrap flex justify-between items-center md:gap-12 '>
          <NavLink to="/home"
          style={({ isActive }) => {
              return { color: isActive ? "#28323f" : "#fbfbfb"}
          }}><li className='hover:scale-110'>Home</li></NavLink>
          <NavLink to="/team" style={({ isActive }) => {
              return { color: isActive ? "#28323f" : "#fbfbfb"}
          }}><li className='hover:scale-110'>Doctors</li></NavLink>
          <NavLink to="/service" style={({ isActive }) => {
              return { color: isActive ? "#28323f" : "#fbfbfb"}
          }}><li className='hover:scale-110'>Services</li></NavLink>
          <NavLink to="/price list" style={({ isActive }) => {
              return { color: isActive ? "#28323f" : "#fbfbfb"}
          }}><li className='hover:scale-110'>Price list</li></NavLink>
        </ul>
      </div>

      <div className='sm:flex gap-3 '>
        <NavLink to="/contact"><button className="text-nowrap hidden sm:flex text-black w-full bg-[#fbfbfb] px-8 py-2 rounded-xl hover:scale-110" type="submit">Get in touch</button></NavLink>
        
        <button 
           onClick={handleClick}
        >{isMenuOpen ? <VscChromeClose className='block font-semibold text-2xl  cursor-pointer' /> : <CiMenuBurger className='md:hidden block font-semibold text-2xl cursor-pointer' /> }</button>
      </div>
      
        {isMenuOpen && (
        <section className=' h-svh w-full bg-[#28323f] absolute z-20 top-18 left-0  text-white flex flex-col text-2xl transform 0.3s ease  transition-transform animate__animated animate__fadeInDown '>
              <div className='py-7  '>
                    <ul className=' text-nowrap flex flex-col justify-center items-center gap-10  '>
                            <NavLink to="/home"><li className='hover:scale-125 mb-4'>Home</li></NavLink>
                            <NavLink to="/team"><li className='hover:scale-115 mb-4'>Doctors</li></NavLink>
                            <NavLink to="/service"><li className='hover:scale-125 mb-4'>Services</li></NavLink>
                            <NavLink to="/price list"><li className='hover:scale-125 mb-4'>Price list</li></NavLink>
                   </ul>
            
                      <div className='flex justify-center  mb-4'>
                          <NavLink to ="/contact"><button className="text-nowrap  text-black  bg-[#fbfbfb] px-8 py-2 rounded-xl hover:scale-110" type="submit">Get in touch</button></NavLink>
                      </div>
          </div>
        </section>     
      )}
      
    </nav>
    
  )
};

export default Navbar


