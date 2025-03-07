import React from 'react';
import '../assets/save.jpg'
import bgImage from '../assets/rifi.jpg';
const Hero = ({Title}) => {
    return (
        <div>
        <div className='overflow-hidden'>
        <div className='bg-fixed bg-cover bg-center bg-no-repeat h-[100vh] w-full flex flex-col items-center justify-center' style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
          url(${bgImage})`}}>
         <div>
          <h2 className='text-white lg:text-6xl text-3xl text-center'>{Title}</h2>
         </div>
        </div>
        </div>
        </div>
    );
};

export default Hero;