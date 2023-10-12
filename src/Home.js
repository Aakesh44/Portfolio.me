import React from "react";
import ash from "../src/images/ash.png"

import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import {animateScroll as scroll} from 'react-scroll';
import { AiOutlineLinkedin,AiOutlineInstagram,AiOutlineGithub,AiOutlineMail} from "react-icons/ai";

const scrollToNextSection=()=>{
    scroll.scrollMore(window.innerHeight)
}

const Home=()=>{

    const socialmedia=[

        {link:"https://www.linkedin.com/in/aakesh44/",icon:<AiOutlineLinkedin className="text-amber-400 hover:scale-105 drop-shadow cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7  h-8 w-8"/>},
        {link:"https://www.instagram.com/aakesh_rex/",icon:<AiOutlineInstagram className="text-amber-400 hover:scale-105 drop-shadow cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7  h-8 w-8"/>},
        {link:"https://github.com/Aakesh44",icon:<AiOutlineGithub className="text-amber-400 hover:scale-105 drop-shadow cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7  h-8 w-8"/>},
        {link:"mailto:aakeshviswanathan@gmail.com",icon:<AiOutlineMail className="text-amber-400 hover:scale-105 drop-shadow cursor-pointer xl:h-8 xl:w-8 lg:h-7 lg:w-7  h-8 w-8"/>},

    ]
    


    return(
        <main className="h-screen   w-full  flex flex-col items-center" >

            <section   className="Mainbg my-auto   w-full h-5/6  flex flex-col md:flex-row justify-center items-center px-12 md:px-20 xl:px-44 py-20">

                <aside className=" h-3/5 w-full md:w-1/2 md:h-3/5 xl:h-4/5 flex items-center justify-center" data-aos="fade-up">
                    <div className="bg-amber-40 p-1 border-gray-300 lg:h-72 lg:w-72 md:h-56 md:w-56 h-48 w-48  border-4 rounded-full flex items-center justify-center overflow-hidden" data-aos="flip-right">
                    <img src={ash} alt="" className=' border-amber-300 w-full h-full hover:scale-95  rounded-full border-4 center'/>
                    </div>
                </aside>

                <aside className=" bg-gr een-400 h-2/5 w-full md:w-1/2 md:h-3/5 lg:h-4/5 md:py-14 lg:py-20  flex flex-col  items-center " data-aos="fade-up">
                    <div className=" flex gap-3 md:gap-6 bg-gr ay-300  flex-col items-center md:items-start h-4/5  justify-center bg-re d-300   w-11/12">
                        <h1 className=" text-black font-bold text-center md:text-start text-2xl md:text-3xl lg:text-4xl xl:text-5xl "> I'm AAKESH</h1>
                        <p className="text-black  text-center md:text-start font-bold text-xl md:text-2xl lg:text-3xl xl:text-4xl whitespace-nowrap">Enthusiastic MERN Stack Developer</p>
                    </div>
                    <div className=" flex gap-8  items-center bg-b lue-400 mx-auto   mt-auto h-1/2 lg:h-1/5 w-11/12 justify-evenly md:justify-normal ">

                        {socialmedia.map(media=>
                            <a href={media.link} target="_blank" rel="noopener noreferrer">
                                {media.icon}
                            </a>
                            )}

                    </div>
                </aside>
            </section>

            <div  className="Mainbg mt-auto  w-full flex flex-col  md:justify-center h-1/6 ">
                {/* <h1 className="Htext mx-auto mt-3 text-lg font-semibold md:text-xl lg:text-2xl">scroll down</h1> */}
               
                <MdOutlineKeyboardDoubleArrowDown 
                    className=" text-amber-500 mx-auto  animate-bounce delay-1000 cursor-pointer mt-6 h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8"
                    onClick={scrollToNextSection}/>

           

            </div>

           
        </main>
    )
}

export default Home