import React,{useEffect} from 'react'
import css from '../src/images/css-3.png'
import html from '../src/images/html-5.png'
import js from '../src/images/js.png'
import tailwind from "./images/tailwind.svg";
import redux from './images/redux.svg'
import vscode from './images/vscode.svg'
import github from '../src/images/github.png'
import AOS from 'aos'


const Skill = () => {

  const mongoose = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"
  useEffect(() => {
    
      AOS.init({
        once: true, // Set the desired duration for the animation
      });
    
  }, []);

  const Icons = [html,css,js,tailwind,redux,mongoose,github,vscode]

  return (
    <main className='Mainbg mt-10 w-full px-10 xl:px-40' >
    
      <h1 className=' py-10 text-amber-500 font-bold mx-auto text-xl md:text-2xl xl:text-3xl text-center'>Everything Else</h1>

      <section className='w-full md:py-10 flex flex-wrap bg-green-4000'>

        {Icons.map(icon=>(
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={icon} alt="" className=' h-2/5 aspect-square drop-shadow-xl'/></div>
        ))}

          {/* <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={css} alt=""      className=' h-2/5 aspect-square drop-shadow-xl'/></div>
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={js} alt=""       className=' h-2/5 aspect-square drop-shadow-xl'/></div>
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={tailwind} alt="" className=' h-2/5 aspect-square drop-shadow-xl'/></div>
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={redux} alt=""    className=' h-2/5 aspect-square drop-shadow-xl'/></div>
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={mongoose} alt="" className=' h-2/5 aspect-square drop-shadow-xl'/></div>
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={github} alt=""   className=' h-2/5 aspect-square drop-shadow-xl'/></div>
          <div className='w-1/4 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000"><img src={vscode} alt=""   className=' h-2/5 aspect-square drop-shadow-xl'/></div> */}

      </section>

    </main>
  )
}

export default Skill

