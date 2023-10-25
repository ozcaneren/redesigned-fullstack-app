import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import ServicesAddModal from "./ServicesAddModal";
import ServicesEditCardModal from "./ServicesEditCardModal";
import { TbEdit } from "react-icons/tb";
import ServicesEditTitleModal from "./ServicesEditTitleModal";

export default function Services() {
  const [serviceCard, setServiceCard] = useState([]);
  const [service, setService] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showTitleModal, setShowTitleModal] = useState(false);
  const [servicesId, setServicesId] = useState("");

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/services", label: "Hizmetler" },
  ];

  const getCardServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/service/cards"
      );
      setServiceCard(response.data);
    } catch (error) {
      console.log("Error fetching services", error);
    }
  };

  const getTitleServices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/service/titles"
      );
      setService(response.data);
    } catch (error) {
      console.log("Error fetching services", error);
    }
  };

  useEffect(() => {
    getCardServices();
  }, []);

  useEffect(() => {
    getTitleServices();
  }, []);

  const handleCardClick = (servicesId) => {
    setServicesId(servicesId);
    setShowCardModal(true);
  };

  const handleTitleClick = (servicesId) => {
    setServicesId(servicesId);
    setShowTitleModal(true);
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
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
                    <div>
                      <div className="flex justify-center items-center">
                        <div className="w-full flex justify-center">
                          <div className="w-full px-4 relative space-x-2">
                            <ServicesAddModal />
                          </div>
                        </div>
                      </div>
                      <div className="container xl:max-w-6xl mx-auto px-4">
                        <div className="flex flex-wrap flex-row -mx-4 justify-center">
                          {service.map((service, index) => (
                            <div key={index}>
                              <div className="flex justify-center w-full mb-4">
                                <div className="flex justify-center flex-col py-2 px-8 rounded border border-gray-600 items-center bg-zinc-700">
                                  <h1 className="text-center text-gray-300">
                                    Ana Başlık
                                  </h1>
                                  <h1 className="text-center text-lg">
                                    {service.mainTitle}
                                  </h1>
                                  <button
                                    onClick={() =>
                                      handleTitleClick(service._id)
                                    }
                                  >
                                    <div className="font-medium mt-1 text-cyan-500 hover:underline">
                                      <TbEdit />
                                    </div>
                                  </button>
                                  {showTitleModal && (
                                    <ServicesEditTitleModal
                                      servicesId={servicesId}
                                      showTitleModal={showTitleModal}
                                      setShowTitleModal={setShowTitleModal}
                                    />
                                  )}
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
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="container xl:max-w-6xl mx-auto px-4">
                        <div className="flex flex-wrap flex-row -mx-4 justify-center">
                          {serviceCard.map((service, index) => (
                            <div
                              key={index}
                              className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6"
                            >
                              <div className="relative py-2 px-4 w-[240px] h-[208px] overflow-y-auto bg-zinc-700 rounded-lg border border-gray-500 mb-12 hover-grayscale-0">
                                <div className="text-center">
                                  <h1>{service.cardTitle}</h1>
                                  <p className="">{service.cardText}</p>
                                  <button
                                    className="flex justify-center items-center absolute top-0 right-0 w-6 h-6 bg-gray-500 rounded-full mr-4 mt-2 hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                                    onClick={() => handleCardClick(service._id)}
                                  >
                                    <div className="font-medium text-cyan-500 hover:underline">
                                      <TbEdit />
                                    </div>
                                  </button>
                                  {showCardModal && (
                                    <ServicesEditCardModal
                                      servicesId={servicesId}
                                      showCardModal={showCardModal}
                                      setShowCardModal={setShowCardModal}
                                    />
                                  )}
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
        </div>
      </div>
    </div>
  );
}
