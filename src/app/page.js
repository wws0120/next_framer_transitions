'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionPadding from '@/components/layout/SectionPadding';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 150 },
  animate: {
    y: 0,

    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Home = () => {
  return (
    <div className="bg-black ">
      <SectionPadding>
        <div className="flex flex-col container relative z-20">
          <div className="flex-grow flex justify-start items-end">
            <div className="md:py-10">
              <TopTitle title={'Gallery'} />
              <BottomTitle title={'Discover'} />
              <IntroText />
            </div>
          </div>
        </div>
      </SectionPadding>
      <div className="absolute opacity-40 bg-gray-700 bottom-0 right-0 w-6/12 lg:w-4/12 aspect-square z-10"></div>
    </div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <>
    <motion.span
      className="text-3xl font-medium relative whitespace-nowrap"
      variants={disabled ? null : banner}
      initial="initial"
      animate="animate"
    >
      {[...title].map((letter, index) => (
        <motion.span
          key={index}
          className="text-[5rem] sm:text-[10rem] lg:text-[14rem]  font-semibold relative sm:tracking-[-0.4  rem] inline-block whitespace-nowrap"
          variants={disabled ? null : letterAni}
        >
          {letter}
        </motion.span>
      ))}
    </motion.span>
  </>
);

const TopTitle = ({ title }) => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <AnimatedLetters title={title} />
      </motion.div>
    </div>
  );
};

const BottomTitle = ({ title }) => {
  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.7,
        }}
      >
        <AnimatedLetters title={title} />
      </motion.div>
    </div>
  );
};

const IntroText = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4,
        }}
      >
        <div className="mb-12 text-neutral-300">
          Showcasing a collection of AI-generated images. Explore these
          <br />
          visuals to experience various Framer Motion effects.
        </div>
        <div className="flex justify-start">
          <a
            href="/gallery"
            className="relative bg-neutral-200 inline-block px-4 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-neutral-600 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-2 bg-neutral-200 group-hover:bg-slate-800 "></span>
            <span className="relative text-slate-800 font-semibold group-hover:text-neutral-200">
              VIEW GALLERY
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
