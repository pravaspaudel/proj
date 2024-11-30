import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/chat" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
