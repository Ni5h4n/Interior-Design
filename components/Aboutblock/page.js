"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-indigo-200 flex flex-col md:flex-row items-center justify-center py-20 px-4 md:px-8 lg:px-16 gap-24">
      <motion.div
        className="relative w-full md:w-[45%] lg:w-[40%] flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/int design img4.jpg"
          width={600}
          height={400}
          alt="Interior Design Studio"
          className="rounded-lg shadow-xl object-cover w-full h-auto max-h-[600px]"
        />
      </motion.div>

      <motion.div
        className="info flex flex-col items-start w-full md:w-[45%] lg:w-[40%] gap-6"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className='text-4xl lg:text-5xl font-extrabold text-gray-800 font-serif tracking-tight mt-0 md:mt-[-50px] lg:mt-[-80px]'>
          About Our Studio
        </h2>
        <p className="leading-relaxed text-gray-700 text-lg font-sans">
          At ZSpace Decore, we blend art and science to craft optimal, sustainable, and beautiful environments. We meticulously analyze flow and balance functions with site, culture, and climate to create truly remarkable interiors. Our aim is to simplify your design journey, ensuring unparalleled quality and value within your budget.
        </p>
        <p className="leading-relaxed text-gray-700 text-lg font-sans mb-4">
          Ready to see our vision?
        </p>
        <motion.button
          className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold
          rounded-lg shadow-lg hover:shadow-xl
          bg-black text-white hover:bg-gray-800  transition duration-300 ease-in-out  
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          View Projects
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
