"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = () => {
  return (
    <div className="pt-[80px] bg-[#f8f8f8] ">
      <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 '>
      <div className='flex flex-wrap items-center justify-between mx-auto px-10 py-2'>
      <Link href="/" className='text-2xl md:text-5xl text-black font-semibold'>Logo</Link>
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-5'>
        <li><Link href="/about" className='text-black hover:text-black underline text-2xl cursor-pointer'>About</Link></li>
        <li><Link href="/services" className='text-blue-400 hover:text-black text-2xl cursor-pointer'>Services</Link></li>
        <li><Link href="/portfolio" className='text-blue-400 hover:text-black text-2xl cursor-pointer'>Portfolio</Link></li>
        </ul>
        </div>
      </nav>
      <section className='text-black'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
          <Image src="/images/hero.jpg" alt='image' width={500} height={500} />
          <div>
            <h2 className='text-4xl font-bold mb-4'>About Me</h2>
            <p className='text-base lg:text-lg'>
              I’m a passionate frontend developer with a talent for translating creative ideas into clean, functional, and visually striking web experiences. 
              With a solid foundation in HTML, CSS, and JavaScript, and expertise in modern libraries and frameworks like React and Next.js, 
              I build interfaces that are not only beautiful but also intuitive and responsive. I thrive on tackling complex design challenges and continually learning the latest industry trends to enhance my craft. 
              Let’s create something impactful together!
            </p>
            <div className='flex-row mt-8'>
              <span className='mr-3 font-extrabold text-pink-500 border-b border-purple-500'>
                Skills
              </span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutSection;
