'use client'

import { motion } from 'framer-motion'
import { Trophy, Calendar, Github, ExternalLink } from 'lucide-react'

type Hackathon = {
  project: string
  event: string
  date?: string
  result?: string
  role?: string
  description: string
  tech: string[]
  githubLink: string
  demoLink?: string
}

const Hackathons = () => {
  // NOTE: Dates and placements are not recorded in the repo READMEs, so `date`
  // and `result` are intentionally left unset and rendered only when present —
  // never guessed. Fill them in once confirmed.
  // TODO(vignan): confirm date + result/placement for every entry below.
  // TODO(vignan): confirm your role (solo build or team) — `role` is left unset
  // until confirmed and only renders when present, so nothing is asserted.
  // TODO(vignan): confirm the exact hackathon names — the `event` values below
  // reflect only what each README states (its track/theme), not an official name.
  const hackathons: Hackathon[] = [
    {
      project: 'Interview Memory Coach',
      event: "The Hangover Part AI: Where's My Context?",
      // date: '',   // TODO(vignan): confirm date
      // result: '', // TODO(vignan): confirm placement
      description:
        "AI interview coach that builds a permanent knowledge graph of your resume, target role, and past interviews, then uses Cognee's GRAPH_COMPLETION traversal to coach against your actual gaps instead of generic advice.",
      tech: ['Python', 'Cognee', 'Streamlit', 'Groq', 'Llama 3.3', 'KuzuDB', 'LanceDB', 'fastembed'],
      githubLink: 'https://github.com/VignanNallani/interview-memory-coach',
      demoLink: 'https://youtu.be/Qv29MZECxZ8'
    },
    {
      project: 'MetaGuard',
      event: 'Hackathon · Governance & AI Agents tracks', // README lists these tracks; TODO(vignan): confirm exact hackathon name
      // date: '',   // TODO(vignan): confirm date
      // result: '', // TODO(vignan): confirm placement
      description:
        'AI-powered PII detection and governance agent for OpenMetadata catalogs — scans columns for sensitive data, auto-applies classification tags, sends Slack compliance alerts, and surfaces a Streamlit compliance dashboard with scoring.',
      tech: ['Python', 'OpenMetadata API', 'Streamlit', 'Docker', 'Slack Webhooks', 'Pandas'],
      githubLink: 'https://github.com/VignanNallani/metaguard'
    },
    {
      project: 'Plainly',
      event: 'Hackathon · "AI That Actually Helps People" track', // README-stated track (Devpost); TODO(vignan): confirm exact hackathon name
      // date: '',   // TODO(vignan): confirm date
      // result: '', // TODO(vignan): confirm placement
      description:
        'An accessibility-first communication aid for neurodiverse users that decodes hidden subtext in incoming messages and helps compose clear replies, using a calm, low-saturation, dyslexia-friendly interface.',
      tech: ['React', 'Vite', 'Groq', 'Vercel Serverless'],
      githubLink: 'https://github.com/VignanNallani/plainly'
    }
  ]

  return (
    <section id="hackathons" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Hackathons</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-navy group-hover:text-electric-blue transition-colors">
                  {hackathon.project}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-electric-blue font-medium">
                  <Trophy size={16} />
                  <span>{hackathon.event}</span>
                </div>
              </div>

              {(hackathon.date || hackathon.role || hackathon.result) && (
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 text-sm text-navy/60">
                {hackathon.date && (
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{hackathon.date}</span>
                  </div>
                )}
                {hackathon.role && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-navy/70">Role:</span>
                    <span>{hackathon.role}</span>
                  </div>
                )}
                {hackathon.result && (
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-navy/70">Result:</span>
                    <span>{hackathon.result}</span>
                  </div>
                )}
              </div>
              )}

              <p className="text-navy/70 mb-6">{hackathon.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {hackathon.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={hackathon.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-600 font-medium transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
                {hackathon.demoLink && (
                  <a
                    href={hackathon.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-600 font-medium transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hackathons
