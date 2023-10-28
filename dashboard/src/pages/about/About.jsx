import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import AboutModal from "./AboutModal";
import AboutEditModal from "./AboutEditModal";

export default function About() {
  const [abouts, setAbouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedAbouts, setselectedAbouts] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/about", label: "Hakkimizda" },
  ];

  const getAbouts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/abouts");
      setAbouts(response.data.data);
    } catch (error) {
      console.error("Error fetching abouts:", error);
    }
  };

  useEffect(() => {
    getAbouts();
  }, []);

  const handleDelete = async (aboutId) => {
    try {
      await axios.delete(`http://localhost:4000/api/about/${aboutId}`);
      getAbouts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleCheckboxChange = (aboutId) => {
    if (selectedAbouts.includes(aboutId)) {
      setselectedAbouts(selectedAbouts.filter((id) => id !== aboutId));
    } else {
      setselectedAbouts([...selectedAbouts, aboutId]);
    }
  };

  const handleEditSelected = () => {
    setShowModal(true);
  };

  const handleDeleteSelected = () => {
    selectedAbouts.map((aboutId) => handleDelete(aboutId));
  };

  const handleMasterCheckboxChange = () => {
    if (selectedAbouts.length === abouts.length) {
      // Eğer tüm iletişimler zaten seçili ise, seçimleri kaldır.
      setselectedAbouts([]);
    } else {
      // Tüm iletişimleri seç.
      setselectedAbouts(abouts.map((about) => about._id));
    }
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
            <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <AboutModal />
                    </div>
                    <div className="ml-auto mr-4">
                      <button
                        onClick={handleEditSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showModal && (
                        <AboutEditModal
                          showModal={showModal}
                          setShowModal={setShowModal}
                          aboutId={selectedAbouts}
                        />
                      )}
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleDeleteSelected}
                        className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
                                    onChange={handleMasterCheckboxChange}
                                    checked={
                                      selectedAbouts.length === abouts.length
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label className="sr-only">checkbox</label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left w-[400px]"
                              >
                                Başlık
                              </th>
                              <th
                                scope="col"
                                className="py-3 pl-6 font-medium tracking-wider text-left w-[400px]"
                              >
                                Metin
                              </th>
                              <th
                                scope="col"
                                className="py-3 font-medium tracking-wider text-left  w-[400px]"
                              >
                                Buton
                              </th>
                            </tr>
                          </thead>
                          {abouts.map((about, index) => (
                            <tbody
                              key={index}
                              className="bg-slate-600 divide-y divide-gray-200"
                            >
                              <tr className="hover:bg-slate-500 text-gray-200">
                                <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                  <input
                                    type="checkbox"
                                    id={`aboutCheckbox-${about._id}`}
                                    onChange={() =>
                                      handleCheckboxChange(about._id)
                                    }
                                    checked={selectedAbouts.includes(about._id)}
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                </td>
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {about.cardTitle}
                                    </p>
                                  </div>
                                </td>
                                <td className="max-w-[320px] w-[320px">
                                  <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">{about.cardText}</p>
                                  </div>
                                </td>
                                <td className="max-w-[320px] w-[320px]">
                                  <div className="py-4 max-w-xs pr-6 font-medium text-gray-200 truncate">
                                    <p className="truncate">
                                      {about.cardButton}
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
  );
}
