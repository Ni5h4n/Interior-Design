"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    image: "testimonial women1.jpg",
    text: "ZSpace transformed our living room into a stunning space. Their attention to detail and creative solutions exceeded our expectations. The team was professional and made the entire process enjoyable."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Apartment Owner",
    image: "testimonial man 1.jpg",
    text: "I was amazed by how they maximized our small apartment space. The design is both functional and beautiful. The team&apos;s expertise in space optimization is truly remarkable."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Business Owner",
    image: "testimonial women2.jpg",
    text: "Our office redesign by ZSpace has received countless compliments. They created a perfect balance of professionalism and comfort. The project was completed on time and within budget."
  }
];

const Testimonials = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={containerVariants}
          className="text-center mb-16"
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
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/60 hover:border-gray-600/80 transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="rounded-full object-cover border-2 border-gray-600"
                  />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg leading-tight">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed font-light italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;