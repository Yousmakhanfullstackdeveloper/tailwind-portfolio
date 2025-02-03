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
      <h3 className="text-xl font-semibold text-gray-800 mb-4">PAK-WHEEL WEBSITE</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
     I created a practice website with strong HTML and CSS, ensuring a well-balanced design using Flexbox. The project showcases clean code, responsive layouts, and a modern user interface. It reflects my skills in front-end development and attention to detail.
      </p>
      <a href="https://github.com/Yousmakhanfullstackdeveloper/pakwheel.git" className="text-blue-500 hover:underline">
        Project link
      </a>
    </div>

    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-3xl font-bold text-pink-500 mb-2">PROJECT 2</h1>
      <h3 className="text-xl font-semibold text-gray-800 mb-4"></h3>
      <p className="text-gray-600 leading-relaxed mb-4">
      🌟 "Fresh-Fruit Mango is a vibrant and user-friendly website designed to showcase the richness of mangoes. Built using HTML and CSS, this website highlights the nutritional benefits, varieties, and seasonal availability of the king of fruits."

Features:
🍋 "A clean and modern design with smooth animations and a responsive layout for a seamless browsing experience."
🍊 "Engaging UI with high-quality images and interactive hover effects to enhance user engagement."
🍍 "Fully optimized for mobile and desktop viewing, ensuring accessibility for all users."

Objective:
🥭 "The goal of this website is to provide mango lovers with detailed information, delicious recipes, and a platform to explore the beauty of this tropical fruit."
      </p>
      <a href="https://github.com/Yousmakhanfullstackdeveloper/fresh-fruit.git" className="text-blue-500 hover:underline">
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
      <a href="https://github.com/Yousmakhanfullstackdeveloper/milstone-1.git" className="text-blue-500 hover:underline">
        Project link
      </a>
    </div>
  </div>
</section>

    </div>
  )
}

export default portfolio
