'use client';
import React from 'react';
import { images } from '../../constants/constants';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionPadding from '@/components/layout/SectionPadding';
import ImageModal from '../../components/gallery/ImageModal';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
      <SectionPadding>
        <div className="container">
          <div className="lg:flex justify-center">
            <div className="lg:w-2/3 mx-2 pb-8">
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
                  Our Works
                </h1>
                <p className="text-base text-gray-400">
                  This site features a curated collection of AI-generated images
                  designed to highlight animation effects. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Ipsam minima expedita natus
                  molestiae alias suscipits.
                </p>
              </motion.div>
            </div>
          </div>

          <div>
            <motion.div
              id="grid"
              className="w-full md:columns-2 lg:columns-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 0.5,
                delay: 0.8,
              }}
            >
              {
                //loop over the images
                images.map((image, index) => (
                  <motion.div
                    className="p-3 block"
                    key={index}
                    onClick={() => setSelectedImage(image)}
                    layoutId={`card-${image.id}`}
                  >
                    <div className="relative block overflow-hidden rounded group transition-all duration-500">
                      <img
                        src={image.imageUrl}
                        className="rounded transition-all duration-500 group-hover:scale-105"
                        alt="image"
                      />
                      <div className="absolute inset-3 flex items-end cursor-pointer rounded bg-white p-3 opacity-0 transition-all duration-500 group-hover:opacity-80">
                        <div>
                          <p className="text-sm text-gray-400 capitalize">
                            {image.category}
                          </p>
                          <h6 className="text-base text-black font-medium">
                            {image.title}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              }
            </motion.div>
          </div>
        </div>
        <ImageModal selected={selectedImage} setSelected={setSelectedImage} />
      </SectionPadding>
    </>
  );
}

export default Gallery;
