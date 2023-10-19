import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";

export default function Home() {
  const breadcrumbPaths = [{ url: "/", label: "Ana Sayfa" }];

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#F6F5F0] text-white">
        <Sidebar />
        {/* ana kisim */}
        <div className="h-full ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-1/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          {/* 4lü kartlar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
            <div className=" bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">1,234</p>
                <p>Visitors</p>
              </div>
            </div>
            <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">123</p>
                <p>Orders</p>
              </div>
            </div>
            <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
              <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <h1 className="text-blue-600">Logo</h1>
              </div>
              <div className="text-right">
                <p className="text-2xl">$12,345</p>
                <p>Sales</p>
              </div>
            </div>
            <div className="bg-neutral-700 shadow-lg rounded-md flex items-center justify-between p-3 border-b-2 border-gray-400 text-white font-medium group">
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
            <div className="relative border-b-2 border-gray-400 bg-neutral-700 flex flex-col min-w-0 mb-4 lg:mb-0 break-words w-full shadow-lg rounded-md">
              <div className="rounded-t mb-0 px-0 border-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-200">
                      Social
                    </h3>
                  </div>
                </div>
                <div className="block w-full overflow-x-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead>
                      <tr>
                        <th className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Referral
                        </th>
                        <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                          Visitors
                        </th>
                        <th className="px-4 bg-neutral-600 text-gray-100  align-middle border border-solid border-gray-200 dark:border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">
                          CTRO
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="">
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
                      <tr className="">
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
                      <tr className="">
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
                      <tr className="">
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
                      <tr className="">
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
            <div className="relative border-b-2 border-gray-400 flex flex-col min-w-0  break-words bg-neutral-700 w-full shadow-lg rounded-md">
              <div className="rounded-t mb-0 px-0">
                <div className="flex flex-wrap items-center px-4 py-2">
                  <div className="relative w-full max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-gray-200">
                      Recent Activities
                    </h3>
                  </div>
                </div>
                <div className="block w-full">
                  <div className="px-4 bg-neutral-600 text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Today
                  </div>
                  <ul className="my-1">
                    <li className="flex px-4">
                      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                        <span className="w-9 h-9 text-indigo-50"></span>
                      </div>
                      <div className="flex-grow flex items-center border-b border-gray-300 text-sm py-2">
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
                      <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
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
                  <div className="px-4 bg-neutral-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-700 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Yesterday
                  </div>
                  <ul className="my-1">
                    <li className="flex px-4">
                      <div className="w-9 h-9 rounded-full flex-shrink-0 bg-green-500 my-2 mr-3"></div>
                      <div className="flex-grow flex items-center border-gray-100 text-sm py-2">
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
        </div>
      </div>
    </div>
  );
}
