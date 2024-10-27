import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div><h1 className='text-2xl'data-aos="zoom-in-up"><b>TECHNOLOGIES I WORK WITH</b></h1>
        <p className='text-black text-xl'>I have a solid foundation in web development,
            specialising in HTML/CSS JAVASCRIPT.My framework extends 
            to React and Next.js to create dynamic and user friendly frameworks.
            I am also proficient in TailwindCss</p>
        </div>
        <div>
            <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'></div>
        <div className='space-y-2'>
            <h1 data-aos="zoom-in-up"><b>Typescript</b></h1>
            <h1 data-aos="zoom-in-up"><b>HTML/CSS</b></h1>
            <h1 data-aos="zoom-in-up"><b>Next.Js</b></h1>

        </div>
        <div className='space-y-2'>
            <h1 data-aos="zoom-in-up"><b>Tailwind</b></h1>
            <h1 data-aos="zoom-in-up"><b>CSS</b></h1>
            <h1 data-aos="zoom-in-up"><b>REACT</b></h1>

        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Skills
