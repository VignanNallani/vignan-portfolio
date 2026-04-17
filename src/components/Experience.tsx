'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Infosys Ltd. (Infosys Springboard)',
      role: 'Data Analyst Intern',
      duration: 'June 2024 - August 2024',
      location: 'Remote | Full-time',
      highlights: [
        'Processed 50,000+ road accident records using Python and Pandas, identifying 5 high-risk zones and 3 peak accident time windows.',
        'Built 3 interactive dashboards cutting stakeholder reporting time by 30%.',
        'Authored a 12-page technical analysis report with root-cause analysis and actionable recommendations. Received Infosys completion certification.'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Experience</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-electric-blue"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-electric-blue rounded-full border-4 border-white shadow-lg"></div>
              
              {/* Content */}
              <div className="ml-16 card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-2">{experience.role}</h3>
                    <div className="flex items-center gap-2 text-electric-blue font-medium mb-2">
                      <Briefcase size={18} />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:items-end text-sm text-navy/60 space-y-1">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-navy">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {experience.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start gap-3 text-navy/70">
                        <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
