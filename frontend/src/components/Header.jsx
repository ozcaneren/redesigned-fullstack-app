import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// import { useLanguage } from "../LanguageContext";

export default function Header() {
  const [data, setData] = useState([]);
  // const { language, toggleLanguage } = useLanguage();

  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);

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
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-200 border-gray-200">
        <div className="h-14 flex flex-wrap justify-end items-center mx-auto z-20 max-w-screen-xl">
          {data.map((header, index) => (
            <div key={index} className="flex justify-end items-center">
              <ul className="grid mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {header.headerText || header.headerText_en ? (
                  <div>
                    {header.headerTextDropdown ? (
                      <li>
                        <span
                          onClick={() => toggleDropdown(index)}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              getDropdownState(index)
                                ? "rotate-180"
                                : "rotate-0"
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
                          <span className="block py-2 pr-4 pl-3 text-modalLabelText border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">                            
                            {header.headerText}
                          </span>
                        </span>
                        {getDropdownState(index) && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerTextDropdown && (
                              <li className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover-text-blue-700 lg:p-0">
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
                                    {header.headerTextDropdown}
                                  </span>
                                </Link>
                              </li>
                            )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div className="flex justify-center items-center">
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
                          <span className="relative flex cursor-pointer flex-row items-center focus:outline-none text-white-600 hover:text-white-800 border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 text-modalLabelText border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0">
                                {header.headerText}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  );

  // Her dropdown için ilgili state değerini döndüren bir yardımcı fonksiyon
  function getDropdownState(index) {
    switch (index) {
      case 0:
        return isDropdownOpen1;
      case 1:
        return isDropdownOpen2;
      case 2:
        return isDropdownOpen3;
      case 3:
        return isDropdownOpen4;
      case 4:
        return isDropdownOpen5;
      default:
        return false;
    }
  }

  // Her dropdown için ilgili açma/kapama fonksiyonunu döndüren bir yardımcı fonksiyon
  function toggleDropdown(index) {
    switch (index) {
      case 0:
        setDropdownOpen1(!isDropdownOpen1);
        break;
      case 1:
        setDropdownOpen2(!isDropdownOpen2);
        break;
      case 2:
        setDropdownOpen3(!isDropdownOpen3);
        break;
      case 3:
        setDropdownOpen4(!isDropdownOpen4);
        break;
      case 4:
        setDropdownOpen5(!isDropdownOpen5);
        break;
      default:
        break;
    }
  }
}
