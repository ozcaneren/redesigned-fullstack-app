import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Document = () => {
  const documentDropdownKey = "documentDropdownState";

  const [openDocumentDropdown, setOpenDocumentDropdown] = useState(() => {
    const storedValue = localStorage.getItem(documentDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });
  const toggleDocumentDropdown = () => {
    const updatedValue = !openDocumentDropdown;
    setOpenDocumentDropdown(updatedValue);
    localStorage.setItem(documentDropdownKey, JSON.stringify(updatedValue));
  };
  return (
    <div>
      <NavLink
        onClick={toggleDocumentDropdown}
        className="relative flex flex-row justify-between px-4 items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
      >
        <div className="flex items-center">
          <span className="inline-flex justify-center items-center">
            <HiOutlineDocumentText size={20} />
          </span>
          <span className="ml-2 text-md tracking-wide truncate">Belgeler</span>
        </div>
        <div
          className={`${
            openDocumentDropdown
              ? "transition-transform duration-200 transform"
              : "rotate-180 transition-transform duration-200 transform"
          }`}
        >
          <AiOutlineArrowUp size={14} />
        </div>
      </NavLink>
      {openDocumentDropdown ? (
        <ul className="py-2 px-2 space-y-2">
          <li>
            <NavLink
              to="/document/title"
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
                Başlık
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/document/card"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center pl-6">
                <HiOutlineDocumentText size={20} />
              </span>
              <span className="pl-2 text-md tracking-wide truncate">Belge</span>
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
