import { useEffect, useState } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumbs";
import FooterAddTextModal from "./FooterAddTextModal";
import FooterEditTextModal from "./FooterEditTextModal";
import Layout from "../layout";

export default function FooterTitle() {
  const [footerText, setFooterText] = useState([]);
  const [showTextModal, setShowTextModal] = useState(false);
  const [selectedFooterText, setSelectedFooterText] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/footer", label: "Footer" },
    { url: "/footer/title", label: "Başlık ve Metin" },
  ];

  const getFooterTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/footer/texts"
      );
      setFooterText(response.data);
    } catch (error) {
      console.error("Error fetching footers:", error);
    }
  };

  useEffect(() => {
    getFooterTitles();
  }, []);

  const handleTextDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/footer/text/${id}`);
      setFooterText();
    } catch (error) {
      console.error("Error deleting footer:", error);
    }
  };

  const handleTextCheckboxChange = (footerId) => {
    if (selectedFooterText.includes(footerId)) {
      setSelectedFooterText(selectedFooterText.filter((id) => id !== footerId));
    } else {
      setSelectedFooterText([...selectedFooterText, footerId]);
    }
  };

  const handleTextEditSelected = () => {
    setShowTextModal(true);
  };

  const handleTextDeleteSelected = () => {
    selectedFooterText.map((footerId) => handleTextDelete(footerId));
  };

  const handleTextMasterCheckboxChange = () => {
    if (selectedFooterText.length === footerText.length) {
      setSelectedFooterText([]);
    } else {
      setSelectedFooterText(footerText.map((footer) => footer._id));
    }
  };

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
          <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
            <div className="">
              <div className="">
                <div className="flex flex-row">
                  <div className="flex justify-center items-center">
                    <div className="w-full flex justify-center">
                      <div className="w-full px-4 relative">
                        <FooterAddTextModal />
                      </div>
                      <div className="ml-auto mr-4">
                        <button
                          onClick={handleTextEditSelected}
                          className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Düzenle
                        </button>
                        {showTextModal && (
                          <FooterEditTextModal
                            showTextModal={showTextModal}
                            setShowTextModal={setShowTextModal}
                            footerId={selectedFooterText}
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
                <div className="max-w-full mx-auto px-4 pt-4">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr>
                              <th scope="col" className="p-4 w-[10px]">
                                <div className="flex items-center">
                                  <input
                                    type="checkbox"
                                    className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
                                    checked={
                                      selectedFooterText.length ===
                                      footerText.length
                                    }
                                    onChange={handleTextMasterCheckboxChange}
                                  />
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left"
                              >
                                Ana Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left"
                              >
                                Alt Başlık
                              </th>
                            </tr>
                          </thead>
                          {footerText.map((footerText, index) => (
                            <tbody key={index} className="bg-slate-600">
                              <tr className="hover:bg-slate-500">
                                <td className="py-5 px-4 flex items-center max-w-[320px] w-[10px]">
                                  <input
                                    type="checkbox"
                                    className="w-4 h-4 flex justify-center items-center text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    checked={selectedFooterText.includes(
                                      footerText._id
                                    )}
                                    onChange={() =>
                                      handleTextCheckboxChange(footerText._id)
                                    }
                                  />
                                </td>
                                <td className="">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {footerText.footerTitle}
                                    </p>
                                  </div>
                                </td>
                                <td className="">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {footerText.footerText}
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
      </div>
    </Layout>
  );
}
