import React,{useEffect} from 'react'
import AOS from 'aos';
import newinner from '../src/images/newinner.png'

const Profile = () => {
  useEffect(() => {
    AOS.init({
      once: true, // Set once option to true
    });
  }, []);
  return (
    <section  className='Mainbg w-full py-10 flex flex-col md:flex-row md:py-16 mt-10  lg:px-20 xl:px-56'>
        <div className='px-8 md:w-3/5 lg:px-12 mt-8 md:mt-0 flex flex-col justify-center' data-aos="fade-right" data-aos-duration="1000">
            <h1 className=' text-amber-500 text-lg font-bold mb-3 md:text-2xl lg:mb-6 xl:text-3xl text-left px-8 md:px-0'>About me</h1>
            <p  className=' text-sm lg:text-lg  xl:text-xl px-8 md:px-0'>
              As a MERN stack developer, I have a solid understanding of MERN technologies, and I'm ready to work with passion in your organization. I'm continuously looking for ways to improve my knowledge and skills in web development.
            </p>
        </div>
        <div className=' h-full flex justify-center bg-gre en-400 items-center w-full md:w-2/5' data-aos="fade-left"  data-aos-duration="0">
         
                <img src={newinner} alt="" className=' lg:h-56 lg:w-56 md:h-44 md:w-44 h-32 w-32 drop-shadow-lg'/>
        </div>
    </section>
  )
}

export default Profile