'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">About Me</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-[180px] h-[180px] rounded-full overflow-hidden border-[3px] border-[#3B82F6] shadow-lg">
                <Image 
                  src="/vignan.jpeg" 
                  alt="Vignan Nallani" 
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-[#3B82F6]/20 to-blue-600/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-navy/80 leading-relaxed">
                I'm Vignan Nallani, a Computer Science student at Mohan Babu University with a CGPA of 9.62/10, building at the intersection of full-stack engineering, AI, and IoT.
              </p>
              
              <p className="text-lg text-navy/80 leading-relaxed">
                I've contributed to open-source projects with 30,000+ GitHub stars, interned as a Data Analyst at Infosys, and shipped production-grade systems — from real-time web platforms to machine learning pipelines.
              </p>
              
              <p className="text-lg text-navy/80 leading-relaxed">
                I write clean, scalable code and I believe the best engineers can take a product from idea to deployment without dropping the ball anywhere in between.
              </p>

              <div className="pt-6 space-y-3">
                <div className="flex items-center text-navy/70">
                  <span className="font-medium mr-2">Location:</span>
                  <span>Tirupati, Andhra Pradesh, India</span>
                </div>
                <div className="flex items-center text-navy/70">
                  <span className="font-medium mr-2">Email:</span>
                  <a href="mailto:vignanchowdarytilt@gmail.com" className="text-electric-blue hover:underline">
                    vignanchowdarytilt@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
