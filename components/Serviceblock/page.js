"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ProcessBlock = () => {
  const processes = [
    {
      id: 1,
      title: "Vision & Discovery",
      description: "We start by deeply understanding your aspirations, lifestyle, and project goals to form the foundation of our design journey.",
      icon: "/idea.svg"
    },
    {
      id: 2,
      title: "Conceptual Design",
      description: "Our experts craft innovative concepts, including detailed space plans, mood boards, and photorealistic 3D renders.",
      icon: "/blueprint.svg"
    },
    {
      id: 3,
      title: "Precision Execution",
      description: "With meticulous attention to detail, we manage all aspects of implementation, ensuring a seamless and high-quality build.",
      icon: "/crosshairs precision.svg"
    },
    {
      id: 4,
      title: "Flawless Delivery",
      description: "We reveal your beautifully transformed space, a true reflection of your vision and our commitment to excellence.",
      icon: "/complete.svg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            Our Seamless Process
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A clear, collaborative journey designed to bring your dream space to life with precision, creativity, and unparalleled ease.
          </motion.p>
          <motion.div
            className="w-20 h-1 bg-gray-700 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.02] border border-gray-100"
              variants={itemVariants}
            >
              <div className="relative w-24 h-24 mb-6 flex items-center justify-center bg-gray-100 rounded-full border border-gray-200">
                <Image
                  src={process.icon}
                  alt={process.title}
                  width={48}
                  height={48}
                  className="text-gray-600"
                />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 text-center mb-3 leading-tight">{process.title}</h3>
              <p className="text-gray-600 text-center text-base leading-relaxed">{process.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          >
            <Link href="/services" className="inline-flex items-center px-8 py-3 bg-black text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 ease-in-out group">
              Explore Our Services
              <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBlock;