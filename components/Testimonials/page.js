"use client";
import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'motion/react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      role: "Homeowner",
      image: "/testimonial women1.jpg",
      quote: "The attention to detail and creativity brought to our home exceeded all expectations. Every corner tells a story of thoughtful design, truly reflecting our dream.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image: "/testimonial man 1.jpg",
      quote: "Their ability to transform our office space into a modern, functional environment while maintaining our brand identity was remarkable and seamless.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Interior Design Enthusiast",
      image: "/testimonial women2.jpg",
      quote: "Working with this team was a dream. They understood my vision perfectly and delivered a space that feels uniquely mine, exceeding my highest hopes.",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  return (
    <section ref={sectionRef} id='testimonials' className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Hear directly from those who have experienced the ZSpace Decore difference.
          </p>
          <div className="w-24 h-1 bg-gray-700 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/60 hover:border-gray-600/80 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between"
              variants={itemVariants}
            >
              <div>
                <div className="flex mb-6 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-200 text-xl mb-8 leading-relaxed font-light italic">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center mt-auto pt-4 border-t border-gray-700/50">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-gray-600"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg leading-tight">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;