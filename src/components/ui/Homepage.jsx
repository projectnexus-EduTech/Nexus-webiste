import React, { useState, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import { OrbitControls, Stars, Text, Html } from '@react-three/drei';
import { Code, Briefcase, Users, MessageSquare, ChevronRight, Github, Linkedin, Twitter, X, Menu } from 'lucide-react';
import { Button } from './button';
import { Textarea } from './textarea';
import { Input } from './input';

function FloatingCube({ position, color }) {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function AnimatedText({ text, position, color }) {
  const textRef = useRef();
  useFrame(({ clock }) => {
    textRef.current.position.y = position[1] + Math.sin(clock.elapsedTime) * 0.2;
  });
  return (
    <Text
      ref={textRef}
      position={position}
      color={color}
      fontSize={0.5}
      maxWidth={2}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign="center"
      font="/fonts/Inter_Bold.json"
    >
      {text}
    </Text>
  );
}

function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const courses = [
    { 
      title: 'Java Mastery', 
      icon: Code, 
      color: 'from-red-400 to-orange-500',
      description: 'Master Java programming from basics to advanced concepts. Learn object-oriented programming, data structures, and popular frameworks like Spring.'
    },
    { 
      title: 'Python Wizardry', 
      icon: Code, 
      color: 'from-blue-400 to-green-500',
      description: 'Become a Python expert. Cover everything from fundamental syntax to advanced topics like machine learning and web development with Django.'
    },
    { 
      title: 'Web Development', 
      icon: Code, 
      color: 'from-purple-400 to-pink-500',
      description: 'Comprehensive web development bootcamp. Learn HTML, CSS, JavaScript, React, and Node.js to build full-stack web applications.'
    },
  ];

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Stars />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Suspense fallback={null}>
            <FloatingCube position={[-4, 2, -5]} color="blue" />
            <FloatingCube position={[4, -2, -5]} color="purple" />
            <FloatingCube position={[-3, -3, -5]} color="green" />
            <AnimatedText text="Future" position={[-2, 0, -5]} color="white" />
            <AnimatedText text="Tech" position={[2, 0, -5]} color="white" />
          </Suspense>
        </Canvas>
      </div>

      {/* Header */}
      <header className="relative z-20 backdrop-blur-md bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="#" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Nexus
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Button onClick={toggleMenu} className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open menu</span>
                <Menu className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <nav className="hidden md:flex space-x-10">
              {['Courses', 'Services', 'Interviews', 'About', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-base font-medium text-white hover:text-blue-400 transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-30"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-gray-800 divide-y-2 divide-gray-700">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Nexus
                      </span>
                    </div>
                    <div className="-mr-2">
                      <Button onClick={toggleMenu} className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {['Courses', 'Services', 'Interviews', 'About', 'Contact'].map((item) => (
                        <a
                          key={item}
                          href={`#${item.toLowerCase()}`}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700"
                          onClick={toggleMenu}
                        >
                          <span className="ml-3 text-base font-medium text-white">{item}</span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        >
          Shape Your Future in Tech
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl"
        >
          Unlock your potential with cutting-edge courses, personalized mentorship, and real-world projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
            Get Started
          </Button>
        </motion.div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative z-10 py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all"
            >
              <course.icon className={`w-12 h-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r ${course.color}`} />
              <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-300 mb-4">Master the art of coding with our comprehensive curriculum.</p>
              <Button 
                variant="outline" 
                className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
                onClick={() => openModal(course)}
              >
                Learn More
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-6 bg-black/30">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: 'Mock Interviews', icon: Users, description: 'Practice with industry professionals' },
            { title: 'Website Development', icon: Briefcase, description: 'Custom websites for your business' },
            { title: 'One-on-One Mentorship', icon: MessageSquare, description: 'Personalized guidance from experts' },
            { title: 'Career Counseling', icon: ChevronRight, description: 'Navigate your tech career path' },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all flex items-start"
            >
              <service.icon className="w-8 h-8 mr-4 text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interviews Section */}
      <section id="interviews" className="relative z-10 py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Mock Interviews</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            Prepare for your dream job with our professional mock interviews. Get valuable feedback and improve your interview skills.
          </p>
          <Link to="/register-interview">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
            Register for Interview
          </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative z-10 py-20 px-6 bg-black/30">
        <h2 className="text-4xl font-bold mb-12 text-center">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Alex Johnson', role: 'Software Engineer', quote: 'The courses here transformed my career. I landed my dream job thanks to the skills I gained.' },
            { name: 'Samantha Lee', role: 'Web Developer', quote: 'The mentorship program was invaluable. I received guidance that accelerated my learning process.' },
            { name: 'Michael Chen', role: 'Data Scientist', quote: 'The mock interviews prepared me for the real thing. I felt confident during my job search.' },
          ].map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-lg backdrop-blur-md bg-white/10"
            >
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/*Contact Form */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-6">
          <Input type="text" placeholder="Your Name" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
          <Input type="email" placeholder="Your Email" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
          <Textarea placeholder="Your Message" className="bg-white/10 border-white/20 text-white placeholder-gray-400" />
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
        </form>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 backdrop-blur-md bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4 md:mb-0">
              FutureTech
            </div>
            <nav className="mb-4 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                {['Courses', 'Services', 'Interviews', 'About', 'Contact'].map((item) => (
                  <li key={item} className="mb-2 md:mb-0">
                    <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © 2023 FutureTech. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-800 p-8 rounded-lg max-w-md w-full relative"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-bold mb-4">{selectedCourse.title}</h3>
              <p className="text-gray-300 mb-6">{selectedCourse.description}</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Register for Course
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Homepage;