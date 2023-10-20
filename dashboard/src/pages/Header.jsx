import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import HeaderModal from "./HeaderModal";
import HeaderEditModal from "./HeaderEditModal";

export default function Header() {
  const [headers, setHeaders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [headerId, setHeaderId] = useState();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/header", label: "Header" },
  ];

  const getHeaders = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/headers");
      setHeaders(response.data.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getHeaders();
  }, []);

  const handleDelete = async (headerId) => {
    try {
      await axios.delete(`http://localhost:4000/api/header/${headerId}`);
      getHeaders();
    } catch (error) {
      console.error("Error deleting header:", error);
    }
  };

  const handleClick = (headerId) => {
    setHeaderId(headerId);
    setShowModal(true);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div>
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <HeaderModal />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="max-w-6xl mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-[#9BA4B5] text-white">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                              >
                                Dropdownlar
                              </th>
                              <th
                                scope="col"
                                className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                              >
                                Duzenle/Sil
                              </th>
                            </tr>
                          </thead>
                          {headers.map((header, index) => (
                            <tbody key={index} className="bg-[#474E68]">
                              <tr className="hover:bg-[#6B728E]">
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {header.headerText}
                                    </p>
                                  </div>
                                </td>
                                <td className="max-w-[450px] w-[400px]">
                                  <div className="py-4 max-w-xs pr-6 flex flex-row space-x-1 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {header.headerTextDropdown}
                                    </p>
                                    <p>/</p>
                                    <p className="truncate">
                                      {header.headerTextDropdown1}
                                    </p>
                                    <p>/</p>
                                    <p className="truncate">
                                      {header.headerTextDropdown2}
                                    </p>
                                    <p>/</p>
                                    <p className="truncate">
                                      {header.headerTextDropdown3}
                                    </p>
                                  </div>
                                </td>
                                <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap space-x-2">
                                  <button
                                    onClick={() => handleClick(header._id)}
                                  >
                                    <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                      <TbEdit size={19} />
                                    </div>
                                  </button>
                                  {showModal && (
                                    <HeaderEditModal
                                      showModal={showModal}
                                      setShowModal={setShowModal}
                                      headerId={headerId}
                                    />
                                  )}
                                  <button
                                    onClick={() => handleDelete(header._id)}
                                  >
                                    <div className="font-medium mt-1 text-red-600 dark:text-red-500 hover:underline">
                                      <HiOutlineTrash size={20} />
                                    </div>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          ))}
                        </table>
                      </div>
                    </div>
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
