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
                        <div className="w-full px-4 relative space-x-2">
                          <DocumentAddCardModal />
                        </div>
                      </div>
                    </div>
                    <div className="mx-6 sm:mx-48 gap-x-5 gap-y-5 pb-6">
                      <div className="flex justify-center items-center">
                        {documentTitle.map((document, index) => (
                          <div
                            key={index}
                            className="p-4 flex items-center justify-center flex-col w-[400px] h-[200px] bg-white text-modalLabelText border shadow-lg rounded-lg space-y-4"
                          >
                            <button
                              onClick={() => handleTitleClick(document._id)}
                            >
                              <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                <TbEdit size={12} />
                              </div>
                            </button>
                            {showTitleModal && (
                              <DocumentEditTitleModal
                                documentId={documenId}
                                showTitleModal={showTitleModal}
                                setShowTitleModal={setShowTitleModal}
                              />
                            )}
                            <h1 className="text-lg">Title: {document.title}</h1>
                            <p>Text: {document.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mx-6 sm:mx-48 gap-x-5 gap-y-5">
                      <div className="grid grid-cols-3 gap-6">
                        {documentCard.map((document, index) => (
                          <div
                            key={index}
                            className="p-4 flex items-center justify-center flex-col w-[400px] h-[200px] bg-white text-modalLabelText border shadow-lg rounded-lg space-y-4"
                          >
                            <button
                              onClick={() => handleCardClick(document._id)}
                            >
                              <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                <TbEdit size={12} />
                              </div>
                            </button>
                            {showCardModal && (
                              <DocumentEditCardModal
                                documentId={documenId}
                                showCardModal={showCardModal}
                                setShowCardModal={setShowCardModal}
                              />
                            )}
                            <h1 className="text-lg">{document.cardTitle}</h1>
                            <p>{document.cardText}</p>
                            <a href="">{document.cardLink}</a>
                          </div>
                        ))}
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
