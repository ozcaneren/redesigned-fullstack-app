import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="">
      <div className="">
        {/* header kismi */}
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
          <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 text-center bg-[#373a43] border-none">
            <FaUserAlt className="mr-2" />
            <span className="hidden md:block">
              <Link to="/">Admin</Link>
            </span>
          </div>
          {/* ust taraf admin kismi
              alt taraf logout kismi  */}
          <div className="flex justify-end items-center w-full h-14 bg-[#373a43]">
            <div className="rounded flex items-center max-w-xl mr-4 p-2 shadow-sm border border-gray-600">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="w-full pl-3 text-sm text-white bg-[#39383e] outline-none focus:outline-none"
              />
            </div>
            <ul className="flex items-center">
              <li>
                <div className="block w-px h-6 mx-3 bg-gray-500"></div>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center mr-4 hover:text-blue-100"
                >
                  <span className="inline-flex mr-1">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                  </span>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
