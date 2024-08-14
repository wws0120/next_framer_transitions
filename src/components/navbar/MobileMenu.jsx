'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = ({ toggleMenu }) => {
  const navList = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/gallery' },
  ];
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.2,
        delay: 0.4,
      },
    },
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="h-screen bg-black relative z-50"
          variants={item}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: '100vh', opacity: 1 }}
          transition={{ duration: 0.2 }}
          exit="exit"
        >
          <motion.a
            href="/"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: 'easeInOut',
                delay: 1,
              },
            }}
            className="w-full flex items-center justify-center py-4 text-[4rem] uppercase"
          >
            Home
          </motion.a>
          <motion.a
            href="/about"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: 'easeInOut',
                delay: 0.8,
              },
            }}
            className="w-full flex items-center justify-center py-4 text-[4rem] uppercase"
          >
            About
          </motion.a>
          <motion.a
            href="/gallery"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: 'easeInOut',
                delay: 0.6,
              },
            }}
            className="w-full flex items-center justify-center py-4 text-[4rem] uppercase"
          >
            Gallery
          </motion.a>
          <motion.a
            href="/contact"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: 'easeInOut',
                delay: 0.2,
              },
            }}
            className="w-full flex items-center justify-center py-4 text-[4rem] uppercase"
          >
            Contact
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
