import React, { useEffect, useState } from 'react';
import Background from "../../components/ui/Background";
import Button2 from '../Button2/MagicBtn';
import { useNavigate } from 'react-router-dom';
import {logout } from "../../firebase";


export default function LiveClass({ name }) {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate('/');
  };
  const [classDetails, setClassDetails] = useState(null);

  useEffect(() => {
    fetch('/JSON_FOLDER/class.json')
      .then((response) => response.json())
      .then((data) => setClassDetails(data))
      .catch((error) => console.error("Error loading class details:", error));
  }, []);

  if (!classDetails) {
    return <div className="text-center mt-30">Loading class details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Background />
      <section className="relative z-10 backdrop-blur-md p-6">
        <h3 className="relative text-center mt-20 text-4xl">
          <span className="relative z-10 backdrop-blur-md">
            Welcome To PNexus <span className="block sm:inline">{name}</span>
          </span>
        </h3>



        <section className="flex justify-center space-x-20 items-center mt-5">
          <button className="dashboard__btn backdrop-blur-md bg-black p-4 rounded-full" onClick={goToHome}>
            Back To Home
          </button>
          <button className="dashboard__btn backdrop-blur-md bg-black p-4 rounded-full " onClick={logout}>
            Logout
          </button>
        </section>
        <h2 className="text-3xl mt-5 text-center ">Today Class Details</h2>
      </section>


      <section className="relative z-10 py-20 px-6">

        <div className="p-6 rounded-lg bg-white/10 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 shadow-lg backdrop-blur-md mx-auto">
          <h3 className="text-3xl font-bold underline mb-10 text-center">Course {classDetails.courseName}</h3>

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
