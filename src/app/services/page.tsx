import React from 'react';
import Link from 'next/link';

const Service: React.FC = () => {
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
              <Link href="/services" className='text-black hover:text-black-600 underline text-2xl cursor-pointer'>Services</Link>
            </li>
            <li>
              <Link href="/portfolio" className='text-blue-400 hover:text-black text-2xl cursor-pointer'>Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>

      <section className="flex flex-col items-center p-10 md:p-16 lg:px-32 space-y-12">
        <div className="max-w-xl">
          <div className="mb-8">
            <h1 className="text-pink-500 text-3xl font-bold mb-4">WEB DEVELOPMENT</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We build responsive, user-friendly websites and web applications that provide seamless experiences
              on any device. Our expertise includes JavaScript frameworks, HTML, CSS, and more, ensuring
              cutting-edge designs and optimal performance.
            </p>
          </div>
          <div className="mb-8">
            <h1 className="text-pink-500 text-3xl font-bold mb-4">GRAPHIC DESIGNING</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              From logos to complete branding solutions, our graphic design services bring your ideas to life.
              We specialize in Adobe Illustrator and Photoshop, crafting designs that visually communicate
              and captivate audiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service;
