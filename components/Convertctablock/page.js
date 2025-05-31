"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const ConvertCTABlock = () => {
  const [bubbles, setBubbles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const createBubble = () => {
    return {
      id: Math.random(),
      x: Math.random() * 100,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 3,
      angle: Math.random() * 30 + 30, 
      opacity: Math.random() * 0.2 + 0.5,
    };
  };

  useEffect(() => {
    const initialBubbles = Array.from({ length: 20 }, createBubble);
    setBubbles(initialBubbles);

    const interval = setInterval(() => {
      setBubbles(prev => {
        const newBubbles = [...prev, createBubble()];
        return newBubbles.slice(-25);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="relative bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <div className="h-64 bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Loading call to action...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <AnimatePresence>
          {bubbles.map((bubble) => (
            <motion.div
              key={bubble.id}
              className="absolute bottom-0 rounded-full bg-gray-900"
              style={{
                left: `${bubble.x}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                transform: `rotate(${bubble.angle}deg)`,
                opacity: bubble.opacity,
              }}
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: -300,
                x: bubble.angle * 2,
                opacity: [0, bubble.opacity, bubble.opacity * 0.5, 0],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: Math.random() * 2,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your Space Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Book a consultation with our expert designers and take the first step towards your dream space.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConvertCTABlock;