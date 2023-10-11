import React from 'react'
import mongodb from './images/mongodb.svg'
import node from './images/node.svg'
import react from './images/reactjs.svg'
import express from './images/express.svg'

const Tech = () => {
  return (
    <main className='Mainbg w-full mt-10 lg:px-20 xl:px-56'>
        <h1 className=' py-10 text-amber-500 font-bold mx-auto text-xl md:text-2xl xl:text-3xl text-center'>My Tech Stack</h1>

        <main className='w-full md:py-10 md:flex bg-green-4000'>

            <section className='mx-auto w-4/5 md:w-1/2 flex flex-wrap' data-aos="fade-right" data-aos-duration="1000">

                <div className='w-1/2 h-36 sm:h-44 md:h-52 flex items-center justify-center  -400'><img src={react}   className=" h-2/3 aspect-square drop-shadow-xl"  alt="" /></div>
                <div className='w-1/2 h-36 sm:h-44 md:h-52 flex items-center justify-center  -400'><img src={express} className=" h-2/3 aspect-square drop-shadow-xl" alt="" /></div>
                <div className='w-1/2 h-36 sm:h-44 md:h-52 flex items-center justify-center  -400'><img src={mongodb} className=" h-2/3 aspect-square drop-shadow-xl" alt="" /></div>
                <div className='w-1/2 h-36 sm:h-44 md:h-52 flex items-center justify-center  -400'><img src={node}    className=" h-2/3 aspect-square drop-shadow-xl" alt="" /></div>

            </section>

            <section className='mx-auto pb-10 md:pb-0 w-4/5 md:w-1/2 bg-blue-4000 flex flex-col gap-1' data-aos="fade-left" data-aos-duration="1000">
                <div className='w-full h-1/4'>
                    <p className=' text-sm md:text-base text-gray-900'> <span className=' text-lg md:text-xl font-semibold text-gray-800'>React </span> The modern web experience is a seamless stream of data. React offers many tools for creating data-rich, stateful, single-page applications.</p>
                </div>
                <div className='w-full h-1/4'>
                    <p className=' text-sm md:text-base text-gray-900'> <span className=' text-lg md:text-xl font-semibold text-gray-800'>Express </span> Data-intensive applications need a scaleable, non Blocking solution. Express offers a rigid unopinionated set of tools to build API foundations.</p>
                </div>
                <div className='w-full h-1/4'>
                    <p className=' text-sm md:text-base text-gray-900'> <span className=' text-lg md:text-xl font-semibold text-gray-800'>MongoDB </span> With Flexible document schemas, High speed, and Scalability, MongoDb is an enjoyable database that is easy to work with within various situations.</p>
                </div>
                <div className='w-full h-1/4'>
                    <p className=' text-sm md:text-base text-gray-900'> <span className=' text-lg md:text-xl font-semibold text-gray-800'>Node </span> An asynchronous event-driven JavaScript runtime built on top of Chromes V8 Engine offers Fast, lightweight, and efficient. JavaScript's best friend.</p>
                </div>
            </section>
        </main>
    </main>
  )
}

export default Tech