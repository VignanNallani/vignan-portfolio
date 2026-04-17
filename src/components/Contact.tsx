'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    timeline: '',
    budget: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mlgabezr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          service: '',
          timeline: '',
          budget: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
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
            <h3 className="text-2xl font-bold text-navy mb-6">Send Your Project Details</h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12 px-6 bg-green-50 border border-green-200 rounded-lg"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={24} className="text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-green-800 mb-2">Thanks!</h4>
                <p className="text-green-700">I'll review your project and get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                    Email *
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
                  <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                    What do you need help with? *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="Full Stack Web Development">Full Stack Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="AI/ML Project">AI/ML Project</option>
                    <option value="Data Analysis">Data Analysis</option>
                    <option value="No-code Automation">No-code Automation</option>
                    <option value="DevOps/Cloud Setup">DevOps/Cloud Setup</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-navy mb-2">
                      What's your timeline? *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                    >
                      <option value="">Select timeline</option>
                      <option value="ASAP (< 1 week)">ASAP (&lt; 1 week)</option>
                      <option value="2-4 weeks">2-4 weeks</option>
                      <option value="1-3 months">1-3 months</option>
                      <option value="Just exploring">Just exploring</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-navy mb-2">
                      Rough budget range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under 10,000">Under 10,000</option>
                      <option value="10,000-50,000">10,000-50,000</option>
                      <option value="50,000-200,000">50,000-200,000</option>
                      <option value="200,000+">200,000+</option>
                      <option value="Not sure / Let's talk">Not sure / Let's talk</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-electric-blue focus:border-transparent outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me more about your project..."
                  />
                </div>

                {/* Formspree spam protection fields */}
                <input type="hidden" name="_subject" value="New Project Inquiry from Portfolio" />
                <input type="hidden" name="_template" value="table" />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full btn-primary inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send My Project Details
                      <Send size={20} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
