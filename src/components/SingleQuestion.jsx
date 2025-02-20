import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownLeft } from "react-icons/go";


export const SingleQuestion = ({id, question, info, active, setActive}) => {

    const isOpened = (active === id)
    
    return (

        <article className=' border-b-1 border-gray-400/60 py-3 px-3 '>

            <div className='flex justify-between gap-6'>

            
                    <h4 className='sm:text-nowrap'>{question}</h4>
           
            <div className=''>
                
                <button className=''
                    onClick={() => setActive(isOpened ? -1 : id)}>
                    {isOpened ? <GoArrowDownLeft className='font-extrabold cursor pointer text-4xl'/> : <GoArrowUpRight className='font-extrabold text-4xl cursor-pointer' />}
                </button>
                {isOpened && <p className='grid grid-cols-1'>{info}</p>}
            </div>
            </div>
           
        </article>
      
       
    )
};



