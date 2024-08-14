'use client';
import { motion } from 'framer-motion';

export default function ImageModal({ selected, setSelected }) {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full bg-zinc-900 max-w-[1000px] mx-auto my-8 p-2 md:p6 lg:p-10 rounded-3xl cursor-default"
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <img className="rounded-md" src={selected.imageUrl} />
        </motion.div>
        <div>
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="p-4"
          >
            <h3 className="text-2xl font-bold mb-1">{selected.title}</h3>

            <div className="capitalize bg-base-300 border-none text-zinc-400 mr-1 mb-1">
              {selected.category}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
