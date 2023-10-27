import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import { HiOutlineTrash } from "react-icons/hi";
import { TbEdit } from "react-icons/tb";
import HeaderAddTitleModal from "./HeaderAddTitleModal";
import HeaderEditTitleModal from "./HeaderEditTitleModal";
import HeaderAddLinkModal from "./HeaderAddLinkModal";
import HeaderEditLinkModal from "./HeaderEditLinkModal";

export default function Header() {
  const [headerLinks, setHeaderLinks] = useState([]);
  const [headerTexts, setHeaderTexts] = useState([]);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [headerId, setHeaderId] = useState();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/header", label: "Header" },
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

  const getHeaderTexts = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/header/texts"
      );
      setHeaderTexts(response.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getHeaderTexts();
  }, []);

  const handleLinkDelete = async (headerId) => {
    try {
      await axios.delete(`http://localhost:4000/api/header/link/${headerId}`);
      getHeaderLinks();
    } catch (error) {
      console.error(error);
    }
  };

  const handleTextDelete = async (headerId) => {
    try {
      await axios.delete(`http://localhost:4000/api/header/text/${headerId}`);
      getHeaderTexts();
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleClick = (headerId) => {
    setHeaderId(headerId);
    setShowTitleModal(true);
  };

  const handleLinkClick = (headerId) => {
    setHeaderId(headerId);
    setShowLinkModal(true);
  };

  const sortedHeaderLinks = headerLinks.sort((a, b) => a.order - b.order);

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
              <div>
                <div className="max-w-2xl mx-auto px-4 pt-2">
                  <div className="flex justify-center items-center">
                    <div className="w-full flex items-center">
                      <div className="relative py-1">
                        <HeaderAddTitleModal />
                      </div>
                      <h1 className="ml-44">
                        <div className="text-xl text-modalLabelText font-semibold text-center">
                          Başlık
                        </div>
                      </h1>
                    </div>
                  </div>
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase"
                              >
                                Ana Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                              >
                                Duzenle/Sil
                              </th>
                            </tr>
                          </thead>
                          {headerTexts.map((header, index) => (
                            <tbody key={index} className="bg-slate-600">
                              <tr className="hover:bg-slate-500">
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {header.headerTitle}
                                    </p>
                                  </div>
                                </td>
                                <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap">
                                  <button
                                    onClick={() => handleTitleClick(header._id)}
                                  >
                                    <div className="font-medium mr-2 mt-1 text-cyan-500 hover:underline">
                                      <TbEdit size={19} />
                                    </div>
                                  </button>
                                  {showTitleModal && (
                                    <HeaderEditTitleModal
                                      showTitleModal={showTitleModal}
                                      setShowTitleModal={setShowTitleModal}
                                      headerId={headerId}
                                    />
                                  )}
                                  <button
                                    onClick={() => handleTextDelete(header._id)}
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
              <div>
                <div className="max-w-6xl mx-auto px-4 pt-12">
                  <div className="flex justify-center items-center">
                    <div className="w-full flex items-center">
                      <div className="relative py-1">
                        <HeaderAddLinkModal />
                      </div>
                      <h1 className="ml-[350px]">
                        <div className="text-xl text-modalLabelText font-semibold text-center">
                          Link ve Dropdownlar
                        </div>
                      </h1>
                    </div>
                  </div>
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th
                                scope="col"
                                className="py-3 pl-6 text-xs font-medium tracking-wider text-left uppercase w-[400px]"
                              >
                                Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 text-xs font-medium tracking-wider text-left uppercase w-[400px]"
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
                          {sortedHeaderLinks.map((header, index) => (
                            <tbody key={index} className="bg-slate-600">
                              <tr className="hover:bg-slate-500">
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
                                      {header.headerTextDropdown ? (
                                        header.headerTextDropdown.map(
                                          (item, index) => (
                                            <span key={index}>
                                              {item}
                                              {index !==
                                                header.headerTextDropdown
                                                  .length -
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
                                <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap">
                                  <button
                                    onClick={() => handleLinkClick(header._id)}
                                  >
                                    <div className="font-medium mt-1 mr-2 text-cyan-500 hover:underline">
                                      <TbEdit size={19} />
                                    </div>
                                  </button>
                                  {showLinkModal && (
                                    <HeaderEditLinkModal
                                      showLinkModal={showLinkModal}
                                      setShowLinkModal={setShowLinkModal}
                                      headerId={headerId}
                                    />
                                  )}
                                  <button
                                    onClick={() => handleLinkDelete(header._id)}
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
