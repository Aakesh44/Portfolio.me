import React, { useState,useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll';
import Resume from '../src/assets/Resume.pdf'
// import {animateScroll as scroll} from 'react-scroll';




const Header = () => {

  const [active,setActive]=useState(false)
  // const scrollToTop=()=>{
  //   scroll.scrollToTop();
  // }

  const [prevScroll,setPreScroll]=useState(0);
  const [visible,setVisible]=useState(true);

  const handleScroll=()=>{
    const currentScroll=window.pageYOffset;
    const scrollThreshold=window.innerHeight/2;

    setVisible((prevScroll>currentScroll) || currentScroll <scrollThreshold )
    setPreScroll(currentScroll)
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return()=>{
      window.removeEventListener('scroll',handleScroll)
    };
  });

  return (
    <section className={`Sbg px-8 py-3  md:px-7 md:py-3 lg:px-10 lg:py-4 xl:px-16 xl:py-5 fixed w-full transition duration-300 ease-in-out bg-white z-10 ${visible ? '':'translate-y-[-100%]'}`} >
      <div className=' flex justify-between  items-center mt-3 md:mt-0'>
        <div className=' mr-auto'>
          <h1 
            className='Htext cursor-pointer font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl'
            data-aos="fade-right" data-aos-duration="1000">
              Portfolio
          </h1>
        </div>

        <p onClick={()=>setActive(!active)}>
          {active===false ?
            <FiMenu className='Ibg md:hidden h-5 w-5 cursor-pointer'/>
            :
            <IoCloseSharp className='Ibg md:hidden h-5 w-5 cursor-pointer'/>
          }
        </p>

        <ul className='Htext hidden  md:inline-flex items-center ml-auto text-xl md:text-xl xl:text-2xl lg:font-bold'>
          <li className=' mx-3 xl:mx-10  cursor-pointer   underline-offset-4' >
            <Link 
              activeClass='active'
              to='Home'
              // spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Home
            </Link> 
          </li>
          <li className=' mx-3 xl:mx-10 cursor-pointer'>
            <Link 
              activeClass='active'
              to='Profile'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Profile
            </Link>
          </li>
          <li className=' mx-3 xl:mx-10 cursor-pointer'>
            <Link 
              activeClass='active'
              to='Skill'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Skills
            </Link>
          </li>
          <li className=' mx-3 xl:mx-10 cursor-pointer'>
            <Link 
              activeClass='active'
              to='Project'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Project
            </Link>
          </li>
          <li className='Bbg mx-3 rounded xl:mx-10 cursor-pointer text-xl md:text-xl xl:font-normal'>
            <a href={Resume} target="_blank" rel="noopener noreferrer">

              <button className=' px-2 py-1'>
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>

    {active &&
      <div 
        className='Sbg md:hidden mt-2 flex items-center justify-center bg-white py-4 absolute w-full left-0'
        data-aos="fade-right" data-aos-duration="1000">
        <ul className='Htext text-center'>
          <li className=' mb-3 text-lg cursor-pointer'>
          <Link 
              activeClass='active'
              to='Home'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >Home
            </Link>
          </li>
          <li className=' mb-3 text-lg cursor-pointer'>
          <Link 
              activeClass='active'
              to='Profile'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Profile
            </Link>
          </li>
          <li className=' mb-3 text-lg cursor-pointer'>
          <Link 
              activeClass='active'
              to='Skill'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Skills
            </Link>
          </li>
          <li className=' mb-3 text-lg cursor-pointer'>
          <Link 
              activeClass='active'
              to='Project'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Project
            </Link>
          </li>
          <li className='Bbg  rounded  cursor-pointer text-lg '>
            <a href={Resume} target="_blank" rel="noopener noreferrer">

              <button className=' px-2 py-1'>
                Resume
              </button>
            </a>
          </li>
        </ul>
      </div>
    }
    </section>
  )
}

export default Header