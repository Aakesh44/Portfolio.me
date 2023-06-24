import React,{useEffect} from 'react'
import AOS from 'aos';
import ash from '../src/images/ash.png'

const Profile = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Set once option to true
    });
  }, []);
  return (
    <section className='Sbg bg-slate-50 py-10 flex flex-col md:flex-row md:py-16 mt-10  lg:px-20 xl:px-56'>
        <div className=' h-full flex justify-center items-center w-full md:w-2/5' data-aos="fade-right"  data-aos-duration="0">
                <img src={ash} alt="" className='Imgbg lg:h-56 lg:w-56 md:h-44 md:w-44 h-32 w-32  rounded-full border-4 center'/>
        </div>
        <div className='px-8 md:w-3/5 lg:px-12 mt-8 md:mt-0 flex flex-col justify-center' data-aos="fade-left" data-aos-duration="1000">
            <h1 className='Htext text-lg font-bold mb-3 md:text-2xl lg:mb-6 xl:text-3xl text-left px-8 md:px-0'>About me</h1>
            <p  className=' lg:text-lg  xl:text-xl px-8 md:px-0'>
                As a committed full-stack web development learner, I have a solid background in web development technologies and am continually looking for ways to improve my skills and knowledge on latest industrial technologies
            </p>
        </div>
    </section>
  )
}

export default Profile