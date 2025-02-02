import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCalendarCheck, faSignOutAlt, faFileAlt, faCog } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "text-red-500" : "text-gray-400");

  return (
    <div className="font-base fixed bottom-0 z-[2] m-0 flex w-full max-w-[480px] list-none bg-white border-t border-gray-300 p-2.5 text-center align-middle font-semibold leading-[13px] no-underline before:absolute before:top-0 before:left-0 before:w-full before:h-[6px] before:bg-gradient-to-t before:from-gray-300 before:to-transparent before:content-['']">
      <div className="inline-block w-1/5 text-[10px]">
        <Link to="/">
          <div className="relative mb-1 pt-1">
            <FontAwesomeIcon icon={faHome} className={`text-xl ${isActive("/")}`} />
          </div>
          <span className={`text-sm inline-block whitespace-nowrap ${isActive("/")}`}>Home</span>
        </Link>
      </div>

      <div className="inline-block w-1/5 text-[10px] mr-3">
        <Link to="/attendance">
          <div className="relative mb-1 pt-1">
            <FontAwesomeIcon icon={faCalendarCheck} className={`text-xl ${isActive("/attendance")}`} />
          </div>
          <span className={`text-sm inline-block whitespace-nowrap ${isActive("/attendance")}`}>Attendance</span>
        </Link>
      </div>

      <div className="flex flex-col -mt-7 z-10 items-center text-white bg-red-500 p-4 h-6 w-6 rounded-full shadow-lg">
        <Link to="/checkout">
          <div className="relative mb-4 mt-0">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-2xl text-white" />
          </div>
          <span className="text-sm inline-block whitespace-nowrap text-gray-400">Checkout</span>
        </Link>
      </div>

      <div className="inline-block w-1/5 text-[10px] ml-3">
        <Link to="/form">
          <div className="relative mb-1 pt-1">
            <FontAwesomeIcon icon={faFileAlt} className={`text-xl ${isActive("/form")}`} />
          </div>
          <span className={`text-sm inline-block whitespace-nowrap ${isActive("/form")}`}>Form</span>
        </Link>
      </div>

      <div className="inline-block w-1/5 text-[10px]">
        <Link to="/settings">
          <div className="relative mb-1 pt-1">
            <FontAwesomeIcon icon={faCog} className={`text-xl ${isActive("/settings")}`} />
          </div>
          <span className={`text-sm inline-block whitespace-nowrap ${isActive("/settings")}`}>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
