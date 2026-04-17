'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: 'B.Tech CSE',
      institution: 'Mohan Babu University',
      duration: 'Expected May 2027',
      gpa: 'CGPA: 9.62/10',
      type: 'university'
    },
    {
      degree: 'Intermediate MPC',
      institution: 'Sri Sathyam Junior College',
      duration: '2021 - 2023',
      gpa: '97.6%',
      type: 'college'
    },
    {
      degree: 'SSC',
      institution: 'Alpha English Medium High School',
      duration: '2020 - 2021',
      gpa: '99.63%',
      type: 'school'
    }
  ]

  const certifications = [
    'Anthropic Claude AI & Prompt Engineering (2025)',
    'Infosys Springboard Data Analytics (2024)',
    'Coursera: Foundations of OS',
    'Coursera: Secure Software Engineering',
    'Coursera: Number Theory & Algebra'
  ]

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Education</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
                  <GraduationCap size={28} />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-2">{edu.degree}</h3>
              <p className="text-electric-blue font-medium mb-2">{edu.institution}</p>
              
              <div className="space-y-2 text-sm text-navy/60">
                <div className="flex items-center justify-center gap-1">
                  <Calendar size={16} />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Award size={16} />
                  <span>{edu.gpa}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="card"
        >
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 text-navy/70">
                <div className="w-2 h-2 bg-electric-blue rounded-full flex-shrink-0"></div>
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
