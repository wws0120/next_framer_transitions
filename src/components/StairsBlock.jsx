'use client';

import { motion, AnimatePresence } from 'framer-motion';

function StairBlock() {
  const stairVariants = {
    initial: {
      top: '0%',
      opacity: 1,
      height: '100%',
    },
    animate: {
      top: '100%',
    },
    exit: {
      opacity: 0,
      top: '0%',
      transition: { duration: 1, ease: 'easeInOut' },
    },
  };

  const reverseIndex = (index) => {
    const steps = 4;
    return steps - index - 1;
  };

  const items = [1, 2, 3, 4];

  return (
    <>
      {/*render 4 motion divs, each representing a stair*/}
      {items.map((item, index) => (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          key={index}
          variants={stairVariants}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-zinc-500 relative"
        ></motion.div>
      ))}
    </>
  );
}

export default StairBlock;
