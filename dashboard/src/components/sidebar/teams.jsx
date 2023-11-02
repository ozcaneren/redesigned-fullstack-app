import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RiTeamLine } from "react-icons/ri";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Teams = () => {
  const teamsDropdownKey = "teamsDropdownState";

  const [openTeamsDropdown, setOpenTeamsDropdown] = useState(() => {
    const storedValue = localStorage.getItem(teamsDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleTeamsDropdown = () => {
    const updatedValue = !openTeamsDropdown;
    setOpenTeamsDropdown(updatedValue);
    localStorage.setItem(teamsDropdownKey, JSON.stringify(updatedValue));
  };
  return (
    <div>
      <NavLink
        onClick={toggleTeamsDropdown}
        className="relative flex flex-row justify-between px-4 items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
      >
        <div className="flex items-center">
          <span className="inline-flex justify-center items-center">
            <RiTeamLine size={20} />
          </span>
          <span className="ml-2 text-md tracking-wide truncate">Ekip</span>
        </div>
        <div className={`${openTeamsDropdown ? "transition-transform duration-200 transform" : "rotate-180 transition-transform duration-200 transform"}`}>
          <AiOutlineArrowUp size={14} />
        </div>
      </NavLink>
      {openTeamsDropdown ? (
        <ul className="py-2 px-2 space-y-2 ">
          <li>
            <NavLink
              to="/teams/title"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center ml-6">
                <RiTeamLine size={20} />
              </span>
              <span className="ml-2 text-md tracking-wide truncate">
                Başlık
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/teams/card"
              className={({ isActive }) =>
                isActive
                  ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                  : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              }
            >
              <span className="inline-flex justify-center items-center ml-6">
                <RiTeamLine size={20} />
              </span>
              <span className="ml-2 text-md tracking-wide truncate">
                Çalışanlar
              </span>
            </NavLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
};
