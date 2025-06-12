"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react'; // Ensure framer-motion is imported

const Footer = () => {
  const navigationLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About Us', href: '/about' }, // Changed to 'About Us' for common usage
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" }, // Simplified Instagram icon path
    { name: 'YouTube', href: '#', icon: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" }, // Simplified YouTube icon path
    { name: 'LinkedIn', href: '#', icon: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" }, // Simplified LinkedIn icon path
  ];

  // Animation variants for staggered appearance
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-gray-950 to-black text-gray-300 py-16 md:py-24 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger when 30% of footer is in view
      variants={footerVariants}
    >
      {/* Optional: Subtle background texture/pattern for premium feel */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/path/to/subtle-texture.png')] bg-repeat opacity-10"></div> {/* Replace with a real subtle texture if you have one */}
        {/* Or a more abstract subtle gradient/radial-blur */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Brand & Copyright */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h3 className="text-3xl font-extrabold text-white mb-4 tracking-tight">Brute Interiors</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Crafting exceptional spaces that inspire and transform.
            </p>
            <p className="text-gray-500 text-xs mt-6">
              © {new Date().getFullYear()} Brute Interiors. All rights reserved.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider">Navigation</h4>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-6 text-base">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 bottom-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span> {/* Underline effect */}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Contact & Social Media Section */}
          <motion.div className="lg:col-span-1 lg:text-right" variants={itemVariants}>
            <h4 className="text-xl font-semibold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 mb-2">Email us at</p>
                <a
                  href="mailto:contact@zspacedecore.com"
                  className="text-white hover:text-gray-200 transition-colors duration-300 text-lg font-medium"
                >
                  contact@zspacedecore.com
                </a>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Call us</p>
                <a
                  href="tel:+1234567890" // Replace with actual phone number
                  className="text-white hover:text-gray-200 transition-colors duration-300 text-lg font-medium"
                >
                  +1 (234) 567-890
                </a>
              </div>
              <div className="mt-8 flex justify-center lg:justify-end gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice
                    whileHover={{ scale: 1.05,}} 
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                    className="w-10 h-10 relative bg-black border group border-gray-700 rounded-lg flex items-center justify-center text-white text-xl shadow-lg "
                  >
                    <svg className="w-4 h-4 text-gray-500 group-hover:text-white" fill="currentColor"  viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d={social.icon} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar for Policies */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          variants={itemVariants}
        >
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
          <p className="text-gray-500">
            Designed with <span className="text-red-500 inline-block align-middle animate-pulse">❤</span> by Nishan
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;