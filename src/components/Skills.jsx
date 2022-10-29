import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import react_1 from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import  XD from '../assets/XD.png';
import illustrator from '../assets/Illustrator.png';
import photoshop from '../assets/Photoshop.png';
import Premiere from '../assets/Premiere.png';
import InDesign from '../assets/InDesign.png';

const Skills = () => {
    return (
      <div name='skills' className='w-full h-screen bg-[#C191A1] text-gray-200'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
                <p className='py-4'>// These are the technologies I've worked with</p>
            </div>
  
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={CSS} alt="css icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={react_1} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={XD} alt="XD icon" />
                    <p className='my-4'>XD</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={illustrator} alt="Illustrator icon" />
                    <p className='my-4'>Illustrator</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={photoshop} alt="Photoshop icon" />
                    <p className='my-4'> Photoshop</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={Premiere} alt="Premiere icon" />
                    <p className='my-4'>Premiere</p>
                </div>
                <div className='shadow-md shadow-[#2F004F] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto py-5' src={InDesign} alt="InDesign icon" />
                    <p className='my-4'>InDesign</p>
                </div>   
            </div>
         </div>
       </div>
      
    
  )
}

export default Skills
