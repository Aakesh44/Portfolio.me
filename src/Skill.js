import React,{useEffect, useState} from 'react'
import css from '../src/images/css-3.png'
import html from '../src/images/html-5.png'
import js from '../src/images/js.png'
import tailwind from "./images/tailwind.svg";
import redux from './images/redux.svg'
import vscode from './images/vscode.svg'
import github from '../src/images/github.png'
import npm from './images/npm.svg'
import postman from './images/postman.svg'
import typescript from './images/typeScript.svg'
import nextjs from './images/nextjs-3.svg'


import AOS from 'aos'


const Skill = () => {

  useEffect(() => {
    
      AOS.init({
        once: true, 
      });
    
  }, []);

  const mongoose = "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongoose/mongoose.png"

  const Icons = [
    {img:html,name:"HTML"},
    {img:css,name:"CSS"},
    {img:js,name:"Java Script"},
    {img:typescript,name:"TypeScript"},
    // {img:nextjs,name:"Next js"},
    {img:tailwind,name:"tailwind css"},
    {img:redux,name:"Redux"},
    {img:mongoose,name:"Mongoose"},
    {img:github,name:"Git hub"},
    {img:npm,name:"npm"},
    {img:postman,name:"Postman"},
    // {img:vscode,name:"VS code"},
]

  const [popuptext,setPopUp] = useState(null)

  return (
    <main className='Mainbg mt-10 w-full px-10 xl:px-40' >
    
      <h1 className=' py-10 text-amber-500 font-bold mx-auto text-xl md:text-2xl xl:text-3xl text-center'>Everything Else</h1>

      <section className='w-full md:py-10 flex flex-wrap bg-green-4000'>

        {Icons.map((icon,ind)=>(
          <div key={ind} className=' w-1/3  sm:w-1/5 h-32 md:h-44 bg-pink-501 flex items-center justify-center' data-aos="zoom-in" data-aos-duration="1000">

            <img src={icon.img} onMouseOver={()=>setPopUp(icon.name)} onMouseLeave={()=>setPopUp(null)} alt="" className=' h-2/5 relative aspect-square drop-shadow-xl'/>

            {popuptext === icon.name && <span className=' absolute transition -top-1 md:top-1 text-sm font-medium bg-amber-500 p-1 px-2 text-white rounded-md'>
              {icon.name}
              <div className=' absolute right-1/2 translate-x-1/2 h-2 w-2 rotate-45 bg-amber-500'></div>
            </span> }

          </div>
        ))}

      </section>

    </main>
  )
}

export default Skill

