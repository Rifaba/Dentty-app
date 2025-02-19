import React from 'react'
import { Hero } from './Hero'
import { Banner } from './Banner'
import { Clinic } from './Clinic'
import { FAQ } from './FAQ'
import { Footer } from './Footer'



export const Home  = () => {
    return (
    
      
        <section>
            <Hero />
            <Banner />
            <Clinic />
            <FAQ />
            <Footer /> 
        </section>
    )
};
