import React from 'react'
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Solutions, Company, Support, Legal } from '../Data';

export const Footer = () => {
    
    return (
      
        <section className='bg-[#e9e9e9] px-3 py-2  w-full sm:flex grid-cols-2  justify-between items-center text-nowrap gap-3 animate__animated animate__slideInRight animate__delay-4s'>

            <div className='m-3' >
                <h2 className='bg-[#28323f] w-20 px-4 py-1 flex mb-4 justify-center text-white text-xl rounded-xl '>Dentty</h2>
                <p className='font-light text-gray-600 text-pretty w-65'>Prevention, diagnosis and treatment of dental and oral diseases</p>
                <div className='mt-3'>
                    <ul className='flex gap-5 font-light text-gray-600'>
                        <li><FaFacebook /></li>
                        <li><FaInstagram /></li>
                        <li><FaXTwitter /></li>
                    </ul>
                </div>
            </div>

            <div className='grid-cols-2 grid sm:flex justify-between gap-2'>
            <div className='m-2  py-2 '>
                <h4 className='text-[#28323f] mb-2 font-semibold'>Solutions</h4>
                <article className=''>
                    {Solutions.map((solution) => {
                        const { id, title } = solution;
                        return (
                            <ul key={id}>
                                <li className='mb-2 text-gray-600 hover:scale-110 ease-in-out duration-300'>{title}</li>
                            </ul>
                            
                        )
                    })}
                </article>
            </div>

            <div className='m-2  py-2'>
                <h4 className='text-[#28323f] mb-2 font-semibold'>Company</h4>
                <article className=''>
                    {Company.map((office) => {
                        const { id, title } = office;
                        return (
                            <ul key={id}>
                                <li className='mb-2 text-gray-600 hover:scale-110 ease-in-out duration-300'>{title}</li>
                            </ul>
                            
                        )
                    })}
                </article>
            </div>

            <div className='m-2  py-2'>
                <h4 className='text-[#28323f] mb-2 font-semibold'>Support</h4>
                <article className=''>
                    {Support.map((help) => {
                        const { id, title } = help;
                        return (
                            <ul key={id}>
                                <li className='mb-2 text-gray-600 hover:scale-110 ease-in-out duration-300'>{title}</li>
                            </ul>
                            
                        )
                    })}
                </article>
            </div>

            <div className='m-2  py-2'>
                <h4 className='text-[#28323f] mb-2 font-semibold'>Legal</h4>
                <article className=''>
                    {Legal.map((law) => {
                        const { id, title } = law ;
                        return (
                            <ul key={id}>
                                <li className='mb-2 text-gray-600 hover:scale-110 ease-in-out duration-300'>{title}</li>
                            </ul>
                            
                        )
                    })}
                </article>
                </div>
                </div>

        </section>
    )
};
