import Navbar from "/components/navbar";
import Modal from "/components/modal";
import Card from "/components/Card";
import React from "react";
import { useState } from "react";

function App() {
  const [names, setNames] = useState([
    // {
    //   name: "Muhammadali Zabihullayev",
    //   job: "Forntend developer",
    //   From: "Uzbekistan",
    //   Gender: "Male",
    // },
    // {
    //   name: "Amanillayev Fayzulloh",
    //   job: "Forntend injiner",
    //   From: "Uzbekistan",
    //   Gender: "Male",
    // },
    // {
    //   name: "Abduqahorov Ozodbek",
    //   job: "Forntend archetector",
    //   From: "Uzbekistan",
    //   Gender: "Male",
    // },
  ]);
  return (
    <div>
      <Navbar userCount={names.length} />

      {/* <div className="flex flex-wrap gap-5 justify-center items-center min-h-screen bg-gray-100 cursor-pointer">
        {names.map((item, index) => (
          <div
            key={index}
            className="w-72 bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              {item.name?.charAt(0)}
            </div>

            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>

            <p className="text-sm text-gray-500 mb-2">{item.job}</p>

            <div className="text-sm text-gray-600 space-y-1 mt-3">
              <p>
                🌍 <span className="font-semibold">{item.From}</span>
              </p>
              <p>
                👤 <span className="font-semibold">{item.Gender}</span>
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap gap-5 justify-center items-center min-h-screen bg-gray-100">
        {names.length === 0 ? (
          <div className="flex items-center  justify-center min-h-screen">
            <p className="text-9xl opacity-25 font-bold text-black">Not User</p>
          </div>
        ) : (
          names.map((item, index) => (
            <div
              key={index}
              className="w-72 bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transition duration-300"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                {item.name?.charAt(0)}
              </div>

              <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>

              <p className="text-sm text-gray-500 mb-2">{item.job}</p>

              <div className="text-sm text-gray-600 space-y-1 mt-3">
                <p>
                  🌍 <span className="font-semibold">{item.From}</span>
                </p>
                <p>
                  👤 <span className="font-semibold">{item.Gender}</span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      <Modal setNames={setNames} />
    </div>
  );
}

export default App;
