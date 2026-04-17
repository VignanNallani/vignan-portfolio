'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! This is a demo form.')
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-navy mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Let's Connect</h3>
            <p className="text-navy/70 mb-8">
              I&apos;m always interested in hearing about new opportunities, exciting projects, or just having a chat about technology and innovation. Feel free to reach out!
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 text-navy/70">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium text-navy">Email</p>
                  <a href="mailto:vignanchowdarytilt@gmail.com" className="text-electric-blue hover:underline">
                    vignanchowdarytilt@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 text-navy/70">
                <div className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium text-navy">Location</p>
                  <p>Tirupati, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/vignan-nallani-b26455334"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/VignanNallani"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-electric-blue/10 rounded-full flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors duration-200"
              >
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary inline-flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
