"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <div className="pt-[80px] bg-[#f8f8f8]">
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90 shadow-md">
        <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-3">
          <Link href="/" className="text-3xl md:text-5xl text-black font-semibold">
            Logo
          </Link>
          <ul className="flex space-x-8">
            <li>
              <Link href="/about" className="text-black hover:text-gray-600 underline text-xl">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-blue-500 hover:text-black text-xl">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-blue-500 hover:text-black text-xl">
                Portfolio
              </Link>
            </li>
            <li>
            <Link href="/contact" className="text-blue-500 hover:text-black text-xl">
            Contact
          </Link>
          </li>
          </ul>
        </div>
      </nav>
      <section className="text-black">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-12 px-6 xl:gap-16 sm:py-20 xl:px-20 rounded-lg">
          <div className="flex justify-center">
            <Image
              src="/images/WhatsApp Image 2025-01-10 at 11.32.49_0035c53d.jpg"
              alt="Profile Image"
              width={350}
              height={350}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base lg:text-lg leading-relaxed">
              I'm a passionate frontend developer who loves transforming creative ideas into sleek, functional, and user-friendly web experiences.
              My expertise includes HTML, CSS, JavaScript, and modern frameworks like React and Next.js.
              With a strong focus on performance and design, I strive to build intuitive and visually appealing digital interfaces.
            </p>

            <div className="mt-8">
              <span className="text-xl font-extrabold text-pink-500 border-b-2 border-purple-500">
                Skills
              </span>
              <ul className="mt-2 space-y-1 text-lg">
                <li>✅ HTML</li>
                <li>✅ CSS</li>
                <li>✅ JavaScript</li>
                <li>✅ Boostrap</li>
                <li>✅ Tailwind.CSS</li>
                <li>✅ Next.js</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;
