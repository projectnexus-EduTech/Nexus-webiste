import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logout } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import LiveClass from '../LiveClass/LiveClass'
import Background from "../ui/Background";


function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      <Background />
      <div className="dashboard__container">
        {/* <p className="backdrop-blur-md">Welcome to Project Nexus {name}</p> */}
        {/* <div>{name}</div> */}
        {/* <div>{user?.email}</div> */}
        <LiveClass name={name}/>
        {/* <div className="flex">
          <button className="dashboard__btn backdrop-blur-md" onClick={logout}>
            Back To Home
          </button>
          <button className="dashboard__btn backdrop-blur-md" onClick={logout}>
            Logout
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default Dashboard;