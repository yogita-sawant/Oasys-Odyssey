import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameLoader from "./GameLoader";

const EventsPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const events = [
    {
      id: 1,
      name: "Banglore Mania",
      isActive: true,
      category: "Gaming",
      description:
        "A fast-paced, high-energy competition where the stakes are as high as the excitement",
      participants: 100,
      prize: "$500 Cash",
      imgUrl: "/images/bang.jpg",
      fee: 100,
      maxParticipants: 100,
    },
    {
      id: 2,
      name: "Bombay Blitz",
      isActive: false,
      category: "Learning",
      description:
        "A thrilling race to dominate the board and claim victory before your opponents",
      participants: 10,
      prize: "",
      imgUrl: "/images/mumbai.jpg",
      fee: 100,
      maxParticipants: 100,
    },
    {
      id: 3,
      name: "Delhi Delight",
      isActive: false,
      category: "Community",
      description:
        "A legendary showdown to crown the greatest Monopoly player of all time",
      participants: 4,
      prize: "",
      imgUrl: "/images/delhi.jpg",
      fee: 100,
      maxParticipants: 100,
    },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? events
      : events.filter((event) =>
          activeFilter === "active" ? event.isActive : !event.isActive
        );

  return (
    <>
      {isLoading && <GameLoader />}

      <div className="min-h-screen bg-[#0a0a2a] text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)",
            backgroundSize: "4px 4px",
          }}
        />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/50 to-pink-500/20"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/50 to-pink-500/20"></div>
          <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20"></div>
          <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-blue-500/20 via-purple-500/50 to-pink-500/20"></div>
        </div>

        <div className="w-full flex flex-col justify-center items-center relative z-10 px-4 sm:px-6 lg:px-12 py-6 md:py-12">
          <div className="text-center mb-8 md:mb-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
              Dive into the Adventure
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 max-w-2xl mx-auto opacity-80">
              Outplay, Outscore, and Outshine the Competition!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className={`flex max-w-sm flex-col h-full rounded-2xl p-6 relative overflow-hidden border-2 border-transparent ${
                  event.isActive
                    ? "bg-gradient-to-tr from-blue-900/70 to-purple-900/70 hover:border-blue-500"
                    : "bg-gradient-to-tr from-gray-900/70 to-gray-800/70 hover:border-gray-600"
                } transform transition duration-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] group cursor-pointer`}
              >
                <div className="absolute top-4 right-4 flex items-center space-x-2">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      event.isActive ? "text-green-400" : "text-gray-400"
                    }`}
                  >
                    {event.isActive ? "🎮 Live" : "⏳ Upcoming"}
                  </span>
                </div>

                <div className="flex items-center mb-4">
                  <div className="mr-4 opacity-80 group-hover:opacity-100 transition">
                    <img
                      src={event.imgUrl}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold">{event.name}</h2>
                </div>

                <div className="mb-4 mt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-blue-300">
                      Registered Participants
                    </span>
                    <span className="text-sm font-bold text-blue-200">
                      {event.participants} / {event.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full bg-blue-900 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{
                        width: `${
                          (event.participants / event.maxParticipants) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                <p className="text-sm opacity-70 mb-4 flex-grow">
                  {event.description}
                </p>

                <div className="mt-auto">
                  {event.isActive ? (
                    <button
                      onClick={() => navigate("/dashboard")}
                      className="w-full py-3 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition group relative overflow-hidden"
                    >
                      <span className="relative z-10">Enter</span>
                      <div className="absolute inset-0 bg-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="ml-2 group-hover:translate-x-1 transition">
                        →
                      </span>
                    </button>
                  ) : (
                    <div className="bg-blue-500/10 py-3 rounded-lg text-center">
                      {event.prize} Coming Soon
                    </div>
                  )}
                  <div className="mt-1 text-center">
                    Pool Entry Fee : $ {event.fee}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/images/mono.png"
          alt="Man Standing"
          className="absolute bottom-0 left-0 w-[80%] sm:w-80 h-[30rem] sm:h-[48rem] transform scale-1"
        />
      </div>
    </>
  );
};

export default EventsPage;
