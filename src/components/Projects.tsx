'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Knowledge Sharing Tech Community',
      description: 'A full-stack community platform with real-time notifications, role-based access, nested comments, post reactions, and bookmarks. Engineered the entire backend from schema design to REST API. Reduced average API response time by 40% through PostgreSQL indexing and improved page-load speed by 60% with skeleton loaders.',
      tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'React.js', 'Socket.IO', 'Docker', 'JWT', 'Tailwind CSS'],
      status: 'Completed',
      githubLink: 'https://github.com/VignanNallani',
      liveLink: 'https://knowledge-sharing-community.vercel.app/'
    },
    {
      title: 'ModMind',
      description: 'An AI-powered Reddit moderation suite that fetches posts from any subreddit and runs Google Gemini analysis for sentiment, toxicity, and suggested moderator actions, surfaced through a subreddit-statistics dashboard. Built for the Google Cloud Rapid Agent Hackathon and iterated across Reddit and Splunk tracks.',
      tech: ['React', 'Tailwind CSS', 'Vite', 'FastAPI', 'Python', 'Google Gemini', 'MongoDB Atlas', 'Reddit API'],
      status: 'Completed',
      githubLink: 'https://github.com/VignanNallani/modmind',
      liveLink: 'https://modmind-gcai.vercel.app'
    },
    {
      title: 'CreatorJoy – RAG Chatbot',
      description: 'A full-stack retrieval-augmented chatbot that compares two YouTube videos or Instagram Reels by extracting transcripts, embedding them into a vector store, and answering with streaming, source-cited responses. Transcripts are chunked at 800 characters with 100-character overlap for retrieval quality.',
      tech: ['Node.js', 'Python', 'LangChain.js', 'ChromaDB', 'Cohere', 'Groq', 'Llama 3.3', 'React', 'Server-Sent Events'],
      status: 'Completed',
      githubLink: 'https://github.com/VignanNallani/creatorjoy-rag'
    },
    {
      title: 'AURA – Proactive AI Memory Layer',
      description: 'A proactive "second brain" that surfaces relevant memories mid-conversation without being asked, using an 82% semantic-similarity threshold and entity extraction. Pairs a voice interface with real-time waveform visualization and pgvector semantic search over embedded memories.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'pgvector', 'Socket.IO', 'OpenAI', 'NVIDIA Embeddings', 'ElevenLabs', 'Redis', 'Docker'],
      status: 'Completed',
      githubLink: 'https://github.com/VignanNallani/Vignan_Aura'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Projects</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-navy group-hover:text-electric-blue transition-colors">
                  {project.title}
                </h3>
                {project.status === 'In Progress' && (
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    In Progress
                  </span>
                )}
              </div>

              <p className="text-navy/70 mb-6 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-600 font-medium transition-colors"
                >
                  <Github size={18} />
                  View on GitHub
                  <ExternalLink size={16} />
                </a>
                {project.liveLink && (
                  <a
                    href={project.liveLink}
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

export default Projects
