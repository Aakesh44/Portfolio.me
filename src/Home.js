import React from "react";
import banner from "../src/images/banner.png"
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {animateScroll as scroll} from 'react-scroll';
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from "react-icons/ai";

const scrollToNextSection=()=>{
    scroll.scrollMore(window.innerHeight)
}

const Home=()=>{
    return(
        <main className="h-screen w-full flex flex-col items-center" style={{backgroundColor:'#ffff'}}>
            {/* <img src={bg2} alt="" className="min-w-full min-h-screen" /> */}
            <div className="my-auto  w-full h-5/6  flex flex-col md:flex-row justify-center items-center px-12 md:px-20 xl:px-44 py-20">
                <div className=" h-2/5 w-5/6 md:w-1/2 md:h-3/5 xl:h-4/5  flex flex-col  items-center ">
                    <div className=" flex gap-3 md:gap-6  flex-col items-start h-4/5  justify-center   w-9/12">
                        <h1 className="  font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl  ">Hello i'm</h1>
                        <h1 className=" Htext  font-bold text-2xl md:text-4xl lg:text-5xl xl:text-6xl ">AAKESH</h1>
                        <p className="Htext font-bold text-sm md:text-2xl lg:text-2xl xl:text-3xl  ">enthusiastic learner of full-stack web development</p>

                    </div>
                    <div className=" flex gap-8  items-center  mt-auto h-1/5 w-9/12 ">
                        <a href="https://www.linkedin.com/in/aakesh44/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineLinkedin  className="Htext cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5"/>
                        </a>
                        <a href="https://www.instagram.com/aakesh_rex/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineInstagram className="Htext cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5"/>
                        </a>
                        <a href="https://github.com/Aakesh44" target="_blank" rel="noopener noreferrer">
                            <AiOutlineGithub className="Htext cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5"/>
                        </a>
                        <a href="mailto:aakeshviswanathan@gmail.com">
                            <AiOutlineMail className="Htext cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7 md:h-6 md:w-6 h-5 w-5"/>
                        </a>
                    </div>
                </div>
                <div className="h-3/5 w-5/6 md:w-1/2 md:h-3/5 xl:h-4/5 flex items-center justify-center">
                    <img src={banner} alt="" className=" md:h-full md:w-full  h-5/6 w-5/6" />
                </div>
            </div>

            <div className="mt-auto  w-full flex flex-col  justify-center h-1/6 ">
                <h1 className=" mx-auto mt-3 text-lg font-semibold md:text-xl lg:text-3xl">scroll down</h1>
               
                <MdOutlineKeyboardDoubleArrowDown 
                    className="Ibg mx-auto animate-bounce cursor-pointer mt-6 h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8"
                    onClick={scrollToNextSection}/>

           

            </div>
           
        </main>
    )
}

export default Home