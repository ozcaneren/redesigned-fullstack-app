import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import DocumentEditTitleModal from "./DocumentEditTitleModal";

export default function DocumentTitle() {
  const [documentTitle, setDocumentTitle] = useState([]);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [selectedTitleDocument, setSelectedTitleDocument] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/document", label: "Dökümanlar" },
    { url: "/document/title", label: "Döküman Başlıkları" },
  ];

  const getDocumentTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/document/titles"
      );
      setDocumentTitle(response.data);
    } catch (error) {
      console.error("Dökümanlar getirilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    getDocumentTitles();
  }, []);

  const handleTitleCheckboxChange = (documentId) => {
    if (selectedTitleDocument.includes(documentId)) {
      setSelectedTitleDocument(
        selectedTitleDocument.filter((id) => id !== documentId)
      );
    } else {
      setSelectedTitleDocument([...selectedTitleDocument, documentId]);
    }
  };

  const handleEditTitleSelected = () => {
    setShowTitleModal(true);
  };

  const handleTitleMasterCheckboxChange = () => {
    if (selectedTitleDocument.length === documentTitle.length) {
      setSelectedTitleDocument([]);
    } else {
      setSelectedTitleDocument(documentTitle.map((document) => document._id));
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-4/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <div className="ml-auto px-4">
                      <button
                        onClick={handleEditTitleSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showTitleModal && (
                        <DocumentEditTitleModal
                          documentId={selectedTitleDocument}
                          showTitleModal={showTitleModal}
                          setShowTitleModal={setShowTitleModal}
                        />
                      )}
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
                                  id="checkbox-all"
                                  type="checkbox"
                                  onChange={handleTitleMasterCheckboxChange}
                                  checked={
                                    selectedTitleDocument.length ===
                                    documentTitle.length
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
                              Iletisim Başlığı
                            </th>
                            <th
                              scope="col"
                              className="py-3 font-medium tracking-wider text-left"
                            >
                              Iletisim Bilgisi
                            </th>
                          </tr>
                        </thead>
                        {documentTitle.map((document, index) => (
                          <tbody key={index} className="bg-slate-600">
                            <tr className="hover:bg-slate-500">
                              <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                <input
                                  type="checkbox"
                                  id={`documentCheckbox-${document._id}`}
                                  onChange={() =>
                                    handleTitleCheckboxChange(document._id)
                                  }
                                  checked={selectedTitleDocument.includes(
                                    document._id
                                  )}
                                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                              </td>
                              <td className="w-[360px]">
                                <div className="py-4 max-w-xs pl-6 font-medium text-gray-200 truncate">
                                  <p className="truncate">{document.title}</p>
                                </div>
                              </td>
                              <td className="">
                                <div className="py-4 max-w-xs pr-6 font-medium text-gray-200 truncate">
                                  <p className="truncate">{document.text}</p>
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
  );
}