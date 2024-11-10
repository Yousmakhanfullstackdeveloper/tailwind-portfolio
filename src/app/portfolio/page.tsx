import React from 'react'
import Link from 'next/link';

const portfolio = () => {
  return (
    <div className="pt-[80px] bg-[#f8f8f8]">
      <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 shadow-md'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-10 py-2'>
          <Link href="/" className='text-2xl md:text-5xl text-black font-semibold'>Logo</Link>
          <ul className='flex space-x-8 p-4 md:p-0 md:flex-row md:mt-0'>
            <li>
              <Link href="/about" className='text-blue-400 hover:text-black text-2xl cursor-pointer'>About</Link>
            </li>
            <li>
              <Link href="/services" className='text-blue-400 hover:text-black-600  text-2xl cursor-pointer'>Services</Link>
            </li>
            <li>
              <Link href="/portfolio" className='text-black hover:text-black underline text-2xl cursor-pointer'>Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
      <section className="bg-[#f8f8f8] py-16 px-4 lg:px-20">
  <div className="space-y-16 max-w-5xl mx-auto">
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-pink-500 mb-2">PROJECT 1</h1>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">STORY BOARDING WEBSITE</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        This platform provides children with a fun and engaging way to experience storytelling through visuals. 
        Using storyboards composed of colorful, expressive pictures, kids can follow along and understand narratives 
        step-by-step, making it easier for them to retell the story in their own words. Each story section features 
        illustrations that capture key moments, helping children with vocabulary, sequencing, and memory skills. 
        Interactive features, like simple animations or prompts, encourage kids to think critically about what they 
        see and share their interpretations, fostering creativity and language development in an enjoyable, visual way.
      </p>
      <a href="https://dilkashmaryam.github.io/storyboarding-webiste/" className="text-blue-500 hover:underline">
        Project link
      </a>
    </div>

    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-pink-500 mb-2">PROJECT 2</h1>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">MEMORY GAME</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        The Memory Game is a fun, interactive challenge designed to test and improve memory skills. The objective 
        is to find matching pairs of cards within a grid, with each successful match reducing the number of cards 
        remaining. Built with engaging visuals, it offers various levels of difficulty and keeps track of user attempts, 
        making it both entertaining and mentally stimulating. The game is ideal for players of all ages looking to 
        enhance memory recall in a playful setting. The Memory Game project is an engaging, interactive game built 
        using HTML, CSS, and JavaScript. In this project I've collaborated with my hardworking team.
      </p>
      <a href="https://dilkashmaryam.github.io/memory-game/" className="text-blue-500 hover:underline">
        Project link
      </a>
    </div>

    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-pink-500 mb-2">PROJECT 3</h1>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">RESUME BUILDER</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        The Resume Builder project is a web application designed to help users create, customize, and manage their 
        resumes effortlessly. Built with dynamic features, it allows users to input their details into a clean, 
        user-friendly form and generates a well-structured resume in real-time. Users can also download their resume 
        in PDF format or share a unique link for easy access and sharing. Each resume has a unique path, ensuring 
        privacy and easy identification, making it a powerful tool for job seekers to showcase their skills in a 
        professional format.
      </p>
      <a href="https://dilkashmaryam.github.io/Shareable-Link-Resume/" className="text-blue-500 hover:underline">
        Project link
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default portfolio
