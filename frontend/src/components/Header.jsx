import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Header() {
  const [data, setData] = useState([]);
  const { language, toggleLanguage } = useLanguage();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
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
          <div className="h-14 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
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
                  <li>
                    {header.headerDropdown || header.headerDropdown1 ? (
                      <li>
                        <span
                          onClick={toggleDropdown}
                          className="relative flex flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
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
                          {isDropdownOpen ? (
                            <ul className="mt-2 space-y-2">
                              {header.headerDropdown && (
                                <li className="ml-2 cursor-pointer">
                                  <Link
                                    to={
                                      header.headerDropdown === "Iletisim"
                                        ? "/contact"
                                        : header.headerDropdown === "Odalarimiz"
                                        ? "/rooms"
                                        : header.headerDropdown === "Hakkimizda"
                                        ? "/about"
                                        : "/"
                                    }
                                  >
                                    <span className="ml-2 text-md tracking-wide truncate">
                                      {language === "tr"
                                        ? header.headerDropdown
                                        : header.headerDropdown_en}
                                    </span>
                                  </Link>
                                </li>
                              )}
                              {header.headerDropdown1 && (
                                <li className="ml-2 cursor-pointer">
                                  <Link
                                    to={
                                      header.headerDropdown1 === "Iletisim"
                                        ? "/contact"
                                        : header.headerDropdown1 ===
                                          "Odalarimiz"
                                        ? "/rooms"
                                        : header.headerDropdown1 ===
                                          "Hakkimizda"
                                        ? "/about"
                                        : "/"
                                    }
                                  >
                                    <span className="ml-2 text-md tracking-wide truncate">
                                      {language === "tr"
                                        ? header.headerDropdown1
                                        : header.headerDropdown1_en}
                                    </span>
                                  </Link>
                                </li>
                              )}
                            </ul>
                          ) : (
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
                              <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                {language === "tr"
                                  ? header.headerText
                                  : header.headerText_en}
                              </span>
                            </Link>
                          )}
                        </span>
                      </li>
                    ) : (
                      <li>
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
                          <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                            {language === "tr"
                              ? header.headerText
                              : header.headerText_en}
                          </span>
                        </Link>
                      </li>
                    )}
                  </li>
                ) : null}

                <li>
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
                    <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                      {language === "tr"
                        ? header.headerText1
                        : header.headerText1_en}
                    </span>
                  </Link>
                </li>
                {header.headerText2 || header.headerText2_en ? (
                  <li>
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
                      <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                        {language === "tr"
                          ? header.headerText2
                          : header.headerText2_en}
                      </span>
                    </Link>
                  </li>
                ) : null}
                {/* headerText3 */}
                {header.headerText3 || header.headerText3_en ? (
                  <li>
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
                      <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                        {language === "tr"
                          ? header.headerText3
                          : header.headerText3_en}
                      </span>
                    </Link>
                  </li>
                ) : null}

                {/* headerText4 */}
                {header.headerText4 || header.headerText4_en ? (
                  <li>
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
                      <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                        {language === "tr"
                          ? header.headerText4
                          : header.headerText4_en}
                      </span>
                    </Link>
                  </li>
                ) : null}

                {/* headerText5 */}
                {header.headerText5 || header.headerText5_en ? (
                  <li>
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
                      <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                        {language === "tr"
                          ? header.headerText5
                          : header.headerText5_en}
                      </span>
                    </Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      ))}
    </>
  );
}
