'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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
  const pathname = usePathname()
  const [active, setActive] = useState('/')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const match = navItems.find(item => item.href === pathname)
    if (match) setActive(pathname)
  }, [pathname])

  const handleClick = (href) => {
    setActive(href)
    setIsOpen(false)
  }

  return (
    <>
      {/* Fixed Hamburger Menu Button */}
      <div className="fixed top-8 right-6 z-[200] md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-10 h-10 flex flex-col justify-center items-center bg-black rounded-lg"
          aria-label="Toggle menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white origin-center"
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-white my-1.5"
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-white origin-center"
          />
        </button>
      </div>

      {/* Main Navbar */}
      <nav className='flex justify-between items-center w-full px-4 md:px-10 py-2 relative'>
        {/* Logo */}
        <div className="logo">
          <Image src="/Zspace logo.jpg" alt="logo" width={120} height={80} />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex navlinks relative gap-4 rounded-full px-4 py-2">
          {navItems.map((item) => (
            <Link
              href={item.href}
              key={item.title}
              onClick={() => handleClick(item.href)}
            >
              <div className="relative px-4 py-2 cursor-pointer group">
                {active === item.href && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-black rounded-lg z-0"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className={`relative z-10 ${item.href === active ? 'text-white' : 'text-black'} transition-colors duration-300`}>
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[280px] bg-black z-50 md:hidden rounded-l-[40px]"
            >
              <div className="flex flex-col h-full pt-20 px-10">
                <div className="text-gray-400 text-xs uppercase border-b border-white pb-4 mb-10">
                  Navigation
                </div>
                <div className="flex flex-col">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.title}
                      custom={index}
                      variants={slide}
                      initial="initial"
                      animate="enter"
                      exit="exit"
                    >
                      <Link
                        href={item.href}
                        onClick={() => handleClick(item.href)}
                      >
                        <motion.div 
                          className="relative text-4xl font-light text-white hover:text-gray-300 transition-colors duration-300 py-4"
                          whileHover={{ x: 10 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        >
                          {item.title}
                        </motion.div>
                      </Link>
                      {index < navItems.length - 1 && (
                        <div className="h-px bg-white w-full" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              <Curve />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar;

