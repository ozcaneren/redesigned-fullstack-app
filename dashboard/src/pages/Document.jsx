import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Document() {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/document", label: "Dökümanlar" },
  ];

  const getDocuments = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/documents");
      setDocuments(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDocuments();
  }, []);

  const handleClick = (id) => {
    navigate(`/document/${id}/edit`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div>
                <div>
                  {documents.map((document, index) => (
                    <div key={index}>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <button
                              onClick={() => handleClick(document._id)}
                              className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                            >
                              Kartlari Duzenle
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mx-6 sm:mx-48 gap-x-5 gap-y-5">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-left">
                                Başlık
                              </h1>
                            </label>
                            <h1 className="text-lg">{document.cardTitle}</h1>
                            {document.cardText ? (
                              <h1 className="text-lg">{document.cardText}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Belge</label>
                            <h1 className="text-lg">{document.cardTitle}</h1>
                            {document.cardText ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Belge</label>
                            <h1 className="text-lg">{document.cardTitle}</h1>
                            {document.cardText ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
