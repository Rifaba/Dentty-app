import React from 'react'

export const ErrorPage = () => {
    return (
        <div className='flex flex-col  w-full  md:h-95 p-4 gap-0 justify-center items-center'>
            <div className='flex p-2 justify-center'>
                <img src="./public/error.png" alt="Error Page" className='md-w-3/4 sm:w-2/4  '>
            </img>
            </div>
            
            <div className='gap-0 h-0'>
            <p className='font-semibold text-pretty text-center mb-5 font-lato md:text-2xl font-normal text-[#4f5cbc]'>Something went wrong. Try clicking the refresh page button to reload the application</p>

            <div className='flex justify-center'>
                <button className="md:px-4  md:py-3 p-2.5 rounded-xl md:text-xl hover:scale-110 text-white  bg-[#567daa]"type="button">Refresh page</button>
            </div>
            </div>
            
      
        </div>
    )
};


