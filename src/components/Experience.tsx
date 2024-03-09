import React from 'react'
import next from '../assets/next.svg'

const Experience = ({experience}) => {
  return (
    <div className='w-[100vw] font-urbanist'> 
        <div className='flex flex-col md:flex-row items-center justify-between w-10/12 gap-2 mx-auto'> 
        <div className='md:w-5/12 rounded-md'>
            <img className='w-full h-auto' src={experience.image} alt={experience.title} />
        </div>
        <div className='md:w-7/12 md:min-h-[30vh] flex flex-col justify-between py-4 px-6 bg-secondary rounded-md'>
            <h3 className='font-black text-primary text-6xl mb-4 text-right'>{experience.year}</h3>
            <p className='my-2 md:my-8 text-md md:text-[20px] font-light'>{experience.description}</p>
            <div className='flex items-end justify-between'>
                <h2 className='font-semibold text-2xl md:text-3xl'>{experience.title}</h2>
                <a href={experience.link} target='_blank'> <img className='-rotate-45 w-12'  src={next}/></a>

            </div>
        </div>  

    </div>

    </div>
  
  )
}

export default Experience