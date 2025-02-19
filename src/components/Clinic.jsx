import React from 'react'

export const Clinic = () => {
  return (
    
      <section className='bg-[#e9e9e9] w-full justify-between items-center px-5 mt-3 animate__animated animate__slideInRight animate__delay-3s	 '>
          <div className=''>
              <p className='font-extralight text-[#28323f] mb-5'>Wide range of services</p>
              <h5 className='text-5xl font-bold'>Our Clinic</h5>
          </div>

          <div className='px-3 py-4 my-2 w-full'> 
              
              <div className='flex gap-2 justify-between items-center'>
                  
                  <img className='rounded-xl w-1/4 h-2/4 border-1 border-gray-500 shadow-xl' src="/public/dental.5.png" alt="dental-care"></img>
                  <img className='rounded-xl w-1/4 h-2/4 border-1 border-gray-500  shadow-xl' src="/public/dental.1.png" alt="dental-care"></img>
                  <img className='rounded-xl w-2/4 h-2/4 border-1 border-gray-500 shadow-xl' src="/public/dental.3.png" alt="dental-care"></img>
              </div>
            
              <div className='flex justify-center  gap-3'>
                  
              <div className='px-2 py-8 text-justify'>
                  <h4 className='font-semibold text-xl mb-3'>
                      Expertise
                  </h4>
                  <p className='font-light'>
                      Our clinic employs experienced and highly qualified specialist who are always ready to help you cope with any oral problems
                  </p>
              </div>

                <div className=' px-2 py-8 text-justify '>
                        <h4 className='font-semibold text-xl mb-3'>
                            Care
                        </h4>
                        <p className='font-light'>
                            We care about your health and strive to everything possible to make your smile healhy and beautiful
                        </p>
                </div>
                  
              </div>
              </div>
              
      </section>
  )
}
