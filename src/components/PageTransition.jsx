'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import StairTransition from './StairTransition';

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const pageTitle = pathname.split('/')[1] || 'Home';

  return (
    <AnimatePresence mode="wait">
      <div>
        <StairTransition />
        <motion.div
          key={pathname}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 0.2, ease: 'easeInOut' },
          }}
          className="h-screen w-screen flex fixed top-0 jusetify-center pointer-events-none z-40"
        >
          <h1 className="w-full text-white text-center pt-20 text-[5rem] md:text-[8rem] lg:text-[16rem] capitalize">
            {pageTitle}
          </h1>
        </motion.div>

        {children}
      </div>
    </AnimatePresence>
  );
};

export default PageTransition;
