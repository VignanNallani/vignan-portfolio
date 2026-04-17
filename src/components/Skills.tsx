'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cpu, Cloud, Zap, Settings } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <Code size={24} />,
      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT', 'Socket.IO', 'WebSockets', 'PHP']
    },
    {
      title: 'Frontend',
      icon: <Settings size={24} />,
      skills: ['React.js', 'Next.js', 'Angular.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      title: 'Databases',
      icon: <Database size={24} />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM']
    },
    {
      title: 'AI/ML & IoT',
      icon: <Cpu size={24} />,
      skills: ['Python', 'Machine Learning', 'Raspberry Pi', 'ESP32', 'AI APIs']
    },
    {
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      skills: ['Docker', 'AWS', 'Git', 'GitHub', 'CI/CD', 'Linux']
    },
    {
      title: 'No-code / Automation',
      icon: <Zap size={24} />,
      skills: ['Automation pipelines', 'API integration']
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Skills</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
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
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
