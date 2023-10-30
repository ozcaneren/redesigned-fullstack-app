import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layout";
import Breadcrumb from "../../components/Breadcrumbs";
import DocumentEditCardModal from "./DocumentEditCardModal";
import DocumentAddCardModal from "./DocumentAddCardModal";

export default function DocumentCard() {
  const [documentCard, setDocumentCard] = useState([]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/document", label: "Dökümanlar" },
    { url: "/document/card", label: "Döküman Kartları" },
  ];

  const getDocumentCards = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/document/cards"
      );
      setDocumentCard(response.data);
    } catch (error) {
      console.error("Dökümanlar getirilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    getDocumentCards();
  }, []);

  const handleCheckboxChange = (documentId) => {
    if (selectedDocument.includes(documentId)) {
      setSelectedDocument(selectedDocument.filter((id) => id !== documentId));
    } else {
      setSelectedDocument([...selectedDocument, documentId]);
    }
  };

  const handleEditCardSelected = () => {
    setShowCardModal(true);
  };

  const handleMasterCheckboxChange = () => {
    if (selectedDocument.length === documentCard.length) {
      // Eğer tüm iletişimler zaten seçili ise, seçimleri kaldır.
      setSelectedDocument([]);
    } else {
      // Tüm iletişimleri seç.
      setSelectedDocument(documentCard.map((document) => document._id));
    }
  };

  const handleDelete = async (documentId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/document/card/${documentId}`
      );
      getDocumentCards();
    } catch (error) {
      console.error("Döküman silinirken hata oluştu:", error);
    }
  };

  const handleCardSelectedDelete = () => {
    selectedDocument.map((documentId) => handleDelete(documentId));
  };

  return (
    <Layout>
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
            <div className="flex flex-row pt-6">
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                  <div className="w-full px-4 relative">
                    <DocumentAddCardModal />
                  </div>
                  <div className="ml-auto mr-4">
                    <button
                      onClick={handleEditCardSelected}
                      className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                      Düzenle
                    </button>
                    {showCardModal && (
                      <DocumentEditCardModal
                        documentId={selectedDocument}
                        showCardModal={showCardModal}
                        setShowCardModal={setShowCardModal}
                      />
                    )}
                  </div>
                  <div className="ml-auto">
                    <button
                      onClick={handleCardSelectedDelete}
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
                                id="checkbox-all"
                                type="checkbox"
                                onChange={handleMasterCheckboxChange}
                                checked={
                                  selectedDocument.length ===
                                  documentCard.length
                                }
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                              <label className="sr-only">checkbox</label>
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="py-3 pl-6 w-[360px] font-medium tracking-wider text-left"
                          >
                            Iletisim Başlığı
                          </th>
                          <th
                            scope="col"
                            className="py-3 w-[360px] font-medium tracking-wider text-left"
                          >
                            Iletisim Bilgisi
                          </th>
                          <th
                            scope="col"
                            className="py-3 font-medium tracking-wider text-left"
                          >
                            Iletisim Bilgisi
                          </th>
                        </tr>
                      </thead>
                      {documentCard.map((document, index) => (
                        <tbody key={index} className="bg-slate-600">
                          <tr className="hover:bg-slate-500">
                            <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                              <input
                                type="checkbox"
                                id={`documentCardCheckbox-${document._id}`}
                                onChange={() =>
                                  handleCheckboxChange(document._id)
                                }
                                checked={selectedDocument.includes(
                                  document._id
                                )}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              />
                            </td>
                            <td className="w-[360px]">
                              <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate w-[560px]">
                                <p className="truncate">{document.cardTitle}</p>
                              </div>
                            </td>
                            <td className="w-[360px]">
                              <div className="py-4 max-w-xs pr-6 font-medium text-gray-200 truncate">
                                <p className="truncate">{document.cardText}</p>
                              </div>
                            </td>
                            <td className="">
                              <div className="py-4 max-w-xs pr-6 font-medium text-gray-200 truncate">
                                <p className="truncate">{document.cardLink}</p>
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
  );
}
