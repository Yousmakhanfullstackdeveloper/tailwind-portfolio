"use client";
import React, {useState} from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

interface NavLinkProps {
  path: string;
  title: string;
}

const navLinks: NavLinkProps[] = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Projects",
    path: "/projects",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Contact",
    path: "/contact",
  }
]
const NavBar: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-90'>
    <div className='flex flex-wrap items-center justify-between mx-auto px-10 py-2'>
      <Link href={"/"} className='text-2xl md:text-5xl text-black font-semibold'>LOGO</Link>
      <div className='mobile-menu block md:hidden'>
      <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-black hover:border-black'
          >
            {navbarOpen ? (
              <XMarkIcon className='h-5 w-5' />
            ) : (
              <Bars3Icon className='h-5 w-5' />
            )}
          </button>
      </div>
      <div className='menu hidden  md:block md:w-auto' id='navBar'>
        <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
        {navLinks.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
        </ul>
      </div>
    </div>
    {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  )
}

export default NavBar
