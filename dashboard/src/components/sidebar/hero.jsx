import { NavLink } from "react-router-dom";
import { FaPager } from "react-icons/fa";

export const Hero = () => {
  return (
    <div>
      <NavLink
        to="/hero"
        className={({ isActive }) =>
          isActive
            ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
            : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
        }
      >
        <span className="inline-flex justify-center items-center ml-4  ">
          <FaPager className="" size={20} />
        </span>
        <span className="ml-2 text-md tracking-wide truncate  ">
          Hero Section
        </span>
      </NavLink>
    </div>
  );
};
