import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Landing() {
  // Define different sets of content
  const contentArray = [
    {
      heading: 'Shape Your Future in Tech',
      description: 'Unlock your potential with cutting-edge courses, personalized mentorship, and real-world projects.',
      buttonText: 'Get Started',
    },
    {
      heading: 'Transform Your Skills in Technology',
      description: 'Join us to gain industry-relevant skills and make an impact in the tech world.',
      buttonText: 'Join Now',
    },
    {
      heading: 'Elevate Your Career in Tech',
      description: 'Get hands-on experience with real-world projects and accelerate your career growth.',
      buttonText: 'Learn More',
    },
  ];

  // State to track the current content index
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set interval to update the content index every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contentArray.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [contentArray.length]);

  // Retrieve the current content based on the index
  const { heading, description, buttonText } = contentArray[currentIndex];

  return (
    <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-6">
      <motion.h1
        key={heading} // Ensure Framer Motion re-renders on content change
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
      >
        {heading}
      </motion.h1>

      <motion.p
        key={description} // Ensure the paragraph transitions smoothly
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl md:text-2xl mb-8 max-w-2xl"
      >
        {description}
      </motion.p>

      <motion.div
        key={buttonText} // Ensure button text changes with animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg">
          {buttonText}
        </button>
      </motion.div>
    </section>
  );
}

export default Landing;
