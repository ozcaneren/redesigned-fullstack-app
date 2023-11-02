import { useState } from "react";
import { NavLink } from "react-router-dom";
import { LuPanelBottomClose } from "react-icons/lu";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const Footer = () => {
  const footerDropdownKey = "footerDropdownState";

  const [openFooterDropdown, setOpenFooterDropdown] = useState(() => {
    const storedValue = localStorage.getItem(footerDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleFooterDropdown = () => {
    const updatedValue = !openFooterDropdown;
    setOpenFooterDropdown(updatedValue);
    localStorage.setItem(footerDropdownKey, JSON.stringify(updatedValue));
  };
  return (
    <div>
      <NavLink
        onClick={toggleFooterDropdown}
        className="relative flex flex-row justify-between px-4 items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
      >
        <div className="flex items-center">
          <span className="inline-flex justify-center items-center">
            <LuPanelBottomClose size={20} />
          </span>
          <span className="ml-2 text-md tracking-wide truncate  ">Footer</span>
        </div>
        <div className="flex items-center">
          {openFooterDropdown ? (
            <AiOutlineArrowUp size={14} />
          ) : (
            <AiOutlineArrowDown size={14} />
          )}
        </div>
      </NavLink>
      {openFooterDropdown ? (
        <ul className="py-2 px-2 space-y-2">
          <li>
            <NavLink
              to="/footer/icon"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center pl-6">
                <LuPanelBottomClose size={20} />
              </span>
              <span className="pl-2 text-md tracking-wide truncate">Icon</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/footer/title"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center pl-6">
                <LuPanelBottomClose size={20} />
              </span>
              <span className="pl-2 text-md tracking-wide truncate">
                Başlik
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/footer/link"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center pl-6">
                <LuPanelBottomClose size={20} />
              </span>
              <span className="pl-2 text-md tracking-wide truncate">
                Linkler
              </span>
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
