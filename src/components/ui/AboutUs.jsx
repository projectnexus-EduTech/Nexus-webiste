import React from 'react';
import Background from './Background';
import { motion } from 'framer-motion';
import Button2 from '../Button2/MagicBtn'
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
    const navigate=useNavigate();
    const goToHome = ()=>{
        navigate('/')
    }
    return (
        <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
            <Background />

            {/* About Project Section */}
            <section className="relative z-10 py-10 px-6 bg-black/30">
                <h2 className="text-4xl font-bold mb-12 text-center">About Project Nexus</h2>
                <div className="max-w-2xl mx-auto text-center">
                    <p className="text-xl mb-8">
                        Empowering students with quality education, career guidance, and practical skills for a successful future in technology.
                    </p>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="relative z-10 py-10 px-6">
                <h2 className="text-4xl font-bold mb-12 text-center">Our Mission</h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.01 }}
                    className="w-full sm:w-3/4 p-6 rounded-lg shadow-lg backdrop-blur-md bg-gray-950 hover:bg-green-50 hover:text-black transition-all mx-auto"
                >
                    <p className="text-lg text-center">
                    At Project Nexus, we are dedicated to offering high-quality education and career guidance to future tech professionals. Our courses in C, Java, Python, Web Development, and Quantitative Aptitude are designed to build a strong foundation in technology. We also provide valuable services like mock interviews, personalized mentorship, and career counseling to ensure that each student receives the support they need to excel. Our goal is to empower students with the skills, confidence, and knowledge to thrive in the fast-paced world of technology.
                    </p>
                </motion.div>
            </section>
            {/** Why Choose Us    **/}
            <section className="relative z-10 py-20 px-6 bg-black/30">
                <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Certified courses recognized by the industry",
                        "Hands-on experience through internships and projects",
                        "Personalized career guidance and mentorship",
                        "Cutting-edge curriculum updated with latest tech trends",
                        "Expert-led mock interviews for job preparation",
                        "Flexible learning options to suit your schedule",
                    ].map((point, index) => (
                        <motion.div
                            key={point.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-6 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all flex items-start"
                        >
                            <div key={index} className="flex items-start space-x-2">
                                <div className="mt-1 bg-primary text-primary-foreground p-1 rounded-full flex items-center justify-center"> {/* Added border for the circle */}
                                    <div className="bg-white rounded-full p-2"> {/* Circle around the SVG */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="green"
                                            className="w-4 h-4"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                </div>

                                <p>{point}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
            <section className="relative z-10 py-8 px-2 text-center backdrop-blur-md bg-black/30">
                <h2 className="text-4xl font-bold mb-5 text-center">Ready to Start Your Tech Journey?</h2>
                <p className="max-w-2xl mx-auto text-center text-xl mb-8">
                    Explore our courses, internships, and services to kickstart your career in technology.
                </p>
                <Button2 size="3D" name={"Explore"} onClick={goToHome} />

            </section>
        </div>
    );
}
