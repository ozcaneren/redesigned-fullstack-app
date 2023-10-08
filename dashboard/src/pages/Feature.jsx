import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

const Feature = () => {
  const navigate = useNavigate();

  const [turkishFeatures, setTurkishFeatures] = useState([]);
  const [englishFeatures, setEnglishFeatures] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/feature`, label: "Özellikler" },
  ];

  const getTurkishExtraFeatures = async () => {
    try {
      const turkishResponse = await axios.get(
        "http://localhost:4000/api/extrafeatures/turkish"
      );
      setTurkishFeatures(turkishResponse.data.data);
    } catch (error) {
      console.error("Error fetching features:", error);
    }
  };

  useEffect(() => {
    getTurkishExtraFeatures();
  }, []);

  const getEnglishExtraFeatures = async () => {
    try {
      const englishResponse = await axios.get(
        "http://localhost:4000/api/extrafeatures/english"
      );
      setEnglishFeatures(englishResponse.data.data);
    } catch (error) {
      console.error("Error fetching features:", error);
    }
  };

  useEffect(() => {
    getEnglishExtraFeatures();
  }, []);

  const handleTurkishDelete = async (theFeatureId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/extrafeature/turkish/${theFeatureId}`
      );
      getTurkishExtraFeatures();
    } catch (error) {
      console.error("Error deleting feature:", error);
    }
  };

  const handleEnglishDelete = async (theFeatureId) => {
    try {
      await axios.delete(
        `http://localhost:4000/api/extrafeature/english/${theFeatureId}`
      );
      getEnglishExtraFeatures();
    } catch (error) {
      console.error("Error deleting feature:", error);
    }
  };

  const handleAddFeature = () => {
    navigate("/room/feature/add");
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="">
            <div className="pt-8 pb-4 px-4">
              <div className="w-3/12">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
            <div className="p-4">
              <div className="bg-zinc-800 rounded pt-8 pb-4">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <button
                        onClick={handleAddFeature}
                        className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                      >
                        Yeni Ozellik Ekle
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between py-4 px-4">
                  {/* Türkçe Özellikler */}
                  <div className="w-[760px] py-4 relative rounded-[6px] overflow-x-auto border border-solid border-zinc-700">
                    <h2 className="text-lg text-center font-semibold mb-4">
                      Türkçe Özellikler
                    </h2>
                    <table className="text-sm w-full text-left text-[#202020]">
                      <thead className="text-xs uppercase bg-zinc-700 text-gray-200">
                        <tr className="flex justify-between">
                          <th scope="col" className="px-6 py-3">
                            Özellik
                          </th>
                          <th scope="col" className="px-6 py-3">
                            İşlemler
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {turkishFeatures.map((feature, index) => (
                          <tr
                            className="border-b-1 flex justify-between border-gray-300 text-white bg-zinc-800 hover:bg-zinc-800"
                            key={index}
                          >
                            <td className="py-4 px-6">
                              {feature.TurkishFeature}
                            </td>
                            <td className="py-4 px-12">
                              <button
                                className=""
                                onClick={() => handleTurkishDelete(feature._id)}
                              >
                                Sil
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {/* İngilizce Özellikler */}
                  <div className="w-[760px] py-4 relative rounded-[6px] overflow-x-auto border border-solid border-zinc-700">
                    <h2 className="text-lg text-center font-semibold mb-4">
                      İngilizce Özellikler
                    </h2>
                    <table className="text-sm w-full text-left text-[#202020]">
                      <thead className="text-xs uppercase bg-zinc-700 text-gray-200">
                        <tr className="flex justify-between">
                          <th scope="col" className="px-6 py-3">
                            Özellik
                          </th>
                          <th scope="col" className="px-6 py-3">
                            İşlemler
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {englishFeatures.map((feature, index) => (
                          <tr
                            className="border-b-1 flex justify-between border-gray-300 text-white bg-zinc-800 hover:bg-zinc-800"
                            key={index}
                          >
                            <td className="px-6 py-4">
                              {feature.EnglishFeature}
                            </td>
                            <td className="px-12 py-4">
                              <button
                                className=""
                                onClick={() => handleEnglishDelete(feature._id)}
                              >
                                Sil
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
