import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const Chat = () => {
  const fetchdata = async () => {
    try {
      const response = await fetch("http://localhost:8000/auth/users", {
        method: ["GET"],
        body: JSON.stringify({
          username,
          email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("error:", errorData.message);
        return;
      }
      const data = await response.json();
      console.log("data is :", data);
    } catch (error) {
      console.error("Error:", error.message);
    }

    useEffect(() => {
      fetchdata();
    }, []);
  };

  return (
    <div>
      {/* navbar*/}
      <div>
        <Navbar />
      </div>

      <div></div>
    </div>
  );
};

export default Chat;
