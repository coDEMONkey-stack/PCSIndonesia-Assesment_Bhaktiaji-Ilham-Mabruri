import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarCheck, faSignOutAlt, faFileAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-base fixed bottom-0 z-[2] m-0 flex w-full max-w-[480px] list-none border-t border-gray-300 p-2.5 text-center align-middle font-semibold leading-[13px] no-underline before:absolute before:top-0 before:left-0 before:w-full before:h-[6px] before:bg-gradient-to-t before:from-gray-300 before:to-transparent before:content-['']">
        <div className="inline-block w-1/5 text-[10px]">
            <Link to="/">
                <div className="relative mb-1 pt-1">
                    <FontAwesomeIcon icon={faHome} className="text-xl" />
                </div>
            <span className="text-sm inline-block whitespace-nowrap text-[#a8a8a8]">Home</span>
            </Link>
        </div>

        <div className="inline-block w-1/5 text-[10px] mr-3">
            <Link to="/attendance">
                <div className="relative mb-1 pt-1">
                    <FontAwesomeIcon icon={faCalendarCheck} className="text-xl" />
                </div>
            <span className="text-sm inline-block whitespace-nowrap text-[#a8a8a8]">attendance</span>
            </Link>
        </div>

        <div className="flex flex-col -mt-7 z-10 items-center text-white bg-red-500 p-4 h-6 w-6 rounded-full shadow-lg">
            <Link to="/checkout">
                <div className="relative mb-4 mt-0">
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl text-white" />
                </div>
                <span className="text-sm inline-block whitespace-nowrap text-[#a8a8a8]">Checkout</span>
            </Link>
        </div>

        <div className="inline-block w-1/5 text-[10px] ml-3">
            <Link to="/form">
                <div className="relative mb-1 pt-1">
                    <FontAwesomeIcon icon={faFileAlt} className="text-xl" />
                </div>
            <span className="text-sm inline-block whitespace-nowrap text-[#a8a8a8]">form</span>
            </Link>
        </div>

        <div className="inline-block w-1/5 text-[10px]">
            <Link to="/settings">
                <div className="relative mb-1 pt-1">
                    <FontAwesomeIcon icon={faCog} className="text-xl" />
                </div>
            <span className="text-sm inline-block whitespace-nowrap text-[#a8a8a8]">settings</span>
            </Link>
        </div>
    </div>
  );
};

export default Footer;
