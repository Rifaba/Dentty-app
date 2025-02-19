import React from 'react'
import {ServiceList} from "../Data"
import { useState } from 'react';

export const Services = () => {

    const [selectedService, setSelectedService] = useState(-1);
    
    return (
       
        <section className='bg-[#e9e9e9] bg-fixed w-full justify-between animate__animated animate__slideInDown animate__slow items-center px-5 my-6 '>

            <div className=''>
                <p className='font-extralight text-[#28323f] mb-5'>Our clinic offers</p>
                <h5 className='text-5xl font-bold'>Services</h5>
            </div>

            <div className='grid  sm:flex justify-between items-start py-4 px-3'>
                <div className='grid grid-cols-2 justify-between items-center gap-5'>
                    <div className='my-3 '>
                        <p className='text-[#28323f]'>We care about you</p>
                        <p className='text-3xl font-medium text-balance sm:text-nowrap'>Your smile is our priority</p>
                    </div>

                        {ServiceList.map((item) => {
                            const { id, title, info, img } = item;
                            const isOpened = (id === selectedService);
                            
                        return (
                            <article className='gap-5' key={id}>
                                
                                <img src={img} alt={title} className='sm:w-3/4 shadow-xl rounded-xl sm:h-3/4'></img>

                                <div className='my-3'>
                                    <p className='text-pretty font-light text-xl text-[#28323f] mb-3'>{title}</p>
                                    <p className='font-extralight text-justify'>
                                        {isOpened ? info : typeof info === "string" ? info.substring(0, 200) : ""}

                                        <span className='px-1'>
                                            <button className='text-[#28323f]  cursor-pointer font-semibold'
                                                onClick={() => setSelectedService(isOpened ? -1 : id)}>
                                                {isOpened ? "Read less" : "Read more"}
                                            </button>
                                         </span>
                                    </p>
                                </div>             
                               </article>
                        )
                    })}
                </div>

            </div>
        </section>
    )
};
