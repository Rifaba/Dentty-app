import React, { useState } from 'react'

export default function ServiceItem({ item }) {
    const [readmore, setReadmore] = useState(false);
  const { id, title, info, img } = item;
                        return (
                            <article className='gap-5' key={id}>
                                
                                <img src={img} alt={title} className='sm:w-3/4 shadow-xl rounded-xl sm:h-3/4'></img>

                                <div className='my-3'>
                                    <p className='text-pretty font-light text-xl text-[#28323f] mb-3'>{title}</p>
                                    <p className='font-extralight text-justify'>
                                        {readmore ? info : typeof info === "string" ? info.substring(0, 200) : ""}
                                        <span className='px-2'>
                                            <button className='text-[#28323f] font-semibold'
                                                onClick={() => setReadmore(!readmore)}>
                                                {readmore ? "Read less" : "Read more"}
                                            </button>
                                         </span>
                                    </p>
                                </div>             
                               </article>
                        )
};
