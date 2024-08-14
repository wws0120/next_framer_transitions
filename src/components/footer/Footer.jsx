import React from 'react';

const Footer = () => {
  return (
    <div className="text-center mt-16">
      <p>Created by LoremPhoto</p>
      <a
        href="/"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-300"
      >
        <img
          src="/images/logo.webp"
          className="h-12 mr-3 sm:h-9"
          alt="Landwind Logo"
        />
        LoremPhoto
      </a>
      <span className="block text-sm text-center text-gray-500 mb-8">
        © 2024 LoremPhoto™. All Rights Reserved. Built with{' '}
        <a
          href="https://tailwindcss.com"
          className="text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-1 hover:underline"
        >
          Tailwind CSS
        </a>
        .
      </span>
    </div>
  );
};

export default Footer;
