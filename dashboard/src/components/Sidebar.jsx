import { Link } from "react-router-dom";
import { MdOutlineRoundaboutRight, MdMeetingRoom, MdOutlineRoomService } from "react-icons/md";
import { RiContactsLine, RiTeamLine } from "react-icons/ri";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSettings2, LuPanelBottomClose } from "react-icons/lu";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { FaPager } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";

function Sidebar() {
  return (
    <div>
      <div className="fixed flex flex-col top-0 left-0 w-14 hover:w-64 md:w-64 bg-zinc-800 h-full text-gray-200 font-medium transition-all duration-300 z-10">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="hidden md:block mb-2">
              <div className="flex pl-5 items-center space-x-2">
                <div className="bg-gray-700 p-2 rounded-full">
                  <FaUserAlt size={20} className="text-gray-300" />
                </div>
                <span>
                  <p className="text-base font-medium tracking-wider text-gray-100">
                    Admin
                  </p>
                </span>
              </div>
            </li>
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
                  Sayfa Yonetimi
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
            <li>
              <Link
                to="/header"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <TbLayoutNavbarCollapse size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Header
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/footer"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <LuPanelBottomClose size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Footer
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/document"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlineDocumentText size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Belgeler
                </span>
              </Link>
            </li>

            {/* ana sayfa kismi */}
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-md font-medium tracking-wide text-gray-400">
                  Ana Sayfa Yonetimi
                </div>
              </div>
            </li>
            <li>
              <Link
                to="/hero"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="text-blue-100 inline-flex justify-center items-center ml-4">
                  <FaPager className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Hero Section
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="text-blue-100 inline-flex justify-center items-center ml-4">
                  <MdOutlineRoomService className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Servisler
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-zinc-700 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
              >
                <span className="text-blue-100 inline-flex justify-center items-center ml-4">
                  <RiTeamLine className="" size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Ekip
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
          <p className="px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
