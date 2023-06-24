import React from 'react'
import project11 from '../src/images/project11.png'

const Project = () => {
  return (
    <main className=' bg-white h-screen'>
      <div className=' py-2 mb-4'>
        <h1 className='Htext font-bold text-2xl lg:text-3xl xl:text-5xl text-center'>
          Projects
        </h1>
      </div>

      <section className=' min-w-full h-1/2 md:h-2/3  py-10  lg:flex  lg:px-5 xl:w-5/6 xl:mx-auto  xl:px-40'>

        <div className='Sbg h-full w-full lg:w-2/3  flex flex-col justify-around bg-slate-50 items-center border-r-4 border-white'>
          <div className=' h-4/5 w-4/6   px-2 md:px-0 flex items-center justify-center'>
            <img src={project11} alt="" className=' h-4/6'/>
          </div>
          <div className=' h-1/5 mt-auto w-4/6 flex justify-evenly items-center bg-slate-3000 py-4 xl:py-3'>
            <button className='Bbg w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-1/2   flex justify-center items-center   cursor-pointer py-2  rounded'>
              <h1 className='text-lg text-center xl:text-xl'>
                Get code
              </h1>
            </button>
            <button className='Bbg w-1/3 md:w-1/4 xl:w-1/4 xl:h-2/3 lg:h-1/2  cursor-pointer  rounded py-2'>
              <h1  className='text-lg xl:text-xl'>
                Demo
              </h1>
            </button>
          </div>
        </div>
        <div className='Sbg bg-slate-50 flex flex-col gap-4 justify-around items-centerh-full w-full lg:w-1/3 py-10'>

          <div className='Htext font-bold h-1/2 text-center w-full bg-yellow-2000 text-xl md:text-2xl flex items-center justify-center xl:text-3xl'>
          <h1 className=''>Online e-commerce website </h1>

          </div>
          <div className=' h-1/2 w-full bg-yellow-2000 text-lg md:text-xl px-16 lg:px-10 xl:text-2xl'>
            <h1 className='text-center'>Build with HTML | CSS | JS , front-end frame work React and css frame work Tailwind css and work on Api axios technologies .</h1>

          </div>

        </div>
      </section>
    </main>
  )
}

export default Project