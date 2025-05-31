"use client"
import Image from 'next/image'
import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const scrollToTestimonials = useCallback(() => {
    const testimonialsSection = document.getElementById('testimonials')
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        {!error ? (
          <motion.div
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ 
              scale: isLoading ? 1.05 : 1,
              opacity: isLoading ? 0 : 1
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full"
          >
            <Image
              src="/neoclassical.jpg"
              alt="Hero Background"
              fill
              priority
              className={`
                object-cover
                duration-700 ease-in-out
                ${isLoading ? 'blur-xl grayscale' : 'blur-0 grayscale-0'}
              `}
              onLoad={() => setIsLoading(false)}
              onError={() => setError(true)}
              quality={75}
              sizes="100vw"
            />
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full bg-gray-900" 
          />
        )}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black/30" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-start px-6">
        <div className="max-w-4xl px-8 text-left text-white">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl text-white"> 
            Transform Your Space
          </h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            layoutId="content"
          >
            <motion.p 
              variants={itemVariants}
              className="mb-8 max-w-xl text-lg md:text-xl"
            >
              Elevate your home with our expert interior design solutions. 
              Where elegance meets comfort in perfect harmony.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-col gap-4 sm:flex-row sm:justify-start"
            >
              <button
                className="rounded-md bg-white px-8 py-3 text-black
                           font-medium shadow-sm
                           transition-all duration-300 ease-in-out
                           hover:bg-gray-200 hover:shadow-md
                           transform hover:-translate-y-0.5"
              >
                Get Started
              </button>
              <button
                onClick={scrollToTestimonials}
                className="rounded-md border-2 border-white px-8 py-3 text-white
                           font-medium
                           transition-all duration-300 ease-in-out
                           hover:bg-white hover:text-black hover:shadow-md
                           transform hover:-translate-y-0.5"
              >
                Hear From Our Clients
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero

