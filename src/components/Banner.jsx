import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

export const Banner = () => {

    return (
        <section className='bg-[url(/image1.png)] sm:flex bg-top  w-full h-screen bg-no-repeat bg-cover my-0 animate__animated animate__zoomInUp animate__slower  '>

            <div className='sm:flex grid  w-full items-center  gap-6 sm:justify-around sm:items-end px-4 py-5 sm:mt-15'>

                <div className='grid gap-4 justify-between bg-slate-400/40 rounded-xl  text-justify p-5 '>
                    <h4 className='font-semibold'>Discount 5%</h4>
                    <div className="flex gap-6 items-center">
                        <p className='font-light text-wrap'>For therapeutic treatment when registering via website</p>
                        <GoArrowUpRight className='font-extrabold text-3xl'/>
                    </div> 
                </div>

                <div className=' grid gap-4 bg-slate-400/40 justify-between rounded-xl  p-5 text-balance '>
                    <h4 className='font-semibold text-nowrap'>Free consultation</h4>
                    <div className="flex gap-6 items-center">
                        <p className='font-light text-wrap'>For all types of dental services</p>
                        <GoArrowUpRight className='font-extrabold sm:text-3xl text-2xl'/>
                    </div>
                </div>

                <div className='grid gap-4 bg-slate-400/40 justify-between rounded-xl   p-5  text-justify  '>
                    <h4 className='font-semibold'>Installement 0%</h4>
                    <div className="flex gap-6 items-center">
                        <p className='font-light text-wrap'>We will examine, make a treatment plan, and name the exact cost</p>
                        <GoArrowUpRight className='font-extrabold text-4xl sm:text-3xl'/>
                    </div>
                </div>

            </div>

        </section>
    )
};

