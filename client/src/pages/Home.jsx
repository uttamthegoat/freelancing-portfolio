/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'
import { HomeScroll, RevealText } from './HomeScroll'
import { orgData } from '../assets/data'

export default function Home() {
  const { skills } = orgData;
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 min-h-screen">  

      {/* Hero Section */}
      <motion.section 
        id="home"
        className="py-32 px-6 md:px-12 lg:px-24 text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          variants={fadeInUp}
        >
          Freelance Developer
        </motion.h2>

        <div>
          <div className='mx-auto w-fit'>
          <RevealText delay={0.3} color={"#000000"}>
            <HomeScroll />
          </RevealText>
          </div>
        </div>
        <motion.p 
          className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
          variants={fadeInUp}
        >
          Turning your ideas into reality with cutting-edge web solutions
        </motion.p>
        <motion.a 
          href="#contact"
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg inline-block shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.a>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: 'Web Development', icon: '💻' },
            { title: 'Mobile Apps', icon: '📱' },
            { title: 'UI/UX Design', icon: '🎨' }
          ].map((service, index) => (
            <motion.div 
              key={service.title}
              className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.4,
                scale: { duration: 0.4 },
                opacity: { duration: 0.4 }
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                transition: { duration: 0.4 }
              }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                {service.title}
              </h3>
              <p className="text-gray-300">Providing top-notch {service.title.toLowerCase()} solutions tailored to your specific needs and goals.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          My Portfolio
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div 
              key={item}
              className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
            >
              <img src={`/placeholder.svg?height=300&width=400`} alt={`Project ${item}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Project {item}</h3>
                <p className="text-gray-300 mb-4">Brief description of the project showcasing key features and technologies used.</p>
                <motion.a 
                  href="#" 
                  className="text-blue-400 hover:text-purple-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0, 0.71, 0.2, 1.01]
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                duration : 0.4
              }}
            >
              <span className="text-4xl mb-2">{skill.icon}</span>
              <span className="text-sm font-medium text-gray-300">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Get in Touch
        </motion.h2>
        <motion.form 
          className="max-w-lg mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-lg text-gray-300">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder-gray-300" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg text-gray-300">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder-gray-300" 
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-lg text-gray-300">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              placeholder="Write your message here..."
              className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition-all placeholder-gray-300"
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg w-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>

      
    </div>
  )
}