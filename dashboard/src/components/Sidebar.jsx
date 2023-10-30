import { NavLink } from "react-router-dom";
import {
  MdOutlineRoundaboutRight,
  MdMeetingRoom,
  MdOutlineRoomService,
} from "react-icons/md";
import { RiContactsLine, RiTeamLine } from "react-icons/ri";
import { useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { LuSettings2, LuPanelBottomClose } from "react-icons/lu";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { FaPager } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

// const menuData = [
//   {
//     id: 1,
//     title: "Ana Sayfa",
//     path: "/",
//     icon: <BiHomeAlt2 size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 2,
//     title: "Iletisim",
//     path: "/contact",
//     icon: <RiContactsLine size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 3,
//     title: "Hakkimizda",
//     path: "/about",
//     icon: <MdOutlineRoundaboutRight size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 4,
//     title: "Header",
//     path: "/header",
//     icon: <TbLayoutNavbarCollapse size={20} />,
//     cName: "nav-text",
//     dropdown: [
//       {
//         id: 1,
//         title: "Title",
//         path: "/header/title",
//         icon: <HiOutlineDocumentText size={20} />,
//         cName: "nav-text",
//       },
//       {
//         id: 2,
//         title: "Link",
//         path: "/header/link",
//         icon: <HiOutlineDocumentText size={20} />,
//         cName: "nav-text",
//       },
//     ],
//   },
//   {
//     id: 5,
//     title: "Footer",
//     path: "/footer",
//     icon: <LuPanelBottomClose size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 6,
//     title: "Belgeler",
//     path: "/document",
//     icon: <HiOutlineDocumentText size={20} />,
//     cName: "nav-text",
//     dropdown: [
//       {
//         id: 1,
//         title: "Title",
//         path: "/document/title",
//         icon: <HiOutlineDocumentText size={20} />,
//         cName: "nav-text",
//       },
//       {
//         id: 2,
//         title: "Card",
//         path: "/document/card",
//         icon: <HiOutlineDocumentText size={20} />,
//         cName: "nav-text",
//       },
//     ],
//   },
//   {
//     id: 7,
//     title: "Hero Section",
//     path: "/hero",
//     icon: <FaPager size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 8,
//     title: "Servisler",
//     path: "/services",
//     icon: <MdOutlineRoomService size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 9,
//     title: "Ekip",
//     path: "/teams",
//     icon: <RiTeamLine size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 10,
//     title: "Oda Ayarlari",
//     path: "/room",
//     icon: <MdMeetingRoom size={20} />,
//     cName: "nav-text",
//   },
//   {
//     id: 11,
//     title: "Ozellik Ayarlari",
//     path: "/room/feature",
//     icon: <LuSettings2 size={20} />,
//     cName: "nav-text",
//   },
// ];

function Sidebar() {
  const headerDropdownKey = "headerDropdownState";
  const documentDropdownKey = "documentDropdownState";
  const footerDropdownKey = "footerDropdownState";

  const [openHeaderDropdown, setOpenHeaderDropdown] = useState(() => {
    const storedValue = localStorage.getItem(headerDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [openDocumentDropdown, setOpenDocumentDropdown] = useState(() => {
    const storedValue = localStorage.getItem(documentDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [openFooterDropdown, setOpenFooterDropdown] = useState(() => {
    const storedValue = localStorage.getItem(footerDropdownKey);
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const toggleHeaderDropdown = () => {
    const updatedValue = !openHeaderDropdown;
    setOpenHeaderDropdown(updatedValue);
    localStorage.setItem(headerDropdownKey, JSON.stringify(updatedValue));
  };

  const toggleDocumentDropdown = () => {
    const updatedValue = !openDocumentDropdown;
    setOpenDocumentDropdown(updatedValue);
    localStorage.setItem(documentDropdownKey, JSON.stringify(updatedValue));
  };

  const toggleFooterDropdown = () => {
    const updatedValue = !openFooterDropdown;
    setOpenFooterDropdown(updatedValue);
    localStorage.setItem(footerDropdownKey, JSON.stringify(updatedValue));
  };

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
                onClick={toggleHeaderDropdown} // Header dropdown için tıklama işlevi
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <TbLayoutNavbarCollapse size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Header
                </span>
              </NavLink>
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <HiOutlineDocumentText size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <HiOutlineDocumentText size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Link
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <NavLink
                onClick={toggleFooterDropdown}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              >
                <span className="inline-flex justify-center items-center ml-4  ">
                  <LuPanelBottomClose size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate  ">
                  Footer
                </span>
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <LuPanelBottomClose size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Icon
                      </span>
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <LuPanelBottomClose size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <LuPanelBottomClose size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Linkler
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </li>
            <li>
              <NavLink
                onClick={toggleDocumentDropdown}
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-slate-500 text-gray-900 hover:text-gray-100 mx-2 rounded-lg"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <HiOutlineDocumentText size={20} />
                </span>
                <span className="ml-2 text-md tracking-wide truncate">
                  Belgeler
                </span>
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <HiOutlineDocumentText size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
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
                      <span className="inline-flex justify-center items-center ml-6">
                        <HiOutlineDocumentText size={20} />
                      </span>
                      <span className="ml-2 text-md tracking-wide truncate">
                        Belge
                      </span>
                    </NavLink>
                  </li>
                </ul>
              ) : null}
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
