import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [headers, setHeaders] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/header", label: "Header" },
  ];

  const getHeaders = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/headers");
      setHeaders(response.data.data);
    } catch (error) {
      console.error("Error fetching headers:", error);
    }
  };

  useEffect(() => {
    getHeaders();
  }, []);

  const handleClick = (id) => {
    navigate(`/header/${id}/edit`);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
            <div className="w-2/12">
              <div>
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div>
                <div>
                  {headers.map((header, index) => (
                    <div key={index}>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <button
                              onClick={() => handleClick(header._id)}
                              className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                            >
                              Kartlari Duzenle
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mx-6 sm:mx-48 gap-x-5 gap-y-5">
                        <div className="w-full flex justify-center items-center my-4">
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Baslik</label>
                            <h1 className="text-lg">{header.headerTitle}</h1>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Link 1</label>
                            <h1 className="text-lg">{header.headerText}</h1>
                            {header.headerTextDropdown ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Link 2</label>
                            <h1 className="text-lg">{header.headerText1}</h1>
                            {header.headerText1Dropdown ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Link 3</label>
                            <h1 className="text-lg">{header.headerText2}</h1>
                            {header.headerText2Dropdown ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Link 4</label>
                            <h1 className="text-lg">{header.headerText3}</h1>
                            {header.headerText3Dropdown ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Link 5</label>
                            {header.headerText4 ? (
                              <h1 className="text-lg">{header.headerText4}</h1>
                            ) : (
                              <p className="text-gray-400">
                                İçini doldurmadınız
                              </p>
                            )}
                            {header.headerText4Dropdown ? (
                              <h1 className="text-lg">Dropdown eklediniz.</h1>
                            ) : (
                              <p className="text-gray-400">
                                Dropdown eklemediniz.
                              </p>
                            )}
                          </div>
                          <div className="p-4 bg-zinc-700 border shadow-lg rounded-lg space-y-4">
                            <label htmlFor="">Link 6</label>
                            {header.headerText5 ? (
                              <h1 className="text-lg">{header.headerText5}</h1>
                            ) : (
                              <p className="text-gray-400">
                                İçini doldurmadınız
                              </p>
                            )}
                            {header.headerText5Dropdown ? (
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
