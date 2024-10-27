import React from 'react'
import {AiOutlineMail} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'></div>
        <div className='space-y-8'>
            <h2 className='text-5xl'data-aos="zoom-in-up">Get in Touch</h2>
            <p className='text-gray-600 text-[18px] pt-2'data-aos="zoom-in-up">
                Drop me a Line,give me a call,send me a message
                by submitting form
            </p>
            <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <AiOutlineMail size={30}/>xyz@gmail.com
            </div>
            <div className='flex gap-3 items-center'data-aos="zoom-in-up">
                <BsTelephone size={30}/>021-23456788
            </div>
           </div>
           <div className='space-y-8'>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='name'>Name</label>
                <input type="text" className='h-[20px] bg-transparent border border-accent'
                id='name'/>

            </div>
            <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='email'>EMAIL</label>
                <input type="text" className='h-[20px] bg-transparent border border-accent'
                id='email'/>
                </div>
                
                <div className='flex flex-col gap-1'data-aos="zoom-in-up">
                <label htmlFor='message'>Message</label>
                <textarea className='bg-transparent border border-accent'
                id='message' rows={4}/>
                 </div>
                 <button className='bg-accent p-2 px-3'data-aos="zoom-in-up">SEND</button>

           </div>
      
    </div>
  )
}

export default Contact
