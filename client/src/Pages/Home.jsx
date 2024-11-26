import React from "react";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";

const Home = () => {
  return (
    <div className="font-title">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="flex items-center justify-around gap-48">
          <div className="w-1/2 p-8">
            <p className="text-4xl font-bold text-gray-800">
              Connect with people
            </p>
            <p className="text-lg mt-4 text-gray-600">
              Build meaningful relationships and chat seamlessly.
            </p>
          </div>
          <div className="w-1/2 p-8">
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
