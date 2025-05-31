'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const navItems = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/About' },
  { title: 'Services', href: '/Services' },
  { title: 'Projects', href: '/Projects' },
  { title: 'Contact', href: '/Contact' },
]

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
}

const slide = {
  initial: { x: 80 },
  enter: i => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
  exit: i => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
}

const Curve = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  }, [])

  const initialPath = `M100 0 L100  ${window.innerHeight}  Q-100 ${window.innerHeight/2} 100 0`
  const targetPath = `M100 0 L100  ${window.innerHeight}  Q100 ${window.innerHeight/2} 100 0`
  
  const curve = {
    initial: {
      d: initialPath
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    }
  }

  return (
    <svg className="absolute top-0 left-[-99px] w-[100px] h-full fill-black stroke-none">
      <motion.path 
        variants={curve} 
        initial="initial" 
        animate="enter" 
        exit="exit"
        style={{ transformOrigin: "center" }}
      ></motion.path>
    </svg>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    // Set initial scroll state
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">ZSpace</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-6 h-0.5 bg-white transform transition-all duration-300 ${
                isOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'
              }`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar;

