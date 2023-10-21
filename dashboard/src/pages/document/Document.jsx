import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
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
                        <div className="flex justify-center items-center flex-col pt-2 pb-8 space-y-4">
                          <div className="flex justify-center items-center">
                            <div className="w-full flex justify-center">
                              <div className="w-full px-4 py-2 relative space-x-2 bg-zinc-700 border border-gray-600 rounded">
                                <h1 className="text-xl font-bold">
                                  {document.title}
                                </h1>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center items-center">
                            <div className="w-full flex justify-center">
                              <div className="w-full px-4 py-2 bg-zinc-700 border border-gray-600 rounded relative space-x-2">
                                <h1 className="text">
                                  {document.text ? (
                                    <h1 className="text-lg">
                                      {document.text}
                                    </h1>
                                  ) : (
                                    <p className="text-gray-400">
                                      Belge Alt Basligi Eklemediniz.
                                    </p>
                                  )}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="p-4 w-[400px] h-[200px] bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-lg">{document.cardTitle}</h1>
                            </label>
                            {document.cardText ? (
                              <h1 className="text-lg">{document.cardText}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Belge Icerigi Eklemediniz.
                              </p>
                            )}
                            {document.cardLink ? (
                              <a className="" href={document.cardLink}>
                                <h1 className="mt-2 text-gray-300">Baglanti</h1>
                              </a>
                            ) : (
                              <p className="text-gray-400">Link Eklemediniz</p>
                            )}
                          </div>
                          <div className="p-4 w-[400px] h-[200px] bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-lg">{document.cardTitle1}</h1>
                            </label>
                            {document.cardText1 ? (
                              <h1 className="text-lg">{document.cardText1}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Belge Icerigi Eklemediniz.
                              </p>
                            )}
                            {document.cardLink1 ? (
                              <a className="" href={document.cardLink1}>
                                <h1 className="mt-2 text-gray-300">Baglanti</h1>
                              </a>
                            ) : (
                              <p className="text-gray-400">Link Eklemediniz</p>
                            )}
                          </div>
                          <div className="p-4 w-[400px] h-[200px] bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-lg">{document.cardTitle2}</h1>
                            </label>
                            {document.cardText2 ? (
                              <h1 className="text-lg">{document.cardText2}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Belge Icerigi Eklemediniz.
                              </p>
                            )}
                            {document.cardLink2 ? (
                              <a className="" href={document.cardLink2}>
                                <h1 className="mt-2 text-gray-300">Baglanti</h1>
                              </a>
                            ) : (
                              <p className="text-gray-400">Link Eklemediniz</p>
                            )}
                          </div>
                          <div className="p-4 w-[400px] h-[200px] bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-lg">{document.cardTitle3}</h1>
                            </label>
                            {document.cardText3 ? (
                              <h1 className="text-lg">{document.cardText3}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Belge Icerigi Eklemediniz.
                              </p>
                            )}
                            {document.cardLink3 ? (
                              <a className="" href={document.cardLink3}>
                                <h1 className="mt-2 text-gray-300">Baglanti</h1>
                              </a>
                            ) : (
                              <p className="text-gray-400">Link Eklemediniz</p>
                            )}
                          </div>
                          <div className="p-4 w-[400px] h-[200px] bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-lg">{document.cardTitle4}</h1>
                            </label>
                            {document.cardText4 ? (
                              <h1 className="text-lg">{document.cardText4}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Belge Icerigi Eklemediniz.
                              </p>
                            )}
                            {document.cardLink4 ? (
                              <a className="" href={document.cardLink4}>
                                <h1 className="mt-2 text-gray-300">Baglanti</h1>
                              </a>
                            ) : (
                              <p className="text-gray-400">Link Eklemediniz</p>
                            )}
                          </div>
                          <div className="p-4 w-[400px] h-[200px] bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label className="" htmlFor="">
                              <h1 className="text-lg">{document.cardTitle5}</h1>
                            </label>
                            {document.cardText5 ? (
                              <h1 className="text-lg">{document.cardText5}</h1>
                            ) : (
                              <p className="text-gray-400">
                                Belge Icerigi Eklemediniz.
                              </p>
                            )}
                            {document.cardLink5 ? (
                              <a className="" href={document.cardLink5}>
                                <h1 className="mt-2 text-gray-300">Baglanti</h1>
                              </a>
                            ) : (
                              <p className="text-gray-400">Link Eklemediniz</p>
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
