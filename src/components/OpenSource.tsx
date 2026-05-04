  'use client'

import { motion } from 'framer-motion'
import { Star, ExternalLink, GitPullRequest } from 'lucide-react'

const OpenSource = () => {
  const contributions = [
    {
      repo: 'langgenius/dify',
      stars: '30,000+',
      description: 'Submitted PR #32644 improving SQLAlchemy 2.0 ORM typing in the Dataset model — replacing untyped mapped_column declarations with correctly typed Mapped[str | None] annotations for nullable columns. Currently under maintainer review.',
      tech: ['Python', 'SQLAlchemy', 'Type Annotations', 'ORM'],
      githubLink: 'https://github.com/langgenius/dify/pull/32644'
    }
  ]

  return (
    <section id="opensource" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Open Source Contributions</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contributions.map((contribution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {contribution.repo}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-navy/60">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500" />
                      <span>{contribution.stars} stars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitPullRequest size={16} />
                      <span>Contributor</span>
                    </div>
                  </div>
                </div>
                <a
                  href={contribution.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-blue hover:text-blue-600 transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
              
              <p className="text-navy/70 mb-6">
                {contribution.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {contribution.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
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

export default OpenSource
