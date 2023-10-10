import { Link } from "react-router-dom";
import { MdOutlineRoundaboutRight, MdMeetingRoom } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSettings2 } from "react-icons/lu";

function Sidebar() {
  return (
    <div>
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-zinc-800 h-full text-gray-200 font-medium transition-all duration-300 z-10">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-md font-medium tracking-wide text-gray-400">
                  Menü
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <BiHomeAlt2 size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Ana Sayfa
                </span>
              </Link>
            </li>

            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-400">
                  İçerik Yönetimi
                </div>
              </div>
            </li>
            
            <li>
              <Link
                to="/contact"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="text-blue-100 inline-flex justify-center items-center ml-4">
                  <RiContactsLine className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Iletisim
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MdOutlineRoundaboutRight size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Hakkimizda
                </span>
              </Link>
            </li>

            {/* icerik kismi */}
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-400">
                  İçerik Yönetimi
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/room"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <MdMeetingRoom size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Oda Ayarlari
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/room/feature"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <LuSettings2 size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Ozellik Ayarlari
                </span>
              </Link>
            </li>
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
