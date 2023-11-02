import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Header = () => {
  const headerDropdownKey = "headerDropdownState";
  const [openHeaderDropdown, setOpenHeaderDropdown] = useState(() => {
    const storedValue = localStorage.getItem(headerDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const toggleHeaderDropdown = () => {
    const updatedValue = !openHeaderDropdown;
    setOpenHeaderDropdown(updatedValue);
    localStorage.setItem(headerDropdownKey, JSON.stringify(updatedValue));
  };

  return (
    <div>
      <NavLink
        onClick={toggleHeaderDropdown}
        className="relative flex flex-row items-center px-4 justify-between h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
      >
        <div className="flex items-center">
          <span className="inline-flex justify-center items-center">
            <TbLayoutNavbarCollapse size={20} />
          </span>
          <span className="ml-2 text-md tracking-wide truncate">Header</span>
        </div>
        <div
          className={`${
            openHeaderDropdown
              ? "transition-transform duration-200 transform"
              : "rotate-180 transition-transform duration-200 transform"
          }`}
        >
          <AiOutlineArrowUp size={14} />
        </div>
      </NavLink>
      <div>
        {openHeaderDropdown ? (
          <ul className="py-2 px-2 space-y-2">
            <li>
              <NavLink
                to="/header/title"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center pl-6">
                  <HiOutlineDocumentText size={20} />
                </span>
                <span className="pl-2 text-md tracking-wide truncate">
                  Title
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/header/link"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center pl-6">
                  <HiOutlineDocumentText size={20} />
                </span>
                <span className="pl-2 text-md tracking-wide truncate">
                  Link
                </span>
              </NavLink>
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};
