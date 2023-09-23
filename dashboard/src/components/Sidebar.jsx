function Sidebar() {
  return (
    <div>
      <div>
        <div className="">
          <aside
            className="fixed pt-14 h-full top-0 left-0 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
          >
            <div className="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
              <div className="flex-1 flex flex-col pb-4">
                <div className="flex-1 px-3 pt-4 bg-gray-200 divide-y space-y-1">
                  <ul className="space-y-2 pb-2">
                    <span className="text-gray-700 ml-2 underline">Menu</span>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span className="ml-3">Ana Sayfa</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                        </svg>
                        <span className="ml-3">Site Yonetimi</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        target="_blank"
                        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                        <span className="ml-3">Dil Yonetimi</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                        </svg>
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          Menu Yonetimi
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul className="space-y-2 pt-4">
                    <span className="text-gray-700 ml-2 underline">Menu</span>
                    <li>
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                      >
                        <svg
                          className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                        </svg>
                        <span className="ml-3">Oda Yonetimi</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
