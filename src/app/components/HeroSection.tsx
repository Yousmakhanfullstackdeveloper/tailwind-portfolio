import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12 pt-[100px]">
                <div className="col-span-7 place-self-center text-center sm:text-left">
            <h1 className="text-blue-950 mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Hello  Dear's, I'm {""}</span>
                 Yousma Khan
            </h1>
            <p className="text-black text-base sm:text-lg  mb-6 g:text-xl">
                I'm passionate Frontend-web-developer. I specialize in crafting responsive, inutiative, and visually stunning digital experiences. With a storng
                foundation in HTML, CSS, and JavaScript, I excel in transforming designs into functional and engaging web applications.
            </p>
            <div>
               <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Hire Me
               </button>
               <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-600 text-white mt-3">
               <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2"> Download CV </span>
               </button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-5px lg:mt-0 pt-[10px]">
                <div className="rounded-full bg-[#1818181] w-[150px] h-[150px] lg:w-[500px] lg:h-[400px] relative">
            <Image src="/images/WhatsApp Image 2025-01-10 at 11.32.49_0035c53d.jpg" alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
            width={300}
            height={300}
            />
            </div>
            </div>
            </div>
        </section>
    )
};

export default HeroSection;