import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-black to-gray-900">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/videos/opener.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#F44336] via-[#ccd8f3] to-[#EF5350] text-shadow-lg">
          Oasys-Odyssey
        </h1>
        <p className="text-lg md:text-xl font-semibold opacity-90 text-gray-800">
          Stay Bullish, Play Stylish!
        </p>
        <button onClick={() => navigate("/events")}>test</button>
      </div>
    </div>
  );
};

export default LandingPage;
