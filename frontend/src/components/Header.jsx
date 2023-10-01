import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-200 border-gray-200">
        <div className="h-14 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/">
            <span className="flex items-center">
              <img
                src="http://www.clubaida.com.tr//tema/genel/uploads/logo/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Club Aida"
              />
              <span className="self-center text-emerald-800 text-xl font-semibold whitespace-nowrap">
                Club Lorem Ipsum
              </span>
            </span>
          </Link>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link to="/rooms">
                  <span className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 ">
                    odalarimiz
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
