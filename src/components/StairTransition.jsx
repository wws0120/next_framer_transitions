'use client';

import { motion, AnimatePresence } from 'framer-motion';
import StairsBlock from './StairsBlock';

function StairTransition() {
  return (
    <AnimatePresence>
      <div className="h-screen w-screen flex absolute top-0 left-0 right-0 overflow-hidden justify-center pointer-events-none z-30">
        {' '}
        <StairsBlock />
      </div>{' '}
    </AnimatePresence>
  );
}

{
}

export default StairTransition;
