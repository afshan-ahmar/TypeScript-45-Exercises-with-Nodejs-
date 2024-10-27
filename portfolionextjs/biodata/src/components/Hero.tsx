import React from 'react'
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/banner.jpg)] bg-cover'
    style={{backgroundSize:"35%",backgroundPosition:"left 100px top 100px"}}
    >
    
    <Navbar />
    <div className='container grid lg:grid-cols-2 h-[calc(50vh-450px)]'>

        <div className='hidden lg:block'></div>
             <div className='text-[60px] sm:text-[100px] font-bold leading-tight flex justify-center items-center text-black'>           
                <div>
                <p data-aos="zoom-in-up" >I 'm</p>
                <p data-aos="zoom-in-up">Afshan</p>
                <p data-aos="zoom-in-up">Ahmar</p>
             </div>
             </div>
</div>
    </div>
    
  )
}

export default Hero;
