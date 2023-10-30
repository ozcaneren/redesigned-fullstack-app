import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import ServicesAddModal from "./ServicesAddModal";
import ServicesEditCardModal from "./ServicesEditCardModal";

export default function ServicesCard() {
  const [serviceCard, setServiceCard] = useState([]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [selectedCards, setSelectedCards] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/services", label: "Hizmetler" },
    { url: "/services/card", label: "Kartlar" },
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

  useEffect(() => {
    getCardServices();
  }, []);

  const handleCardCheckboxChange = (cardId) => {
    if (selectedCards.includes(cardId)) {
      setSelectedCards(selectedCards.filter((id) => id !== cardId));
    } else {
      setSelectedCards([...selectedCards, cardId]);
    }
  };

  const handleCardDelete = async (cardId) => {
    try {
      await axios.delete(`http://localhost:4000/api/service/cards/${cardId}`);
      getCardServices();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleCardEditSelected = () => {
    setShowCardModal(true);
  };

  const handleCardDeleteSelected = () => {
    selectedCards.map((cardId) => handleCardDelete(cardId));
  };

  const handleCardMasterCheckboxChange = () => {
    if (selectedCards.length === serviceCard.length) {
      setSelectedCards([]);
    } else {
      setSelectedCards(serviceCard.map((card) => card._id));
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4">
            <div className="w-3/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
              <div className="">
                <div className="flex flex-row">
                  <div className="flex justify-center items-center">
                    <div className="w-full flex justify-center">
                      <div className="w-full px-4 relative">
                        <ServicesAddModal />
                      </div>
                      <div className="ml-auto mr-4">
                        <button
                          onClick={handleCardEditSelected}
                          className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                          Düzenle
                        </button>
                        {showCardModal && (
                          <ServicesEditCardModal
                            servicesId={selectedCards}
                            showCardModal={showCardModal}
                            setShowCardModal={setShowCardModal}
                          />
                        )}
                      </div>
                      <div className="ml-auto">
                        <button
                          onClick={handleCardDeleteSelected}
                          className="px-5 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
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
                                      onChange={handleCardMasterCheckboxChange}
                                      checked={
                                        selectedCards.length ===
                                        serviceCard.length
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
                                  Başlık
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 font-medium tracking-wider text-left"
                                >
                                  Alt Başlık
                                </th>
                              </tr>
                            </thead>
                            {serviceCard.map((card, index) => (
                              <tbody
                                key={index}
                                className="bg-slate-600 divide-y divide-gray-200"
                              >
                                <tr className="hover:bg-slate-500 text-gray-200">
                                  <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                    <input
                                      type="checkbox"
                                      id={`serviceCardCheckbox-${card._id}`}
                                      onChange={() =>
                                        handleCardCheckboxChange(card._id)
                                      }
                                      checked={selectedCards.includes(card._id)}
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                  </td>
                                  <td className="">
                                    <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {card.cardTitle}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="w-[1300px]">
                                    <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {card.cardText}
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
      </div>
    </div>
  );
}
