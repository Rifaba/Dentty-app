import React from 'react'


export const Pricelist = () => {
  return (
   
    <section className='bg-[#e9e9e9] bg-fixed  justify-between px-5 my-6 animate__animated animate__slideInUp animate__slow'>

      <div className='my-3 '>
        <p className='text-2xl font-extralight'>Your Smile, Our Priority</p>
      </div>

      <div className=' py-2 mb-7'>
        <p className='font-bold text-nowrap text-3xl'>Price List for Dental Care</p>
        <p className='font-light'>Effective : January 2025</p>
      </div>

      <div className=' sm:grid justify-center gap-10 w-full'>

           {/* Table 1 */}
      <article>
         <div className='p-3 bg-[#567daa] rounded-lg'>
            <p className='font-semibold text-xl my-2'>Restorative Dentistry</p>
        </div>
 
      <div className='overflow-auto rounded-lg shadow-xl '>

      <table className=''>
        <thead className='bg-gray-50 border-b-2 border-b-gray-200'>
          <tr className=''>
            <th className='p-3 w-20 text-lg font-semibold tracking-wide text-left'>Service</th>
            <th className='p-3 text-lg w-24 font-semibold tracking-wide text-left'>Description</th>
            <th className='p-3 w-20 text-lg font-semibold tracking-wide text-left'>Price ($)</th>
          </tr>
          </thead>
          
          <tbody className='divide-y divide-gray-100'>
            <tr className='bg-[#e9e9e9]'>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Dental Fillings</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Tooth-colored fillings for cavities</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>150 - 300</td>
            </tr>

            <tr className='bg-gray-50'>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Dental Crowns</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Porcelain or metal crowns</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>75 - 150</td>
            </tr>

            <tr className=' bg-[#e9e9e9]'>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Root Canal Therapy</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Treatment for infected tooth pulp</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>50 - 200</td>
            </tr>

            <tr className='bg-gray-50'>
              <td className='p-3 text-sm whitespace-nowrap text-gray-700'>Dentures</td>
              <td className='p-3 text-sm whitespace-nowrap text-gray-700'>Custom-made removable teeth replacements</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>1000 - 3000</td>
            </tr>

          </tbody>
        </table>
        
      </div>
      </article>
     
  
      {/* Table 2 */}

      <article>
        <div className='p-3 bg-[#567daa] rounded-lg'>
          <p className='font-semibold text-xl my-2'>Cosmetic Dentistry</p>
        </div>
        
        <div className='overflow-auto rounded-lg shadow-xl'>
        
        <table className=''>
        <thead>
          <tr className=''>
            <th className='p-3 w-38 text-lg font-semibold tracking-wide text-left'>Service</th>
            <th className='p-3 w-38 text-lg font-semibold tracking-wide text-left'>Description</th>
            <th className='p-3 w-38 text-lg font-semibold tracking-wide text-left'>Price ($)</th>
          </tr>
          </thead>
          
          <tbody className='divide-y divide-gray-100'>
            <tr>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Teeth Whitening</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>In-office professional whitening</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>300 - 600</td>
            </tr>

            <tr>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Veneers</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Custom-made shells for front teeth</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>800 - 2000</td>
            </tr>

            <tr>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Invisalign®</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Clear aligners for teeth straightening</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>3000 - 8000</td>
            </tr>
          </tbody>

        </table>
      </div>
      </article>
      

      {/* Table 3 */}
      
      <article>
        <div className='p-3 bg-[#567daa] rounded-lg'>
          <p className='font-semibold text-xl my-2'>Oral Surgery</p>
        </div>

         <div className='overflow-auto rounded-lg shadow-xl'>
        
        <table className=''>
        <thead>
          <tr>
            <th className='p-3 w-24 text-lg font-semibold tracking-wide text-left'>Service</th>
            <th className='p-3 w-14 text-lg font-semibold tracking-wide text-left'>Description</th>
            <th className='p-3 w-24 text-lg font-semibold tracking-wide text-left'>Price ($)</th>
          </tr>
          </thead>
          
          <tbody className='divide-y divide-gray-100'>
            <tr>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Tooth Extraction</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Simple or surgical extraction</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>150 - 400</td>
            </tr>

            <tr>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Wisdom Teeth Removal</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Impacted wisdom teeth removal</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>300 - 800</td>
            </tr>

            <tr>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Dental Implants</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>Titanium implant with crown</td>
              <td className='p-3 text-sm whitespace-nowrap  text-gray-700'>3000 - 5000</td>
            </tr>
          </tbody>

        </table>
      </div>
      </article>
      </div>


     <div className='px-5 py-6 mt-10 w-full'>
        <p className='font-semibold text-xl mb-3'>Additional Information</p>
        <ul className='px-4 '>
          <li className='list-disc my-2'>💼 Insurance: We accept most dental insurance plans. Please contact us for details.</li>
          <li className='list-disc my-2'>💳 Payment Plans: Financing options are available for major procedures.</li>
          <li className='list-disc my-2'>🎉 Discounts: Ask about our discounts for seniors, students, and military personnel.</li>
        </ul>
      </div>
     
    </section>
  )
};
