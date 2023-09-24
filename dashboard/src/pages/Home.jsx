import { FaUserAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#25242a] text-white">
        {/* header kismi */}
        <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
          <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 text-center bg-[#373a43] border-none">
            <FaUserAlt className="mr-2" />
            <span className="hidden md:block">ADMIN</span>
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
        {/* sidebar kismi */}
        <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-[#373a43] h-full text-white transition-all duration-300 border-none z-10 sidebar">
          <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-300 uppercase">
                    Main
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Dashboard
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Board
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Messages
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Notifications
                  </span>
                </a>
              </li>
              <li className="px-5 hidden md:block">
                <div className="flex flex-row items-center mt-5 h-8">
                  <div className="text-sm font-light tracking-wide text-gray-300 uppercase">
                    Settings
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Profile
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-gray-800 pr-6"
                >
                  <span className="inline-flex justify-center items-center ml-4">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </span>
                  <span className="ml-2 text-sm tracking-wide truncate">
                    Settings
                  </span>
                </a>
              </li>
            </ul>
            <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
              Copyright @2023
            </p>
          </div>
        </div>
        {/* ana kisim */}
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
          {/* 4lü kartlar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            <div className="bg-zinc-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">1,234</p>
                <p>Visitors</p>
              </div>
            </div>
            <div className="bg-zinc-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">123</p>
                <p>Orders</p>
              </div>
            </div>
            <div className="bg-zinc-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">$12,345</p>
                <p>Sales</p>
              </div>
            </div>
            <div className="bg-zinc-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-gray-600 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">$12,345</p>
                <p>Balances</p>
              </div>
            </div>
          </div>
          {/* 2li kartlar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
            {/* sosyal kismi */}
            <div className="relative bg-zinc-700 flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded-md">
              <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-100">
                      Social
                    </h3>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Referral
                        </th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Visitors
                        </th>
                        <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                          CTRO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          A
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1,234
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">50%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          B
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1,234
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">50%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          C
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1,234
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">50%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          D
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1,234
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">50%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          E
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          1,234
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">50%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                                <div className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* aktivite kismi */}
            <div className="relative flex flex-col min-w-0  break-words bg-zinc-700 w-full shadow-lg rounded-md">
              <div className="rounded-t mb-0 px-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">
                      Recent Activities
                    </h3>
                  </div>
                </div>
                <div className="block w-full">
                  <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Today
                  </div>
                  <ul className="my-1">
                    <li className="flex px-4">
                      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                        <span className="w-9 h-9 text-indigo-50"></span>
                      </div>
                      <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                        <div className="flex-grow flex justify-between items-center">
                          <div className="self-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates.
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <a
                              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                              href="#0"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="flex px-4">
                      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-red-500 my-2 mr-3">
                        <span className="w-9 h-9 text-red-50"></span>
                      </div>
                      <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                        <div className="flex-grow flex justify-between items-center">
                          <div className="self-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates.
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <a
                              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                              href="#0"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Yesterday
                  </div>
                  <ul className="my-1">
                    <li className="flex px-4">
                      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3"></div>
                      <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                        <div className="flex-grow flex justify-between items-center">
                          <div className="self-center">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptates.
                          </div>
                          <div className="flex-shrink-0 ml-2">
                            <a
                              className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
                              href="#0"
                            >
                              View
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* 3lu kartlar */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 gap-4 text-white">
            <div className="md:col-span-2 xl:col-span-3">
              <h3 className="text-lg font-semibold text-center">
                lorem ipsum dolor sit amet consectetur adipisicing elit
              </h3>
            </div>
            <div className="md:col-span-2 xl:col-span-1">
              <div className="rounded bg-[#3f3f46] p-3">
                <div className="flex justify-between py-1 text-black dark:text-white">
                  <h3 className="text-sm font-semibold">Tasks in X</h3>
                  <span className="text-gray-500 text-center cursor-pointer">
                    ---
                  </span>
                </div>
                <div className="text-sm text-black dark:text-gray-50 mt-2">
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    a
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    b
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    c
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    d
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    e
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    f
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded bg-[#3f3f46] p-3">
                <div className="flex justify-between py-1 text-black dark:text-white">
                  <h3 className="text-sm font-semibold">Tasks in Y</h3>
                  <span className="text-gray-500 text-center cursor-pointer">
                    ---
                  </span>
                </div>
                <div className="text-sm text-black dark:text-gray-50 mt-2">
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    a
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    b
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    c
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    d
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    e
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    f
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded bg-[#3f3f46] p-3">
                <div className="flex justify-between py-1 text-black dark:text-white">
                  <h3 className="text-sm font-semibold">Tasks in Z</h3>
                  <span className="text-gray-500 text-center cursor-pointer">
                    ---
                  </span>
                </div>
                <div className="text-sm text-black dark:text-gray-50 mt-2">
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    a
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    b
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    c
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    d
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    e
                  </div>
                  <div className="bg-white dark:bg-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded mt-1 border-b border-gray-100 dark:border-gray-900 cursor-pointer">
                    f
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
