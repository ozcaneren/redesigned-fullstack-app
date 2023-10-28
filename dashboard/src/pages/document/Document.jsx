import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import DocumentEditCardModal from "./DocumentEditCardModal";
import DocumentEditTitleModal from "./DocumentEditTitleModal";
import { TbEdit } from "react-icons/tb";
import DocumentAddCardModal from "./DocumentAddCardModal";

export default function Document() {
  const [documentCard, setDocumentCard] = useState([]);
  const [documentTitle, setDocumentTitle] = useState([]);
  const [documenId, setDocumentId] = useState("");
  const [showCardModal, setShowCardModal] = useState(false);
  const [showTitleModal, setShowTitleModal] = useState(false);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/document", label: "Dökümanlar" },
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

  const handleCardClick = (documenId) => {
    setDocumentId(documenId);
    setShowCardModal(true);
  };

  const handleTitleClick = (documenId) => {
    setDocumentId(documenId);
    setShowTitleModal(true);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14   mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
              <div>
                <div>
                  <div>
                    <div className="flex justify-center items-center">
                      <div className="w-full flex justify-center">
                        <div className="w-full px-4 relative">
                          <DocumentAddCardModal />
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
                                  <th
                                    scope="col"
                                    className="py-3 pl-6 font-medium tracking-wider text-left  w-[400px]"
                                  >
                                    Iletisim Başlığı
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3 font-medium tracking-wider text-left w-[400px]"
                                  >
                                    Iletisim Bilgisi
                                  </th>
                                </tr>
                              </thead>
                              {documentTitle.map((document, index) => (
                                <tbody key={index} className="bg-slate-600">
                                  <tr className="hover:bg-slate-500">
                                    <td className="max-w-[320px] w-[320px]">
                                      <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                        <p className="truncate">
                                          {document.title}
                                        </p>
                                      </div>
                                    </td>
                                    <td className="max-w-[320px] w-[320px]">
                                      <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                        <p className="truncate">
                                          {document.text}
                                        </p>
                                      </div>
                                    </td>
                                    <td className="py-4 flex justify-end pr-10 font-medium text-gray-200 whitespace-nowrap">
                                      <button
                                        onClick={() =>
                                          handleTitleClick(document._id)
                                        }
                                      >
                                        <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                          <TbEdit size={20} />
                                        </div>
                                      </button>
                                      {showTitleModal && (
                                        <DocumentEditTitleModal
                                          documentId={documenId}
                                          showTitleModal={showTitleModal}
                                          setShowTitleModal={setShowTitleModal}
                                        />
                                      )}
                                    </td>
                                  </tr>
                                </tbody>
                              ))}
                            </table>
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
                                  <th
                                    scope="col"
                                    className="py-3 pl-6 font-medium tracking-wider text-left w-[400px]"
                                  >
                                    Iletisim Başlığı
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3 font-medium tracking-wider text-left w-[400px]"
                                  >
                                    Iletisim Bilgisi
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3 font-medium tracking-wider text-left w-[400px]"
                                  >
                                    Iletisim Bilgisi
                                  </th>
                                  <th
                                    scope="col"
                                    className="py-3 flex justify-end pr-6 font-medium tracking-wider"
                                  >
                                    Islemler
                                  </th>
                                </tr>
                              </thead>
                              {documentCard.map((document, index) => (
                                <tbody key={index} className="bg-slate-600">
                                  <tr className="hover:bg-slate-500">
                                    <td className="max-w-[320px] w-[320px]">
                                      <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                        <p className="truncate">
                                          {document.cardTitle}
                                        </p>
                                      </div>
                                    </td>
                                    <td className="max-w-[320px] w-[320px]">
                                      <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                        <p className="truncate">
                                          {document.cardText}
                                        </p>
                                      </div>
                                    </td>
                                    <td className="max-w-[320px] w-[320px]">
                                      <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                        <p className="truncate">
                                          {document.cardLink}
                                        </p>
                                      </div>
                                    </td>
                                    <td className="py-4 flex justify-end pr-10 font-medium text-gray-200 whitespace-nowrap">
                                      <button
                                        onClick={() =>
                                          handleCardClick(document._id)
                                        }
                                      >
                                        <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                          <TbEdit size={20} />
                                        </div>
                                      </button>
                                      {showCardModal && (
                                        <DocumentEditCardModal
                                          documentId={documenId}
                                          showCardModal={showCardModal}
                                          setShowCardModal={setShowCardModal}
                                        />
                                      )}
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
      </div>
    </div>
  );
}
