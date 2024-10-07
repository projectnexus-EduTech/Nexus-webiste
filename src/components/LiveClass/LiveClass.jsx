import React, { useEffect, useState } from 'react';
import Background from "../../components/ui/Background";
import Button2 from '../Button2/MagicBtn';

export default function LiveClass() {
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    fetch('/JSON_FOLDER/class.json')
      .then((response) => response.json())
      .then((data) => setClassDetails(data))
      .catch((error) => console.error("Error loading class details:", error));
  }, []);

  if (!classDetails) {
    return <div className="text-center mt-20">Loading class details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Background />
      {/*  Class Details */}
      <section className="relative z-10 py-20 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center backdrop-blur-md">Today Class Details</h2>
        <div className="p-6 rounded-lg bg-white/10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 shadow-lg backdrop-blur-md mx-auto">
          <h3 className="text-3xl font-bold underline mb-10 text-center">Course {classDetails.courseName}</h3>

          {/* Flex container to keep text on the same line */}
          <div className="flex items-center space-x-2">
            <h6 className="text-xl font-semibold whitespace-nowrap">Today Topics:</h6>
            <p>{classDetails.topics.join(', ')}</p>
          </div>

          <div className="flex items-center space-x-4 mt-8">
            <h6 className="text-xl font-semibold">Time:</h6>
            <p>{classDetails.time}</p>
          </div>

          <div className="flex items-center space-x-4 mt-8">
            <h6 className="text-xl font-semibold">Class Link:</h6>
            <Button2 className="" name={"Click Here"} onClick={() => window.open(classDetails.classLink, "_blank")} />
          </div>
        </div>
      </section>
    </div>
  );
}
