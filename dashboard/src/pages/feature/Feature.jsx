import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import FeatureModal from "./FeatureModal";

const Feature = () => {
  const [showModal, setShowModal] = useState(false);

  const [turkishFeatures, setTurkishFeatures] = useState([]);

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

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14   mb-10 md:ml-64">
          <div className="">
            <div className="pt-4 pb-4 px-4">
              <div className="w-3/12">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
            <div className="p-4">
              <div className="bg-[#FEFEFE] border border-gray-200/70 rounded pt-4 pb-4">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative">
                      <FeatureModal />
                    </div>
                  </div>
                </div>
                <div className="max-w-2xl mx-auto px-4 pt-2">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-[#9BA4B5] text-white">
                            <tr className="flex justify-between">
                              <th scope="col" className="px-6 py-3">
                                Özellik
                              </th>
                              <th scope="col" className="px-6 py-3">
                                İşlemler
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-[#474E68]">
                            {turkishFeatures.map((feature, index) => (
                              <tr
                                className="border-b-1 flex justify-between border-gray-300 text-white hover:bg-[#6B728E]"
                                key={index}
                              >
                                <td className="py-4 px-6">
                                  {feature.TurkishFeature}
                                </td>
                                <td className="py-4 px-12">
                                  <button
                                    className=""
                                    onClick={() =>
                                      handleTurkishDelete(feature._id)
                                    }
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
      </div>
    </div>
  );
};

export default Feature;
