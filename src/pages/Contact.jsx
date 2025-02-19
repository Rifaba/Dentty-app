import React, { useEffect, useRef, useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { toast , Toaster} from 'sonner';

export const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
   
    const nameRef = useRef();
    const emailRef = useRef();
    const textRef = useRef();
   
    const onSubmit = (e) => {
        e.preventDefault();
        toast.success("Your request has been sent", { duration: 3000 })
        nameRef.current.value = "";
        emailRef.current.value = "";
        textRef.current.value = "";
       
    };

   
    
    return (
        <section className='flex justify-center px-7 '>
              
                {/* Contact's card */}
        
            <div className=' bg-slate-400/40 sm:w-180 px-2 mx-2  py-4 my-8  justify-center rounded-xl shadow-3xl animate__animated animate__slideInUp animate__slow'>
                    <div className='flex justify-center items-center'>
                            <p className='text-4xl text-center my-2'>Contact Us</p>
                    </div>
                
                <form className=' py-2 px-4' onSubmit={onSubmit}>

                    <div className='grid '>
                        <label htmlFor='name'
                            className='py-1 px-2  text-base' >Name</label>
                        <input required
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ref={nameRef}
                                type="text"
                                placeholder="Enter your name"
                                className='py-1 px-2  text-base outline-0  font-light'>      
                                </input>
                    </div>
                            
                    <div className='grid'>
                        <label htmlFor='email'
                            className='py-1 px-2 text-base'>Email</label>
                        <input required
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            // onSubmit={handleReset}
                                ref={emailRef}
                                type="email"
                                placeholder="Enter your email"
                                className='py-1 px-2   text-base outline-0 font-light'>
                                </input>  
                    </div>
                            
                    <div className='grid'>
                        <label htmlFor='message'
                           
                            className='py-1 px-2 mb-2 text-base'>Message</label>
                        <textarea required 
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            ref={textRef}
                                className='py-5 px-3 resize rounded-md text-base mb-4 font-light  outline-1 -outline-offset-1 outline-gray-400 focus:outline-1 focus:outline-[#28323f]'></textarea>
                    </div>
                    
                    <div className='flex gap-3 px-2'>
                        <input
                                type="checkbox"
                                className='outline-[#28323f] '
                            ></input>
                            <p>I accept the <a className='text-[#28323f]'>Terms of Service</a></p>
                    </div>

                    <div className='flex justify-center items-center rounded-xl px-3 py-3 mt-3.5'>
                        <button className='rounded-xl bg-[#28323f] text-white w-full  py-3 hover:scale-105' type='submit'>Submit</button>
                    </div>
                <Toaster richColors/>
                </form>
        
                  {/* Location, Hour */}
                  
                <div className='md:grid-cols-3 grid justify-between gap-3 px-5 py-3 w-full '>
                  
                        <div>
                            <div className='flex items-center gap-3'>
                                <FaPhoneAlt className='text-xl' />
                                    <p>Call</p>
                            </div>
                        
                            <div className='mt-2'>
                                <a href="tel:021-312-00-38" alt="call 021 312 00 38"className=' font-light flex items-center gap-2'>021 312 00 38</a>
                            </div>
                        </div>
                                         
                        <div>
                            <div className='flex items-center gap-3'>
                                <MdLocationPin className='text-2xl' />
                                <p>Location</p>
                            </div>
                            <div className='mt-2'>
                                <p className='font-light'>
                                    121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
                                </p>
                            </div>
                        </div> 
                  
                        <div className=''>
                            <div className='flex items-center  gap-3'>
                                <IoMdTime className='text-2xl' />
                                    <p className=''>Practice hours</p>
                            </div>
                            <div className='mt-2'>
                                <p className='text-nowrap font-light'>Monday-Tuesday : 09:00 - 21:00</p>
                                <p className='text-nowrap font-light'>Friday : 09:00 - 19:00</p>
                                <p className='text-nowrap font-light'>Saturday : 11:00 - 16:00</p>
                            </div>
                        </div>
                  
                </div>

            </div>
        
                  
        </section>
          
    )
};
