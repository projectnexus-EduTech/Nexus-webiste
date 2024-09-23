import React, { Suspense } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Text } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Button } from './button';
import { Input } from './input';

function FloatingText({ text, position, color }) {
  return (
    <Text
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  date: Yup.date().min(new Date(), 'Date must be in the future').required('Date is required'),
  timeSlot: Yup.string().required('Time slot is required'),
});

function InterviewRegistration() {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
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
            <FloatingText text="Mock" position={[-2, 2, -5]} color="white" />
            <FloatingText text="Interview" position={[2, 2, -5]} color="white" />
            <FloatingText text="Registration" position={[0, -2, -5]} color="white" />
          </Suspense>
        </Canvas>
      </div>

      {/* Registration Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 p-8 rounded-lg backdrop-blur-md w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Register for Mock Interview</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    as={Input}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    as={Input}
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    as={Input}
                    type="date"
                    name="date"
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  />
                  <ErrorMessage name="date" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div>
                  <Field
                    as="select"
                    name="timeSlot"
                    className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-md p-2"
                  >
                    <option value="">Select Time Slot</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                  </Field>
                  <ErrorMessage name="timeSlot" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {isSubmitting ? 'Submitting...' : 'Register'}
                </Button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </div>
  );
}

export default InterviewRegistration;