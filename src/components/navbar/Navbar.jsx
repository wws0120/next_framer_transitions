'use client';
import React from 'react';
import { useState } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';
import MobileMenu from './MobileMenu';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className="flex items-center justify-between p-5 py-8">
        <a
          href="/"
          className="flex items-center justify-center text-2xl font-semibold text-gray-300"
        >
          <img
            src="/images/logo.webp"
            className="mr-3 h-9"
            alt="Landwind Logo"
          />
          LoremPhoto
        </a>
        <div className="hidden md:flex gap-4 text-2xl justify-center items-center uppercase lg:text-3xl ">
          <a href="/">Home</a>
          <a href="/about">about</a>
          <a href="/gallery">gallery</a>
          <a href="/contact">contact</a>
          <a></a>
        </div>
        {/*<button onClick={toggleMenu} className="mx-4 text-3xl md:hidden">
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>*/}
        {
          <button onClick={toggleMenu} className="group h-16 w-16 md:hidden">
            <div className="grid justify-items-center gap-1.5">
              <span
                className={`h-1 w-8 rounded-full bg-orange-100 ${
                  isMenuOpen
                    ? 'transform duration-150 rotate-45 translate-y-[5px]'
                    : null
                }`}
              ></span>
              <span
                className={`h-1 w-8 rounded-full bg-orange-100 ${
                  isMenuOpen ? 'hidden' : null
                }`}
              ></span>
              <span
                className={`h-1 w-8 rounded-full bg-orange-100 ${
                  isMenuOpen
                    ? 'transform duration-150 -rotate-45 -translate-y-[5px]'
                    : null
                } `}
              ></span>
            </div>
          </button>
        }
      </div>
      {isMenuOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
