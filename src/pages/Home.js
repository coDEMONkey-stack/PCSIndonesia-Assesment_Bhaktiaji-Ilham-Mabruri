import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft, faUserClock } from "@fortawesome/free-solid-svg-icons";

import PCSNewsCarousel from '../components/Home/PCSNewsCarousel'


const Home = () => {
  return (
    <div className="bg-white min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-red-600 font-bold text-2xl">KerjaYuk!</h1>
        <FontAwesomeIcon icon={faBell} className="text-gray-600 text-2xl" />
      </div>

      <p className="text-gray-600 mt-2">Hi, Good Morning!</p>

      {/* Profile Card */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-xl text-white mt-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h2 className="font-bold text-lg">Tabay</h2>
            <p className="text-sm">UI/UX Designer</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <p>Location <span className="font-bold">Kantor Sahid</span></p>
          <p className="text-xs">Member since <span className="font-bold">01 Juni 2021</span></p>
        </div>
      </div>

      {/* Activity Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Today's Activity</h3>
        <div className="flex justify-around mt-2">
          {[
            { icon: faClock, time: "08:30", label: "Check In", textColor: "text-black" },
            { icon: faClockRotateLeft, time: "03:00:00", label: "Working Hours", textColor: "text-red-600" },
            { icon: faUserClock, time: "--:--", label: "Check Out", textColor: "text-black" }
          ].map(({ icon, time, label, textColor }, index) => (
            <div key={index} className="text-center">
              <FontAwesomeIcon icon={icon} className="text-red-600 text-3xl" />
              <p className={`font-bold text-lg mt-1 ${textColor}`}>{time}</p>
              <p className="text-gray-500 text-sm -mt-5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* PCS News */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">PCS News</h3>
        <div className="bg-white shadow-md rounded-lg p-4 mt-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-red-500 rounded-full"></div>
            <div>
              <h4 className="font-bold">Ana Riswati</h4>
              <p className="text-xs text-gray-500">Senin, 30 Mei 2022</p>
            </div>
          </div>
          {Array.from({ length: 4 }).map((_, i) => (
            <p key={i} className="text-gray-600 mt-2 text-sm">Kalimat {i + 1} - Lorem ipsum dolor sit amet...</p>
          ))}
        </div>
        <PCSNewsCarousel/>

      </div>

      {/* Online Section */}
      <div className="mt-6">
        <h3 className="text-lg font-bold">Online</h3>
        <div className="flex space-x-3 mt-2 overflow-x-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <p className="text-xs mt-1">User {i + 1}</p>
            </div>
          ))}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-red-500 text-white flex items-center justify-center text-xs font-bold rounded-full">10+</div>
            <p className="text-xs mt-1">more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
