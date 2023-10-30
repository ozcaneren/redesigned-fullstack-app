import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import HeaderAddLinkModal from "./HeaderAddLinkModal";
import HeaderEditLinkModal from "./HeaderEditLinkModal";
import Layout from "../layout";

export default function HeaderLink() {
  const [headerLinks, setHeaderLinks] = useState([]);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [selectedHeaderLinks, setselectedHeaderLinks] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/header", label: "Header" },
    { url: "/header/link", label: "Link" },
  ];

  const getHeaderLinks = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/header/links"
      );
      setHeaderLinks(response.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getHeaderLinks();
  }, []);

  const handleLinkCheckboxChange = (headerId) => {
    if (selectedHeaderLinks.includes(headerId)) {
      setselectedHeaderLinks(
        selectedHeaderLinks.filter((id) => id !== headerId)
      );
    } else {
      setselectedHeaderLinks([...selectedHeaderLinks, headerId]);
    }
  };

  const handleLinkEditSelected = () => {
    setShowLinkModal(true);
  };

  const handleLinkDeleteSelected = () => {
    selectedHeaderLinks.map((headerId) => handleLinkDelete(headerId));
  };

  const handleMasterCheckboxChange = () => {
    if (selectedHeaderLinks.length === headerLinks.length) {
      // Eğer tüm iletişimler zaten seçili ise, seçimleri kaldır.
      setselectedHeaderLinks([]);
    } else {
      // Tüm iletişimleri seç.
      setselectedHeaderLinks(headerLinks.map((header) => header._id));
    }
  };

  const handleLinkDelete = async (headerId) => {
    try {
      await axios.delete(`http://localhost:4000/api/header/link/${headerId}`);
      getHeaderLinks();
    } catch (error) {
      console.error(error);
    }
  };

  const sortedHeaderLinks = headerLinks.sort((a, b) => a.order - b.order);

  return (
    <Layout>
      <div className="ml-14 mb-10 md:ml-64">
        <div className="pt-4 pb-4 px-4">
          <div className="w-3/12">
            <div>
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
            <div className="">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <HeaderAddLinkModal />
                    </div>
                    <div className="ml-auto mr-4">
                      <button
                        onClick={handleLinkEditSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showLinkModal && (
                        <HeaderEditLinkModal
                          showLinkModal={showLinkModal}
                          setShowLinkModal={setShowLinkModal}
                          headerId={selectedHeaderLinks}
                        />
                      )}
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleLinkDeleteSelected}
                        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Sil
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-full mx-auto px-4 pt-2">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                  <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full table-fixed">
                        <thead className="bg-gray-400 text-white">
                          <tr>
                            <th scope="col" className="p-4 w-[10px]">
                              <div className="flex items-center">
                                <input
                                  id="headerLinkCheckbox-all"
                                  type="checkbox"
                                  onChange={handleMasterCheckboxChange}
                                  checked={
                                    selectedHeaderLinks.length ===
                                    headerLinks.length
                                  }
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label className="sr-only">checkbox</label>
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="py-3 pl-6 font-medium tracking-wider text-left"
                            >
                              Başlık
                            </th>
                            <th
                              scope="col"
                              className="py-3 font-medium tracking-wider text-left"
                            >
                              Dropdownlar
                            </th>
                          </tr>
                        </thead>
                        {sortedHeaderLinks.map((header, index) => (
                          <tbody key={index} className="bg-slate-600">
                            <tr className="hover:bg-slate-500">
                              <td className="py-5 px-4 flex items-center max-w-[320px] w-[10px]">
                                <input
                                  type="checkbox"
                                  id={`headerLinkCheckbox-${header._id}`}
                                  onChange={() =>
                                    handleLinkCheckboxChange(header._id)
                                  }
                                  checked={selectedHeaderLinks.includes(
                                    header._id
                                  )}
                                  className="w-4 h-4 flex justify-center items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                              </td>
                              <td className="max-w-[320px] w-[320px]">
                                <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                  <p className="truncate">
                                    {header.headerText}
                                  </p>
                                </div>
                              </td>
                              <td className="">
                                <div className="py-4 max-w-xs pr-6 flex flex-row space-x-1 font-medium text-gray-200 truncate">
                                  <p className="truncate">
                                    {header.headerTextDropdown ? (
                                      header.headerTextDropdown.map(
                                        (item, index) => (
                                          <span key={index}>
                                            {item}
                                            {index !==
                                              header.headerTextDropdown.length -
                                                1 && (
                                              <span className="text-gray-200">
                                                ,
                                              </span>
                                            )}
                                          </span>
                                        )
                                      )
                                    ) : (
                                      <span className="text-gray-200">-</span>
                                    )}
                                  </p>
                                </div>
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
    </Layout>
  );
}
