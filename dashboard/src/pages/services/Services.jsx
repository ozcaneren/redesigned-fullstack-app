import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/services", label: "Hizmetler" },
  ];

  const getServices = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/services");
      setServices(response.data.data);
    } catch (error) {
      console.log("Error fetching services", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  const handleClick = (id) => {
    navigate(`/services/${id}/edit`);
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
                  <div>
                    {services.map((service, index) => (
                      <div key={index}>
                        <div className="flex justify-center items-center">
                          <div className="w-full flex justify-center">
                            <div className="w-full px-4 relative space-x-2">
                              <button
                                onClick={() => handleClick(service._id)}
                                className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                              >
                                Hizmetleri Düzenle
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center w-full mb-4">
                          <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                            <h1 className="text-center text-gray-300">
                              Ana Başlık
                            </h1>
                            <h1 className="text-center text-lg">
                              {service.mainTitle}
                            </h1>
                          </div>
                        </div>
                        <div className="flex justify-center w-full mb-4">
                          <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                            <h1 className="text-center text-gray-300">
                              Alt Başlık
                            </h1>
                            <h1 className="text-center text-lg">
                              {service.mainText}
                            </h1>
                          </div>
                        </div>
                        <div className="container xl:max-w-6xl mx-auto px-4">
                          <div className="flex flex-wrap flex-row -mx-4 justify-center">
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Hizmet
                              </h1>
                              <div className="relative py-2 w-[240px] h-[208px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                {/* <div className="relative overflow-hidden px-6">
                                  {service.cardIcon ? (
                                    <img
                                      src={service.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div> */}
                                <div className="pt-6 text-center">
                                  {service.cardTitle ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {service.cardTitle}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[150px] flex items-center justify-center">
                                      Hizmet Eklenmedi.
                                    </p>
                                  )}
                                  {service.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {service.cardText.substring(0, 150)}...
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Hizmet 1
                              </h1>
                              <div className="relative py-2 w-[240px] h-[208px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                {/* <div className="relative overflow-hidden px-6">
                                  {service.cardIcon ? (
                                    <img
                                      src={service.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div> */}
                                <div className="pt-6 text-center">
                                  {service.cardTitle1 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {service.cardTitle1}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[150px] flex items-center justify-center">
                                      Hizmet Eklenmedi.
                                    </p>
                                  )}
                                  {service.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {service.cardText1.substring(0, 150)}...
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Hizmet 2
                              </h1>
                              <div className="relative py-2 w-[240px] h-[208px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                {/* <div className="relative overflow-hidden px-6">
                                  {service.cardIcon ? (
                                    <img
                                      src={service.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div> */}
                                <div className="pt-6 text-center">
                                  {service.cardTitle2 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {service.cardTitle2}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[150px] flex items-center justify-center">
                                      Hizmet Eklenmedi.
                                    </p>
                                  )}
                                  {service.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {service.cardText2.substring(0, 150)}...
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Hizmet 3
                              </h1>
                              <div className="relative py-2 w-[240px] h-[208px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                {/* <div className="relative overflow-hidden px-6">
                                  {service.cardIcon ? (
                                    <img
                                      src={service.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div> */}
                                <div className="pt-6 text-center">
                                  {service.cardTitle3 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {service.cardTitle3.substring(0, 150)}...
                                    </p>
                                  ) : (
                                    <p className="text-center h-[150px] flex items-center justify-center">
                                      Hizmet Eklenmedi.
                                    </p>
                                  )}
                                  {service.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4">
                                      {service.cardText3.substring(0, 150)}...
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Hizmet 4
                              </h1>
                              <div className="relative py-2 w-[240px] h-[208px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                {/* <div className="relative overflow-hidden px-6">
                                  {service.cardIcon ? (
                                    <img
                                      src={service.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div> */}
                                <div className="pt-6 text-center">
                                  {service.cardTitle4 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {service.cardTitle4}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[150px] flex items-center justify-center">
                                      Hizmet Eklenmedi.
                                    </p>
                                  )}
                                  {service.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4 truncate">
                                      {service.cardText4}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                              <h1 className="text-center bg-zinc-700 rounded border border-gray-500 mb-2">
                                Hizmet 5
                              </h1>
                              <div className="relative py-2 w-[240px] h-[208px] overflow-hidden bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                {/* <div className="relative overflow-hidden px-6">
                                  {service.cardIcon ? (
                                    <img
                                      src={service.cardIcon}
                                      className="w-[143px] h-[143px] object-cover mx-auto rounded-full bg-gray-50 grayscale"
                                      alt="title image"
                                    />
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div> */}
                                <div className="pt-6 text-center">
                                  {service.cardTitle5 ? (
                                    <p className="text-lg leading-normal font-bold mb-1">
                                      {service.cardTitle5}
                                    </p>
                                  ) : (
                                    <p className="text-center h-[150px] flex items-center justify-center">
                                      Hizmet Eklenmedi.
                                    </p>
                                  )}
                                  {service.cardText ? (
                                    <p className="text-gray-300 leading-relaxed mb-4 truncate">
                                      {service.cardText5}
                                    </p>
                                  ) : (
                                    <p className="text-center"></p>
                                  )}
                                </div>
                              </div>
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
    </div>
  );
}
