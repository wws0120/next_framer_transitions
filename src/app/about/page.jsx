'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionPadding from '@/components/layout/SectionPadding';

function About() {
  return (
    <div className="bg-black">
      <SectionPadding>
        <div className="grid items-center justify-center gap-8 md:grid-cols-[1fr_minmax(0,_0.6fr)]">
          <div className="px-8">
            <motion.div
              initial={{ opacity: 0, y: '60%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1.2, delay: 0.8 }}
              className="mb-6 "
            >
              <h1 className="mb-6  text-5xl font-semibold leading-none -tracking-[1px] text-orange-100 sm:text-5xl lg:text-6xl xl:text-[76px] xxl:text-[90px]">
                Showcase animation with AI-generated images
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: '60%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1.2, delay: 1 }}
              className="mb-9 text-neutral-300 max-w-[746px] lg:mb-14"
            >
              This site is a display for showcasing animation with AI-generated
              images. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus corporis earum voluptas obcaecati veritatis blanditiis.
            </motion.p>
            <motion.a
              href="/contact"
              initial={{ opacity: 0, y: '60%' }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
              className="group  flex justify-start"
            >
              <button className="relative bg-neutral-200 inline-block px-4 py-2 font-medium group">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-2 bg-neutral-200 group-hover:bg-slate-800 "></span>
                <span className="relative text-slate-800 font-semibold group-hover:text-neutral-200">
                  Contact Me
                </span>
              </button>
            </motion.a>
          </div>
          {/* Hero Content Block */}
          {/* Hero Image Block */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 5 }}
            transition={{ type: 'spring', duration: 1.5, delay: 0.6 }}
            className="mx-auto bg-slate-900 px-4 pt-4 pb-8"
          >
            <img
              src="/images/camera001.webp"
              alt="hero-img"
              width={455}
              height={548}
            />
            <div className="mt-4 w-full text-4xl text-center text-white font-semibold">
              LOREM
            </div>
          </motion.div>
        </div>
      </SectionPadding>
    </div>
  );
}

export default About;
