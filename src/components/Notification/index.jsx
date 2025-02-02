import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCheckCircle, faTimesCircle, faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Notification = () => {
  const notifications = [
    {
      title: "Reimbursement",
      description:
        "Your submission 'Lorem ipsum dolor sit amet...' with the with a total cost of 50,000 has been paid, please check your BRIMO application. Thank you.",
      status: "paid",
      date: "Today",
      icon: <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />,
    },
    {
      title: "Reimbursement",
      description:
        "Your submission 'description' has been rejected, please click for details.",
      status: "rejected",
      date: "Yesterday",
      icon: <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />,
    },
    {
      title: "Reimbursement",
      description:
        "Your submission will be processed according to the reimbursement schedule. Please wait.",
      status: "processing",
      date: "2022-10-06",
      icon: <FontAwesomeIcon icon={faArrowCircleRight} className="text-blue-500" />,
    },
    {
      title: "Sickness",
      description: "Your submission has been approved by the Superior",
      status: "approved",
      date: "2022-10-05",
      icon: <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />,
    },
  ];

  return (
    <div className="relative p-0">
      {/* <h1 className="text-2xl font-bold mb-4">Notification</h1> */}
      <div className="bg-white fixed shadow-lg w-[480px] border-b border-gray-200 flex h-20 -mt-6 -ml-4 items-center">
        <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft} className="text-black text-lg mr-2 ml-5" />
        </Link>
        <h1 className="text-lg text-red-500 font-semibold">Notification</h1>
      </div>

      <div className="min-h-screen py-20 space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex p-3 items-start transition-all duration-200 hover:bg-blue-100 cursor-pointer"
          >
            <div className="flex items-center space-x-4">
                <div className="text-2xl">{notification.icon}</div>
                <div className="flex-1">
                    <div className="flex justify-between items-center w-full">
                        <h2 className="text-lg font-semibold flex-1">{notification.title}</h2>
                        <p className="absolute text-gray-400 text-xs right-5 text-right">{notification.date}</p>
                    </div>
                    <p className="text-gray-600 text-sm mb-1 max-w-prose">{notification.description}</p>
                </div>
            </div>
        
          </div>
        ))}
         {/* <style jsx global>{`
            .card::hover {
            background: #e0e4fc;
            cursor:pointer;
            }
        `}</style> */}
      </div>
    </div>
  );
};

export default Notification;