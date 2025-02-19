import React from 'react'
import { Navmenu } from '../Data'


export const Nav = () => {
    return (
    
      
        <section className='flex w-full   text-white text-nowrap justify-between items-center px-5  py-5'>
          
            <div className='flex items-center justify-center bg-slate-400/40 rounded-xl px-2.5 py-2'>
                <p className='text-l cursor-pointer'>DENTTY</p>
            </div>


            <div className='bg-slate-400/40 hidden md:flex gap-20 px-5 py-2 justify-center items-center rounded-xl'>
                {Navmenu.map((nav) => {
                const { id, title} = nav;
                return (
                    <article key={id}>

                        <ul className=''>
                            <li className='hover:scale-125 duration-300 ease-in cursor-pointer'>{title}</li>
                        </ul>
                    </article>
                    )
                })}
            </div>
            

            <div>
                <button className="text-nowrap cursor-pointer text-black w-full bg-[#fbfbfb] px-8 py-2 rounded-xl hover:scale-110" type="submit">Get in touch</button>

                {/* <button
                          // onClick={() => setIsMenuOpen(!isMenuOpen)}
                          className='md:hidden'
                        
                        ><CiMenuBurger /></button> */}
            </div>

        </section>
    )
};


//style={({ isActive }) => {
//                 return { color: isActive ? "#28323f" : "#fbfbfb"}
//             }}>