import { NavLink } from "react-router-dom";
import { useState } from "react";
import { MdOutlineRoomService } from "react-icons/md";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Services = () => {
  const servicesDropdownKey = "servicesDropdownState";

  const [openServicesDropdown, setOpenServicesDropdown] = useState(() => {
    const storedValue = localStorage.getItem(servicesDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleServicesDropdown = () => {
    const updatedValue = !openServicesDropdown;
    setOpenServicesDropdown(updatedValue);
    localStorage.setItem(servicesDropdownKey, JSON.stringify(updatedValue));
  };
  return (
    <div>
      <NavLink
        onClick={toggleServicesDropdown}
        className="relative flex flex-row justify-between px-4 items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
      >
        <div className="flex items-center">
          <span className="inline-flex justify-center items-center">
            <MdOutlineRoomService size={20} />
          </span>
          <span className="ml-2 text-md tracking-wide truncate">Servisler</span>
        </div>
        <div className={`${openServicesDropdown ? "transition-transform duration-200 transform" : "rotate-180 transition-transform duration-200 transform"}`}>
          <AiOutlineArrowUp size={14} />
        </div>
      </NavLink>
      {openServicesDropdown ? (
        <ul className="py-2 px-2 space-y-2">
          <li>
            <NavLink
              to="/services/title"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center ml-6">
                <MdOutlineRoomService size={20} />
              </span>
              <span className="ml-2 text-md tracking-wide truncate">
                Başlık
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/card"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center ml-6">
                <MdOutlineRoomService size={20} />
              </span>
              <span className="ml-2 text-md tracking-wide truncate">
                Servis
              </span>
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
