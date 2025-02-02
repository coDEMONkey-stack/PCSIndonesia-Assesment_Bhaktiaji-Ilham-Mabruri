import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClock } from "@fortawesome/free-regular-svg-icons";
import { faClockRotateLeft, faUserClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import PCSNewsCarousel from '../components/Home/PCSNewsCarousel'


const Home = () => {

  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-red-600 font-bold text-2xl">KerjaYuk!</h1>
        <Link to="/notifications">
          <FontAwesomeIcon icon={faBell} className="text-gray-600 text-2xl" />
        </Link>
      </div>

      <p className="text-gray-600 mt-2">Hi, Good Morning!</p>

      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 rounded-2xl text-white mt-4 shadow-lg">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
            <div>
              <h2 className="font-bold text-xl">Bhaktiaji Ilham</h2>
              <p className="text-sm -mt-5 font-thin italic">Frontend Developer</p>
        </div>
      </div>

          <div className="text-right mt-2">
            <p className="text-sm font-thin italic">Member since</p>
            <p className="font-bold -mt-5 text-lg">01 Juni 2021</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p>
            Location <br/> <span className="font-bold">Kantor Sahid</span>
          </p>
          <p className="text-xs font-bold">ICO</p>
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
        {isOffline ? (
          <div className="bg-white rounded-lg shadow-md p-3">
            <p className="text-red-600 font-bold">Anda sedang offline, silahkan aktifkan internet untuk melihat rekan yang sedang Online</p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default Home;
