import React from 'react'
import experience from '../data/experience.json'
import { Carousel } from 'flowbite-react';
import Experience from './Experience';
import next from '../assets/next.svg'
const ExperienceList = () => {
  return (
    <>

    <div className='w-screen min-h-[50vh]'>
    <Carousel  slideInterval={2000}>


    {
      experience.map((experience, index) => {
        return <Experience key={index} experience={experience} />
        
      })
    }
    </Carousel>
    </div>


    </>

    
  )

}

export default ExperienceList