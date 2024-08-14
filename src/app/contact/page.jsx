'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionPadding from '@/components/layout/SectionPadding';

const page = () => {
  return (
    <div className="w-full bg-black items-center justify-center" id="contact">
      <div className="w-full min-h-[100vh] float-left ">
        <SectionPadding>
          <div className=" w-full container h-auto  clear-both ">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { type: 'spring', duration: 1.2, delay: 0.8 },
              }}
            >
              <h1 className="text-5xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-teal-200 mb-10">
                Contact
              </h1>
            </motion.div>

            <div className="wrapper w-full block md:flex bg-zinc-900 p-8 rounded-2xl border border-gray-700">
              <div className="left w-1/2 pr-[50px]">
                <motion.div
                  className="w-full float-left large:text-[35px]"
                  initial={{ opacity: 0, y: '60%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', duration: 1.2, delay: 0.8 }}
                >
                  <span className="w-full float-left font-medium uppercase inline-block mb-[12px]">
                    - Connect with Me
                  </span>
                  <h3 className="pb-8 text-[40px] font-extrabold">
                    Get in touch
                  </h3>
                </motion.div>
                <motion.div
                  className="text w-full text-gray-400 mt-[20px] mb-[40px]"
                  initial={{ opacity: 0, y: '60%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', duration: 1.2, delay: 1 }}
                >
                  <p>
                    I’m excited to explore new opportunities and would love to
                    hear from you! Drop me a message anytime!
                  </p>
                </motion.div>
                <motion.div
                  className=" w-full "
                  initial={{ opacity: 0, y: '60%' }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
                >
                  <ul>
                    <li className="mb-[8px] w-full">
                      <a
                        className=" text-gray-300 font-semibold inline-block"
                        href="tel:+555 000-0000"
                      >
                        +(555) 000-0000
                      </a>
                    </li>
                    <li className="mb-[8px] w-full">
                      <a
                        className="text-gray-300 font-semibold font-inter inline-block "
                        href="mailto:contactme@loremipsum.com"
                      >
                        contactme@loremipsum.com
                      </a>
                    </li>
                    <li className="w-full ">
                      <a
                        className="text-gray-300 font-semibold font-inter inline-block"
                        href="#"
                      >
                        1234 Main Street, Anytown, Lorem Country
                      </a>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div className="right w-1/2 pl-[50px]">
                <div className="fields w-full float-left h-auto clear-both">
                  <form class="space-y-4" action="mailto:info@example.com">
                    <div>
                      <motion.label
                        for="email"
                        class="block mb-1 text-sm font-medium text-gray-300"
                        initial={{ opacity: 0, y: '60%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                      >
                        Email
                      </motion.label>
                      <motion.input
                        type="email"
                        id="email"
                        class="block p-3 w-full text-sm bg-gray-800 shadow-sm rounded-lg  border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-neutral-800 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="example@gmail.com"
                        required
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', duration: 1.2, delay: 1 }}
                      />
                    </div>
                    <div>
                      <motion.label
                        for="subject"
                        class="block mb-1 text-sm font-medium text-gray-300"
                        initial={{ opacity: 0, y: '60%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 1.2, delay: 1 }}
                      >
                        Subject
                      </motion.label>
                      <motion.input
                        type="text"
                        id="subject"
                        class="block p-3 w-full text-sm bg-gray-800 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-neutral-800 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter the subject of your message"
                        required
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', duration: 1.2, delay: 1 }}
                      />
                    </div>
                    <div class="sm:col-span-2">
                      <motion.label
                        for="message"
                        class="block mb-1 text-sm font-medium text-gray-300"
                        initial={{ opacity: 0, y: '60%' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ type: 'spring', duration: 1, delay: 1.2 }}
                      >
                        Your message
                      </motion.label>
                      <motion.textarea
                        id="message"
                        rows="6"
                        class="block p-2.5 w-full text-sm bg-gray-800 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500  dark:border-neutral-800 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Leave a comment..."
                        required
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ type: 'spring', duration: 1.2, delay: 1 }}
                      ></motion.textarea>
                    </div>
                    <motion.button
                      type="submit"
                      class="py-3 px-5 text-sm font-semibold text-center bg-[#FAEBD7] text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
                    >
                      Submit Now
                    </motion.button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </SectionPadding>
      </div>
    </div>
  );
};

export default page;
