import React,{useEffect} from 'react'
import css from '../src/images/css-3.png'
import html from '../src/images/html-5.png'
import js from '../src/images/js.png'
import react from '../src/images/react.png'
// import tailwind from '../src/images/tailwind.png'
import { SiTailwindcss } from "react-icons/si";
import github from '../src/images/github.png'
import AOS from 'aos'
// import { AiFillHtml5 } from "react-icons/ai";
// // import { BiLogoCss3 } from "react-icons/bi";
// import { IoLogoCss3 } from "react-icons/io";
// import { IoLogoCsIoLogoJavascripts3 } from "react-icons/io";

const Skill = () => {

  useEffect(() => {
    
      AOS.init({
        once: true, // Set the desired duration for the animation
      });
    
  }, []);

  return (
    <section 
    className=' bg-white md:flex md:flex-wrap py-10 px-10 xl:px-40' >
    

      <section className=' h-72 xl:h-96 lg:h-80 md:h-72  my-2 p-4 md:w-3/5 md:mx-auto lg:w-1/3'>
        <div className=' bg-slate-50 xl:px-10 h-full rounded-lg flex flex-col justify-evenly' data-aos={window.innerWidth < 768 ? 'fade-up' : window.innerWidth < 1024 ? undefined : window.innerWidth >= 1024 ? 'fade-right':undefined} data-aos-duration={window.innerWidth < 768 ? '000' : undefined}>
          <h1 className='Htext font-bold mx-auto text-xl md:text-2xl xl:text-3xl text-center'>  Languages</h1>
          <div className='Sbg  h-20 w-full md:h-28 lg:h-32 xl:h-36  flex items-center justify-evenly'>
            <img src={html} alt="" className='h-12 w-12 md:h-3/5 md:w-1/6' />
            <img src={css} alt="" className=' h-12 w-12 md:h-3/5 md:w-1/6' />
            <img src={js} alt="" className=' h-12 w-12 md:h-3/5 md:w-1/6' />
          </div>
        </div>
      </section>
      <section className=' h-72 xl:h-96 lg:h-80 md:h-72  my-2 p-4 md:w-1/2 lg:w-1/3'>
        <div className=' bg-slate-50 xl:px-10 h-full rounded-lg flex flex-col justify-evenly' data-aos={window.innerWidth < 768 ? 'fade-up' : window.innerWidth < 1024 ? 'fade-right' :undefined} data-aos-duration={window.innerWidth < 768 ? '0' : undefined}>
          <h1 className='Htext font-bold mx-auto text-xl md:text-2xl xl:text-3xl'>Frameworks</h1>
          <div className='Sbg  h-20 md:h-28 lg:h-32 xl:h-36  flex items-center justify-evenly'>
            <img src={react} alt="" className=' h-12 w-12 md:h-3/5 md:w-1/6' />
            {/* <img src={tailwind} alt="" className=' h-12 w-12 md:h-3/5 md:w-1/6' /> */}
            <SiTailwindcss className=' text-cyan-500 h-12 w-12 md:h-3/5 md:w-1/6'/>
          </div>
        </div>
      </section>
      <section className=' h-72 xl:h-96 lg:h-80 md:h-72  my-2 p-4 md:w-1/2 lg:w-1/3'>
        <div className=' bg-slate-50 xl:px-10 h-full rounded-lg flex flex-col justify-evenly' data-aos={window.innerWidth < 768 ? 'fade-up' : window.innerWidth >= 768 ? 'fade-left' : undefined} data-aos-duration={window.innerWidth < 768 ? '00' : undefined}>
          <h1 className='Htext font-bold mx-auto text-xl md:text-2xl xl:text-3xl'>Web technologies</h1>
          <div className='Sbg  h-20 md:h-28 lg:h-32 xl:h-36  flex items-center justify-evenly'>
            <img src={github} alt="" className=' h-12 w-12 md:h-3/5 md:w-1/6' />
          </div>
        </div>
      </section>

    </section>
  )
}

export default Skill