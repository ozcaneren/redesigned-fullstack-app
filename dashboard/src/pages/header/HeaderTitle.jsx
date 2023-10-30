import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import HeaderAddTitleModal from "./HeaderAddTitleModal";
import HeaderEditTitleModal from "./HeaderEditTitleModal";
import Layout from "../layout";

export default function HeaderTitle() {
  const [headerTexts, setHeaderTexts] = useState([]);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [selectedHeaderTexts, setselectedHeaderTexts] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/header", label: "Header" },
    { url: "/header/title", label: "Title" },
  ];

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

  const handleTextCheckboxChange = (headerId) => {
    if (selectedHeaderTexts.includes(headerId)) {
      setselectedHeaderTexts(
        selectedHeaderTexts.filter((id) => id !== headerId)
      );
    } else {
      setselectedHeaderTexts([...selectedHeaderTexts, headerId]);
    }
  };

  const handleTextEditSelected = () => {
    setShowTitleModal(true);
  };

  const handleTextDeleteSelected = () => {
    selectedHeaderTexts.map((headerId) => handleTextDelete(headerId));
  };

  const handleTextMasterCheckboxChange = () => {
    if (selectedHeaderTexts.length === headerTexts.length) {
      // Eğer tüm iletişimler zaten seçili ise, seçimleri kaldır.
      setselectedHeaderTexts([]);
    } else {
      // Tüm iletişimleri seç.
      setselectedHeaderTexts(headerTexts.map((header) => header._id));
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

  return (
    <>
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
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <HeaderAddTitleModal />
                    </div>
                    <div className="ml-auto mr-4">
                      <button
                        onClick={handleTextEditSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showTitleModal && (
                        <HeaderEditTitleModal
                          showTitleModal={showTitleModal}
                          setShowTitleModal={setShowTitleModal}
                          headerId={selectedHeaderTexts}
                        />
                      )}
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleTextDeleteSelected}
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
                                  id="headerTextCheckbox-all"
                                  type="checkbox"
                                  onChange={handleTextMasterCheckboxChange}
                                  checked={
                                    selectedHeaderTexts.length ===
                                    headerTexts.length
                                  }
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label className="sr-only">checkbox</label>
                              </div>
                            </th>
                            <th
                              scope="col"
                              className="py-3 pl-6 font-medium tracking-wider text-left "
                            >
                              Ana Başlık
                            </th>
                          </tr>
                        </thead>
                        {headerTexts.map((header, index) => (
                          <tbody key={index} className="bg-slate-600">
                            <tr className="hover:bg-slate-500">
                              <td className="py-5 px-4 flex items-center max-w-[320px] w-[10px]">
                                <input
                                  type="checkbox"
                                  id={`headerTextCheckbox-${header._id}`}
                                  onChange={() =>
                                    handleTextCheckboxChange(header._id)
                                  }
                                  checked={selectedHeaderTexts.includes(
                                    header._id
                                  )}
                                  className="w-4 h-4 flex justify-center items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                              </td>
                              <td className="">
                                <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                  <p className="truncate">
                                    {header.headerTitle}
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
      </Layout>
    </>
  );
}
