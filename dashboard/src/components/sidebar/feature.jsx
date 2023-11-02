import { NavLink } from "react-router-dom";
import { LuSettings2 } from "react-icons/lu";

export const Feature = () => {
  return (
    <div>
      <NavLink
        to="/room/feature"
        className={({ isActive }) =>
          isActive
            ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
            : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
        }
      >
        <span className="inline-flex justify-center items-center ml-4">
          <LuSettings2 size={20} />
        </span>
        <span className="ml-2 text-md tracking-wide truncate">
          Ozellik Ayarlari
        </span>
      </NavLink>
    </div>
  );
};
