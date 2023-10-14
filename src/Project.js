import React from 'react'
import p1 from './images/p-chat.png'
import p2 from './images/p11.png'
import p3 from './images/p13.png'
import p4 from './images/p2.png'


import {AiFillGithub} from 'react-icons/ai'
import {HiArrowTopRightOnSquare} from 'react-icons/hi2'

const Project = () => {

  const Projects = [
    {title:"Chat App",img:p1,techs:["React","Tailwind css","Redux","Express","Mongo DB"],code:"https://github.com/Aakesh44/Chat-app",demo:"https://chatly-rho.vercel.app"},
    {title:"Music Player",img:p2,techs:["React","Tailwind css","Express","Mongo DB"],code:"https://github.com/Aakesh44/RYTHMS",demo:"https://rythms-music-player.vercel.app"},
    {title:"E-commerce",img:p3,techs:["React","Tailwind css","Express","Mongo DB"],code:"https://github.com/Aakesh44/Fake-Store-Client",demo:"https://fake-store-client.vercel.app"},
    {title:"Car Rental",img:p4,techs:["React","Tailwind css","Redux","Express","Mongo DB"],code:"https://github.com/Aakesh44/Go-Drive",demo:"https://aakesh44.github.io/Go-Drive"},

  ]
  return (
    <main className='Mainbg w-full my-10 py-10 lg:px-20 xl:px-56 select-none'>
      <header className=' py-2 mb-4'>
        <h1 className='text-amber-500 font-bold text-2xl lg:text-3xl xl:text-4xl text-center'>
          PROJECTS
        </h1>
      </header>

    
    {Projects.map((project,ind)=>(

      <section key={ind} className='mt-12 min-w-full md:flex border-b-4 border-white bg-pinksz-400'>

          <aside className=' h-72 md:h-96 w-full md:w-3/5 flex items-center justify-center bg-red-3000'>
              <img src={project.img} alt="" className=' h-64 md:h-80 w-11/12 drop-shadow'/>
          </aside>

          <aside className=' h-72 md:h-96 md:py-10 w-full flex flex-col md:w-2/5 bg-green-3000'>
              <h1 className=' text-center text-lg md:text-2xl font-semibold py-8'>{project.title}</h1>

              <div className='my-5 w-full bg-yellow-3000 flex flex-wrap justify-around'>
                {project.techs.map((tech,ind)=>(
                  <h1 key={ind} className=' bg-amber-500 text-white rounded-full m-2 px-4 py-1'>{tech}</h1>
                ))}
              </div>

              <footer className='w-full flex items-center justify-around h-20 mt-auto bg-cyan-4000'>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className=' bg-amber-400 p-2 md:p-3 rounded-sm'><AiFillGithub            className='h-6 w-6'/></a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className=' bg-amber-400 p-2 md:p-3 rounded-sm'><HiArrowTopRightOnSquare className='h-6 w-6'/></a>
              </footer>
          </aside>
      </section>

    ))}

 

    </main>
  )
}

export default Project

{/* 
      <section  className='Projects  overflow-hidden min-w-full   py-2 md:py-10  lg:flex  lg:px-5 xl:w-5/6 xl:mx-auto  xl:px-40'>

        <aside className='  bg-amber-400 h-2/3 lg:h-full w-full lg:w-2/3  flex flex-col justify-around  items-center border-r-4 border-white' data-aos="fa de-right" data-aos-duration="1000">
          <div className=' h-4/5 w-5/6 sm:w-4/6 xl:h-5/6   px-2 md:px-0 flex items-center justify-center'>
            <img src={p1} alt="" className=' h-4/6 xl:h-5/6 shadow-sm'/>
          </div>
          <div className=' h-1/5 mt-auto w-4/6 flex justify-evenly items-center bg-slate-3000 py-4 xl:py-3'>

            <a href="https://github.com/Aakesh44/Fake-Store-Shopping" className=' bg-fuchsia-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3  flex justify-center items-center   cursor-pointer py-2  rounded'>
              <button  target="_blank" rel="noopener noreferrer">
                <h1 className='text-lg text-center xl:text-xl font-semibold'>
                  <span className='hidden sm:inline'>Get</span> code
                </h1>
              </button>
            </a>
            <button className=' bg-fuchsia-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3 flex justify-center items-center    cursor-pointer  rounded py-2'>
              <a href="https://aakesh44.github.io/Fake-Store-Shopping/" target="_blank" rel="noopener noreferrer">
                <h1  className='text-lg xl:text-xl font-semibold'>
                  Open
                </h1>
              </a>
            </button>
          </div>
        </aside>
        <aside className=' bg-fuchsia-50 h-1/3 lg:h-full w-full lg:w-1/3   flex flex-col gap-4 justify-around items-center py-10' data-aos="fa de-left" data-aos-duration="1000">

          <div className=' text-fuchsia-700 font-bold h-1/2 text-center w-full bg-yellow-2000 text-xl md:text-2xl flex items-center justify-center xl:text-3xl'>
          <h1 className=''>E-commerce website </h1>

          </div>
          <div className=' text-black h-2/3 w-full flex flex-col justify-around items-center bg-yellow-2000 text-xs sm:text-base md:text-lg px-16 lg:px-8'>
            
            <h1 className=''>React</h1>
            <h1>tailwind CSS</h1>
            <h1>Express</h1>
            <h1>Mongo DB</h1>

          </div>

        </aside>
      </section>
      <section   className='Projects  overflow-hidden min-w-full    py-10  lg:flex  lg:px-5 xl:w-5/6 xl:mx-auto  xl:px-40'>

        <div className='  bg-green-50 h-1/2 lg:h-full w-full lg:w-2/3  flex flex-col justify-around  items-center border-r-4 border-white' data-aos="fa de-right" data-aos-duration="1000">
          <div className=' h-4/5 w-5/6 sm:w-4/6 xl:h-5/6   px-2 md:px-0 flex items-center justify-center'>
            <img src={p2} alt="" className=' h-4/6 xl:h-5/6 shadow-sm'/>
          </div>
          <div className=' h-1/5 mt-auto w-4/6 flex justify-evenly items-center bg-slate-3000 py-4 xl:py-3'>
            <button className=' bg-green-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3  flex justify-center items-center   cursor-pointer py-2  rounded'>
              <a href="https://github.com/Aakesh44/Go-Drive" target="_blank" rel="noopener noreferrer">
                <h1 className='text-lg text-center xl:text-xl font-semibold'>
                  <span className='hidden sm:inline'>Get</span> code
                </h1>
              </a>
            </button>
            <button className=' bg-green-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3 flex justify-center items-center    cursor-pointer  rounded py-2'>
              <a href="https://aakesh44.github.io/Go-Drive/" target="_blank" rel="noopener noreferrer">
                <h1  className='text-lg xl:text-xl font-semibold'>
                  Open
                </h1>
              </a>
            </button>
          </div>
        </div>
        <div className=' bg-green-50 h-1/3 lg:h-full w-full lg:w-1/3   flex flex-col gap-4 justify-around items-center py-10' data-aos="fa de-left" data-aos-duration="1000">

          <div className=' text-green-700 font-bold h-1/2 text-center w-full bg-yellow-2000 text-xl md:text-2xl flex items-center justify-center xl:text-3xl'>
          <h1 className=''>Car rental website </h1>

          </div>
          <div className=' text-black font-semibold h-2/3 w-full bg-yellow-2000 text-xs sm:text-base md:text-lg px-16 lg:px-8 xl:text-xl'>
            <h1 className='text-center'>Users can rent cars or bikes easily by following simple steps.</h1>
            <h1 className='text-center'>I used React and Tailwind CSS to build this website.</h1>

          </div>

        </div>
      </section>
      <section  className='Projects  overflow-hidden min-w-full   py-2 md:py-10  lg:flex  lg:px-5 xl:w-5/6 xl:mx-auto  xl:px-40'>

        <div style={{backgroundColor:"#141414"}} className='  bg-fuchsia-50 h-2/3 lg:h-full w-full lg:w-2/3  flex flex-col justify-around  items-center border-r-4 border-white' data-aos="fa de-right" data-aos-duration="1000">
          <div className=' h-4/5 w-5/6 sm:w-4/6 xl:h-5/6   px-2 md:px-0 flex items-center justify-center'>
            <img src={p1} alt="" className=' h-4/6 xl:h-5/6 shadow-sm'/>
          </div>
          <div className=' h-1/5 mt-auto w-4/6 flex justify-evenly items-center bg-slate-3000 py-4 xl:py-3'>
            <button className=' bg-fuchsia-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3  flex justify-center items-center   cursor-pointer py-2  rounded'>
              <a href="https://github.com/Aakesh44/Fake-Store-Shopping" target="_blank" rel="noopener noreferrer">
                <h1 className='text-lg text-center xl:text-xl font-semibold'>
                  <span className='hidden sm:inline'>Get</span> code
                </h1>
              </a>
            </button>
            <button className=' bg-fuchsia-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3 flex justify-center items-center    cursor-pointer  rounded py-2'>
              <a href="https://aakesh44.github.io/Fake-Store-Shopping/" target="_blank" rel="noopener noreferrer">
                <h1  className='text-lg xl:text-xl font-semibold'>
                  Open
                </h1>
              </a>
            </button>
          </div>
        </div>
        <div style={{backgroundColor:"#141414"}} className=' bg-fuchsia-50 h-1/3 lg:h-full w-full lg:w-1/3   flex flex-col gap-4 justify-around items-center py-10' data-aos="fa de-left" data-aos-duration="1000">

          <div className=' text-fuchsia-700 font-bold h-1/2 text-center w-full bg-yellow-2000 text-xl md:text-2xl flex items-center justify-center xl:text-3xl'>
          <h1 className=''>E-commerce website </h1>

          </div>
          <div className=' text-black font-semibold h-2/3 w-full bg-yellow-2000 text-xs sm:text-base md:text-lg px-16 lg:px-8 xl:text-xl'>
            <h1 className='text-center'>Users can buy various items in one place with a good user experience.</h1>
            <h1 className='text-center'>I used React and Tailwind CSS to build this website, and Axios for API interation.</h1>


          </div>

        </div>
      </section>
      <section  className='Projects  overflow-hidden min-w-full    py-10  lg:flex  lg:px-5 xl:w-5/6 xl:mx-auto  xl:px-40'>

        <div className='  bg-green-50 h-1/2 lg:h-full w-full lg:w-2/3  flex flex-col justify-around  items-center border-r-4 border-white' data-aos="fa de-right" data-aos-duration="1000">
          <div className=' h-4/5 w-5/6 sm:w-4/6 xl:h-5/6   px-2 md:px-0 flex items-center justify-center'>
            <img src={p2} alt="" className=' h-4/6 xl:h-5/6 shadow-sm'/>
          </div>
          <div className=' h-1/5 mt-auto w-4/6 flex justify-evenly items-center bg-slate-3000 py-4 xl:py-3'>
            <button className=' bg-green-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3  flex justify-center items-center   cursor-pointer py-2  rounded'>
              <a href="https://github.com/Aakesh44/Go-Drive" target="_blank" rel="noopener noreferrer">
                <h1 className='text-lg text-center xl:text-xl font-semibold'>
                  <span className='hidden sm:inline'>Get</span> code
                </h1>
              </a>
            </button>
            <button className=' bg-green-300 hover:scale-105 w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-2/3 flex justify-center items-center    cursor-pointer  rounded py-2'>
              <a href="https://aakesh44.github.io/Go-Drive/" target="_blank" rel="noopener noreferrer">
                <h1  className='text-lg xl:text-xl font-semibold'>
                  Open
                </h1>
              </a>
            </button>
          </div>
        </div>
        <div className=' bg-green-50 h-1/3 lg:h-full w-full lg:w-1/3   flex flex-col gap-4 justify-around items-center py-10' data-aos="fa de-left" data-aos-duration="1000">

          <div className=' text-green-700 font-bold h-1/2 text-center w-full bg-yellow-2000 text-xl md:text-2xl flex items-center justify-center xl:text-3xl'>
          <h1 className=''>Car rental website </h1>

          </div>
          <div className=' text-black font-semibold h-2/3 w-full bg-yellow-2000 text-xs sm:text-base md:text-lg px-16 lg:px-8 xl:text-xl'>
            <h1 className='text-center'>Users can rent cars or bikes easily by following simple steps.</h1>
            <h1 className='text-center'>I used React and Tailwind CSS to build this website.</h1>

          </div>

        </div>
      </section>
*/}