import React, { useState,useEffect } from 'react'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-scroll';
import RESUME1 from '../src/assets/RESUMEOpenTurf.pdf'
import sunglasses from './images/sunglasses.png'

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
    const scrollThreshold=window.innerHeight/8;

    setVisible((prevScroll>currentScroll) || currentScroll <scrollThreshold )
    setPreScroll(currentScroll)
  }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);

    return()=>{
      window.removeEventListener('scroll',handleScroll)
    };
  });
  // 

  return (
    <section style={{maxWidth:'100vw'}}  className={`Mainbg w-full shadow-sm fixed  px-8 py-3  md:px-7 md:py-3 lg:px-10 lg:py- xl:px-16 xl:py-  transition duration-300 ease-in-out bg-white z-10 ${visible ? '':'translate-y-[-100%]'}`} >
      <div className=' flex justify-between  items-center mt-3 md:mt-0'>
        <div className=' h-full  mr-auto'>
          <h1 
            className='Htext cursor-pointer font-bold text-2xl md:text-4xl lg:text-4xl xl:text-4xl'
            >
              <Link  
              activeClass='active'
              to='Home'
              smooth={true}
              offset={-70}
              duration={500}>
                <img src={sunglasses} alt="" className=' h-10 hover:rotate-180'  />
              </Link>
          </h1>
          {/* <img src={logo} alt="" className=' bg-blend-screen'/> */}
        </div>

        <p onClick={()=>setActive(!active)}>
          {active===false ?
            <FiMenu className=' text-amber-600 md:hidden h-5 w-5 cursor-pointer'/>
            :
            <IoCloseSharp className=' text-amber-600 md:hidden h-5 w-5 cursor-pointer'/>
          }
        </p>

        <ul className=' text-amber-500 hidden  md:inline-flex items-center ml-auto text-xl md:text-xl xl:text-xl lg:font-bold'>
          <li className=' mx-3 xl:mx-7  cursor-pointer   underline-offset-4' >
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
          <li className=' mx-3 xl:mx-7 cursor-pointer'>
            <Link 
              activeClass='active'
              to='Profile'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Profile
            </Link>
          </li>
          <li className=' mx-3 xl:mx-7 cursor-pointer'>
            <Link 
              activeClass='active'
              to='Skill'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Skills
            </Link>
          </li>
          <li className=' mx-3 xl:mx-7 cursor-pointer'>
            <Link 
              activeClass='active'
              to='Project'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}>Project
            </Link>
          </li>
          <li className=' bg-amber-500 text-white mx-3 rounded xl:mx-7 cursor-pointer text-xl md:text-xl xl:font-normal'>
            <a href={RESUME1} target="_blank" rel="noopener noreferrer">

              <button className=' px-2 py-1'>
                Resume
              </button> 
            </a>
          </li>
        </ul>
      </div>

    {active &&
      <div 
        className='Mainbg md:hidden mt-2 flex items-center justify-center bg-white py-4 absolute w-full left-0'
        data-aos="fade-right" data-aos-duration="1000">
        <ul className=' text-amber-500 text-center'>
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
          <li className='bg-amber-500 text-white  rounded  cursor-pointer text-lg '>
            <a href={RESUME1} target="_blank" rel="noopener noreferrer">

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