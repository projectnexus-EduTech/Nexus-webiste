// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Button } from './button';


// export default function Courses() {
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [courses, setCourses] = useState([]);
//     const openModal = (course) => {
//         setSelectedCourse(course);
//         setIsModalOpen(true);
//     };




//     useEffect(() => {
//         fetch('/Json_Files/Courses.json')
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => setCourses(data.courses))
//             .catch((error) => console.error('Error fetching the courses:', error));
//     }, []);
//     return (
//         <section id="courses" className="relative z-10 py-20 px-6">
//             <h2 className="text-4xl font-bold mb-12 text-center">Our Courses</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {courses.map((course, index) => (
//                     <motion.div
//                         key={course.title}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: index * 0.1 }}
//                         className="p-6 rounded-lg backdrop-blur-md bg-white/10 hover:bg-white/20 transition-all"
//                     >
//                         <course.icon className={`w-12 h-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r ${course.color}`} />
//                         <h3 className="text-2xl font-semibold mb-2">{course.title}</h3>
//                         <p className="text-gray-300 mb-4">Master the art of coding with our comprehensive curriculum.</p>
//                         <Button
//                             variant="outline"
//                             className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white"
//                             onClick={() => openModal(course)}
//                         >
//                             Learn More
//                         </Button>
//                     </motion.div>
//                 ))}
//             </div>
//         </section>
//     );
// }