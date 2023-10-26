import { NavLink } from "react-router-dom";
import {
  MdOutlineRoundaboutRight,
  MdMeetingRoom,
  MdOutlineRoomService,
} from "react-icons/md";
import { RiContactsLine, RiTeamLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSettings2, LuPanelBottomClose } from "react-icons/lu";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { FaPager } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

function Sidebar() {
  return (
    <div>
      <div className="fixed flex flex-col top-0 left-0 w-14 hover:w-64 md:w-64 bg-white h-full font-medium transition-all duration-300 z-10">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="hidden md:block mb-2">
              <div className="text-center">
                <img
                  src="https://picsum.photos/200"
                  alt=""
                  className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
                />
                <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
                  Admin Adminoglu
                </h5>
                <span className="hidden text-gray-400 lg:block">Admin</span>
              </div>
            </li>
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Menü
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <BiHomeAlt2 size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Ana Sayfa
                </span>
              </NavLink>
            </li>

            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <RiContactsLine className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Iletisim
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <MdOutlineRoundaboutRight size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Hakkimizda
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/header"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <TbLayoutNavbarCollapse size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Header
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/footer"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <LuPanelBottomClose size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Footer
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/document"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <HiOutlineDocumentText size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Belgeler
                </span>
              </NavLink>
            </li>

            {/* ana sayfa kismi */}
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  Ana Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
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
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MdOutlineRoomService className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Servisler
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/teams"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <RiTeamLine className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Ekip
                </span>
              </NavLink>
            </li>

            {/* icerik kismi */}
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-600">
                  İçerik Yönetimi
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/room"
                className={({ isActive }) =>
                  isActive
                    ? "relative flex flex-row items-center h-11 bg-slate-600 mx-2 rounded-lg text-white focus:outline-none"
                    : "relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
                }
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MdMeetingRoom size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Oda Ayarlari
                </span>
              </NavLink>
            </li>
            <li>
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
            </li>
          </ul>
          <p className="px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
