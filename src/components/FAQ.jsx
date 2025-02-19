import React, { useState } from 'react'
import { Questions} from "../Data"
import { SingleQuestion } from './SingleQuestion';

export const FAQ = () => {

    const [item, setItem] = useState(Questions);
    const [active, setActive] = useState(-1);

    return (
    
        <section className='bg-[#28323f] w-full grid sm:grid-cols-1 justify-between px-5 py-3 mb-4 animate__animated animate__slideInLeft animate__delay-4s'>
          
            <div className='my-4 text-white'>
                <p className='font-extralight mb-5'>Answer all questions</p>
                <h5 className='text-5xl font-bold'>FAQ</h5>
            </div>

            <div className='text-white flex-col duration-300 ease-in'>
                {item.map((faq, id) => {
                    return (
                        <SingleQuestion key={faq.id} {...faq} setActive={setActive} active={active} ></SingleQuestion>
                    )
                })}
            </div>
         
          

        </section>
    )
};


