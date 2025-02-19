import React, { useEffect, useRef, useState } from 'react'
import { dentistProfile } from '../Data'
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { toast , Toaster} from 'sonner';



export const Team = () => {

   

    const [index, setIndex] = useState(0);
    const { name, experience, desc, img } = dentistProfile[index];

    const checkProfile = (profile) => {
        if (profile > dentistProfile.length - 1) {
            return 0;
        }

        if (profile < 0) {
            return dentistProfile.length - 1;

        }

        return profile
            
    };

    const prevProfile = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkProfile(newIndex);
        })
    };

    const nextProfile = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkProfile(newIndex)
        })
    }

    const dateRef = useRef();
    const [date, setDate] = useState("");


    const onSubmit = (e) => {
        e.preventDefault();
        toast.success("Event has been created", { duration: 3000, })
        dateRef.current.value = ""
        setDate("")
    };

    return (
    
        <section className='bg-[#e9e9e9] bg-fixed w-full  justify-between items-center  px-5 my-6'>
            <div className='mb-5'>
                <p className='font-extralight text-[#28323f] mb-5'>Our clinic offers</p>
                <h5 className='text-5xl font-bold'>Team</h5>
            </div>

            <div className='gap-10 grid bg-[#e9e9e9] justify-between items-start mx-2'>
                
                <div className='flex gap-6 justify-center items-center '>
                    <button onClick={prevProfile}><VscArrowLeft className='font-extrabold text-4xl cursor-pointer'/></button>
                    <button onClick={nextProfile}><VscArrowRight className='font-extrabold text-4xl cursor-pointer' /></button>
                </div>
            
                <form className='sm:flex grid-cols-2 justify-center items-start gap-5' onSubmit={onSubmit}>

                    <img className="rounded-xl flex sm:w-180 sm:h-150 mb-5 shadow-xl animate__animated animate__slideInLeft animate__slow" src={img}></img> 

                    <div className=' gap-4 sm:h-100 px-4 py-6 sm:w-4/4 h-3/4 animate__animated animate__slideInRight animate__slow'>
                                <h3 className='text-2xl  sm:text-justify font-bold '>{name}</h3>
                                <p className='font-light sm:text-justify mt-2 '>{experience}</p>

                        <div className='mt-4 sm:mt-25 sm:w-4/4 gap-4'>
                            <p className='mb-4 font-light text-justify '>{desc}</p>
                            <label htmlFor='date' className='text-xl font-bold flex flex-col mb-2.5'>Date</label>
                            <input
                                ref={dateRef}
                                className='mb-4'
                                type="date"
                                value={date}
                                onChange={(e)=>setDate(e.target.value)}
                            ></input>

                            <label htmlFor='time' className='flex flex-col text-xl font-bold mb-2'>Time</label>

                            <div className='flex  gap-2 sm:gap-5'>
                                <button
                                    type="button"
                                    className='font-light rounded-lg bg-[#3d6eaf] text-white py-2 px-2 hover:scale-105 mb-3 text-sm text-nowrap cursor-pointer'
                                    >Morning 9 am - 2 pm
                                </button>

                                <button
                                    type="button"
                                    className='font-light rounded-lg bg-[#3d6eaf] text-white py-2 px-2 hover:scale-105 mb-3 text-sm text-nowrap cursor-pointer'
                                    >Evening 4 pm - 9 pm
                                </button>
                            </div>
                            
                                <button className="rounded-xl mt-4    items-center justify-center flex px-3 py-3 bg-[#28323f] hover:scale-105 text-white text-center cursor-pointer"
                                type="submit"
                                
                            >Book an appointment</button>

                            <Toaster richColors/>
                            
                        </div>   
                    </div>
                </form>
                
            </div>
        </section>
    )
};
