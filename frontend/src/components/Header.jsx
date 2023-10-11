import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Header() {
  const [data, setData] = useState([]);
  const { language, toggleLanguage } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!isDropdownOpen2);
  };

  const toggleDropdown3 = () => {
    setDropdownOpen3(!isDropdownOpen3);
  };

  const toggleDropdown4 = () => {
    setDropdownOpen4(!isDropdownOpen4);
  };

  const toggleDropdown5 = () => {
    setDropdownOpen5(!isDropdownOpen5);
  };

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/headers");
      setData(response.data.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((header, index) => (
        <nav
          key={index}
          className="fixed top-0 left-0 w-full z-50 bg-gray-200 border-gray-200"
        >
          <div className="h-14 flex flex-wrap justify-between items-center mx-auto z-20 max-w-screen-xl">
            <Link to="/">
              <span className="flex items-center">
                <span className="self-center text-emerald-800 text-xl font-semibold whitespace-nowrap">
                  {language === "tr"
                    ? header.headerTitle
                    : header.headerTitle_en}
                </span>
              </span>
            </Link>
            <div className="flex items-center">
              <button onClick={toggleLanguage}>Dil Değiştir</button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {header.headerText || header.headerText_en ? (
                  <div>
                    {header.headerTextDropdown ? (
                      <li>
                        <span
                          onClick={toggleDropdown}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              isDropdownOpen ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText
                              : header.headerText_en}
                          </span>
                        </span>
                        {isDropdownOpen && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerTextDropdown && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerTextDropdown === "Belgeler"
                                      ? "/documents"
                                      : header.headerTextDropdown ===
                                        "Sikca Sorulan Sorular"
                                      ? "/faq"
                                      : header.headerTextDropdown ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerTextDropdown
                                      : header.headerTextDropdown_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                            {header.headerTextDropdown1 && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerTextDropdown1 === "Belgeler"
                                      ? "/documents"
                                      : header.headerTextDropdown1 ===
                                        "Sikca Sorulan Sorular"
                                      ? "/faq"
                                      : header.headerTextDropdown1 ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerTextDropdown1
                                      : header.headerTextDropdown1_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div>
                        <Link
                          to={
                            header.headerText === "Iletisim"
                              ? "/contact"
                              : header.headerText === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                              {language === "tr"
                                ? header.headerText
                                : header.headerText_en}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}

                {header.headerText1 || header.headerText1_en ? (
                  <div>
                    {header.headerText1Dropdown ? (
                      <li>
                        <span
                          onClick={toggleDropdown1}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              isDropdownOpen1 ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText1
                              : header.headerText1_en}
                          </span>
                        </span>
                        {isDropdownOpen1 && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerText1Dropdown && (
                              <li className="block py-2 pr-4 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText1Dropdown === "Iletisim"
                                      ? "/contact"
                                      : header.headerText1Dropdown ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText1Dropdown ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText1Dropdown
                                      : header.headerText1Dropdown_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                            {header.headerText1Dropdown1 && (
                              <li className="block py-2 pr-4 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText1Dropdown1 === "Iletisim"
                                      ? "/contact"
                                      : header.headerText1Dropdown1 ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText1Dropdown1 ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText1Dropdown1
                                      : header.headerText1Dropdown1_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div>
                        <Link
                          to={
                            header.headerText1 === "Iletisim"
                              ? "/contact"
                              : header.headerText1 === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText1 === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                              {language === "tr"
                                ? header.headerText1
                                : header.headerText1_en}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}

                {header.headerText2 || header.headerText2_en ? (
                  <div>
                    {header.headerText2Dropdown ? (
                      <li>
                        <span
                          onClick={toggleDropdown2}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              isDropdownOpen2 ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText2
                              : header.headerText2_en}
                          </span>
                        </span>
                        {isDropdownOpen2 && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerText2Dropdown && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText2Dropdown === "Iletisim"
                                      ? "/contact"
                                      : header.headerText2Dropdown ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText2Dropdown ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText2Dropdown
                                      : header.headerText2Dropdown_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                            {header.headerText2Dropdown1 && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText2Dropdown1 === "Iletisim"
                                      ? "/contact"
                                      : header.headerText2Dropdown1 ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText2Dropdown1 ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText2Dropdown1
                                      : header.headerText2Dropdown1_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div>
                        <Link
                          to={
                            header.headerText2 === "Iletisim"
                              ? "/contact"
                              : header.headerText2 === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText2 === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                              {language === "tr"
                                ? header.headerText2
                                : header.headerText2_en}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}

                {header.headerText3 || header.headerText3_en ? (
                  <div>
                    {header.headerText3Dropdown ? (
                      <li>
                        <span
                          onClick={toggleDropdown3}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              isDropdownOpen3 ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText3
                              : header.headerText3_en}
                          </span>
                        </span>
                        {isDropdownOpen && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerText3Dropdown && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText3Dropdown === "Iletisim"
                                      ? "/contact"
                                      : header.headerText3Dropdown ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText3Dropdown ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText3Dropdown
                                      : header.headerText3Dropdown_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                            {header.headerText3Dropdown1 && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText3Dropdown1 === "Iletisim"
                                      ? "/contact"
                                      : header.headerText3Dropdown1 ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText3Dropdown1 ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText3Dropdown1
                                      : header.headerText3Dropdown1_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div>
                        <Link
                          to={
                            header.headerText3 === "Iletisim"
                              ? "/contact"
                              : header.headerText3 === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText3 === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                              {language === "tr"
                                ? header.headerText3
                                : header.headerText3_en}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}

                {header.headerText4 || header.headerText4_en ? (
                  <div>
                    {header.headerText4Dropdown ? (
                      <li>
                        <span
                          onClick={toggleDropdown4}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              isDropdownOpen4 ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText4
                              : header.headerText4_en}
                          </span>
                        </span>
                        {isDropdownOpen4 && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerText4Dropdown && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText4Dropdown === "Iletisim"
                                      ? "/contact"
                                      : header.headerText4Dropdown ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText4Dropdown ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText4Dropdown
                                      : header.headerText4Dropdown_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                            {header.headerText4Dropdown1 && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText4Dropdown1 === "Iletisim"
                                      ? "/contact"
                                      : header.headerText4Dropdown1 ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText4Dropdown1 ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText4Dropdown1
                                      : header.headerText4Dropdown1_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div>
                        <Link
                          to={
                            header.headerText4 === "Iletisim"
                              ? "/contact"
                              : header.headerText4 === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText4 === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex ml-2 cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                              {language === "tr"
                                ? header.headerText4
                                : header.headerText4_en}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}

                {header.headerText5 || header.headerText5_en ? (
                  <div>
                    {header.headerText5Dropdown ? (
                      <li>
                        <span
                          onClick={toggleDropdown5}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              isDropdownOpen5 ? "rotate-180" : "rotate-0"
                            } transition-transform`}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>
                          </span>
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText5
                              : header.headerText5_en}
                          </span>
                        </span>
                        {isDropdownOpen && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerText5Dropdown && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText5Dropdown === "Iletisim"
                                      ? "/contact"
                                      : header.headerText5Dropdown ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText5Dropdown ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText5Dropdown
                                      : header.headerText5Dropdown_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                            {header.headerText5Dropdown1 && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                <Link
                                  to={
                                    header.headerText5Dropdown1 === "Iletisim"
                                      ? "/contact"
                                      : header.headerText5Dropdown1 ===
                                        "Odalarimiz"
                                      ? "/rooms"
                                      : header.headerText5Dropdown1 ===
                                        "Hakkimizda"
                                      ? "/about"
                                      : "/"
                                  }
                                >
                                  <span className="ml-1 text-md tracking-wide truncate">
                                    {language === "tr"
                                      ? header.headerText5Dropdown1
                                      : header.headerText5Dropdown1_en}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div>
                        <Link
                          to={
                            header.headerText5 === "Iletisim"
                              ? "/contact"
                              : header.headerText5 === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText5 === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                              {language === "tr"
                                ? header.headerText5
                                : header.headerText5_en}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      ))}
    </>
  );
}
