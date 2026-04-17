'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm">
            Built by Vignan Nallani · 2025
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
