'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'

const Hero = () => {
  const roles = useMemo(() => [
    'Full Stack Developer',
    'AI/ML Engineer',
    'Open Source Contributor',
    'Backend Architect'
  ], [])
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
      } else {
        setCurrentText(
          isDeleting
            ? currentRole.substring(0, currentText.length - 1)
            : currentRole.substring(0, currentText.length + 1)
        )
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentRoleIndex, isDeleting, roles])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Code Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 opacity-5">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute border-l border-navy"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${Math.random() * 200 + 50}px`,
                transform: `rotate(${Math.random() * 90 - 45}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-navy mb-6">
            Vignan Nallani
          </h1>
          
          <div className="h-20 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-navy/80">
              <span className="gradient-text">{currentText}</span>
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-navy/70 mb-4 max-w-3xl mx-auto">
            I build, deploy, and automate things that matter.
          </p>
          
          <p className="text-sm sm:text-base text-navy/60 mb-12 max-w-2xl mx-auto">
            B.Tech CSE @ Mohan Babu University · Open Source Contributor · Infosys Alumni
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View My Work
              <ArrowDown size={20} />
            </motion.a>
            
            <motion.a
              href="/vignan-resume.pdf"
              download="Vignan_Nallani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Download Resume
              <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-navy/50"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
