import React from 'react'
import ad3 from '../src/images/ad3.png'

const What = () => {
  return (
    <section style={{minHeightheight:'55vh'}} className='Mainbg bg-green- 400 w-full py-10 flex flex-col md:flex-row md:py-16 my-10 mb-16  lg:px-20 xl:px-56'>
        <div className='px-8 md:w-3/5 lg:px-12 mt-8 md:mt-0 flex flex-col justify-center' data-aos="fade-right" data-aos-duration="1000">
            <h1 className=' text-amber-500 text-lg font-bold mb-3 md:text-2xl lg:mb-6 xl:text-4xl text-left px-8 md:px-0'>What can i do for you</h1>
            <p  className=' lg:text-lg  xl:text-xl px-8 md:px-0'>

              I have the expertise to craft exceptional websites with a outstanding user interfaces and responsive design I excel in backend development, where I adapt to work with RESTful API and databases. My skills allows me to build strong backend systems for websites, complete with user authentication, ensuring smooth and secure user experience

            </p>
        </div>
        <div className=' h-full bg-re d-700 flex justify-center bg-gre en-400 items-center w-full md:w-2/5' data-aos="fade-left"  data-aos-duration="0">
         
                <img src={ad3} alt="" className=' lg:h-5/6 lg:w-full md:h-5/6 md:w-full h-4/5 w-4/5 round ed-full   borde center bg-'/>
        </div>
    </section>
  )
}

export default What