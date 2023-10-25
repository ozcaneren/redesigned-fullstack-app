import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState([]);
  const [dataHead, setDataHead] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/header/links"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getHeadData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/header/texts"
      );
      setDataHead(response.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getHeadData();
  }, []);

  return (
    <>
      <header className="w-full text-gray-700 bg-white shadow-sm body-font">
        <div className="container flex flex-col items-start p-6 mx-auto md:flex-row">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <div>
              {dataHead.map((header, index) => (
                <div key={index} className="flex justify-start items-center">
                  {header.headerTitle}
                </div>
              ))}
            </div>
          </a>
          <nav className="flex items-center justify-center text-base md:ml-auto">
            {data.map((header, index) => (
              <div key={index} className="flex justify-center items-center">
                {header.headerText ? (
                  <div>
                    {header.headerTextDropdown ? (
                      <li>
                        <span
                          onClick={() => toggleDropdown(index)}
                          className="relative flex cursor-pointer flex-row items-center h-11 focus:outline-none border-l-4 border-transparent"
                        >
                          <span
                            className={`ml-2 ${
                              index === openDropdown ? "rotate-180" : "rotate-0"
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
                          <span className="block py-2 pr-4 pl-3 border-b lg:border-0  lg:p-0">
                            {header.headerText}
                          </span>
                        </span>
                        {index === openDropdown && (
                          <ul className="absolute bg-gray-400 mt-2 p-1 px-5 ml-4 rounded-b space-y-2">
                            {header.headerTextDropdown &&
                              header.headerTextDropdown.map(
                                (item, itemIndex) => (
                                  <li
                                    key={itemIndex}
                                    className="block py-2 pr-4 pl-3 text-gray-100 border-b border-gray-100 hover-bg-gray-50 lg:hover-bg-transparent lg-border-0 lg-hover-text-blue-700 lg-p-0"
                                  >
                                    <Link
                                      to={
                                        item === "deneme"
                                          ? "/deneme"
                                          : item === "selam"
                                          ? "/faq"
                                          : item === "Hakkimizda"
                                          ? "/about"
                                          : "/"
                                      }
                                    >
                                      <span className="ml-1 text-md tracking-wide truncate">
                                        {item}
                                      </span>
                                    </Link>
                                  </li>
                                )
                              )}
                          </ul>
                        )}
                      </li>
                    ) : (
                      <div className="flex justify-center items-center">
                        <Link
                          to={
                            header.headerText === "Odalar"
                              ? "/contact"
                              : header.headerText === "Odalarimiz"
                              ? "/rooms"
                              : header.headerText === "Hakkimizda"
                              ? "/about"
                              : "/"
                          }
                        >
                          <span className="relative flex cursor-pointer flex-row items-center focus:outline-none border-l-4 border-transparent">
                            <span className="block py-2 pr-4 pl-3 border-b border-gray-100 lg:hover-bg-transparent lg-border-0 lg-p-0">
                              {header.headerText}
                            </span>
                          </span>
                        </Link>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </div>
      </header>
    </>
  );

  function toggleDropdown(index) {
    setOpenDropdown(index === openDropdown ? null : index);
  }
}
