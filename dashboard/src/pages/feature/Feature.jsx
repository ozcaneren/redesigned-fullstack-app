import { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar";
import Breadcrumb from "../../components/Breadcrumbs";
import FeatureModal from "./FeatureModal";

const Feature = () => {
  const [turkishFeatures, setTurkishFeatures] = useState([]);
  const [selectedFeature, setSelectedFeature] = useState([]);

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

  const handleCheckboxChange = (featureId) => {
    if (selectedFeature.includes(featureId)) {
      setSelectedFeature(selectedFeature.filter((id) => id !== featureId));
    } else {
      setSelectedFeature([...selectedFeature, featureId]);
    }
  };

  const handleMasterCheckboxChange = () => {
    if (selectedFeature.length === turkishFeatures.length) {
      setSelectedFeature([]);
    } else {
      setSelectedFeature(turkishFeatures.map((feature) => feature._id));
    }
  };

  const handleDeleteSelected = async () => {
    for (const theFeatureId of selectedFeature) {
      await handleTurkishDelete(theFeatureId);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-background text-white">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="">
            <div className="pt-4 pb-4 px-4">
              <div className="w-3/12">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
            <div className="p-4">
              <div className="bg-white border border-gray-200/70 rounded pt-4 pb-4">
                <div className="flex flex-row">
                  <div className="flex justify-center items-center">
                    <div className="w-full flex justify-center">
                      <div className="w-full px-4 relative">
                        <FeatureModal />
                      </div>
                      <div className="ml-auto mr-4">
                        <button
                          onClick={handleDeleteSelected}
                          className="px-5 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-full mx-auto px-4 pt-2">
                  <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                      <div className="overflow-hidden">
                        <table className="min-w-full table-fixed">
                          <thead className="bg-gray-400 text-white">
                            <tr className="flex justify-between">
                              <th scope="col" className="p-4 w-[10px]">
                                <div className="flex items-center">
                                  <input
                                    id="checkbox-all"
                                    type="checkbox"
                                    onChange={handleMasterCheckboxChange}
                                    checked={
                                      selectedFeature.length ===
                                      turkishFeatures.length
                                    }
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                  />
                                  <label className="sr-only">checkbox</label>
                                </div>
                              </th>
                              <th
                                scope="col"
                                className="py-3 font-medium tracking-wider text-left w-[1520px]"
                              >
                                Özellik
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-slate-600">
                            {turkishFeatures.map((feature, index) => (
                              <tr
                                className="border-b-1 flex justify-between border-gray-300 text-white hover:bg-gray-500"
                                key={index}
                              >
                                <td className="px-4 py-5 flex items-center w-[10px]">
                                  <div className="flex items-center">
                                    <input
                                      id={`checkbox-${feature._id}`}
                                      type="checkbox"
                                      onChange={() =>
                                        handleCheckboxChange(feature._id)
                                      }
                                      checked={selectedFeature.includes(
                                        feature._id
                                      )}
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="sr-only">checkbox</label>
                                  </div>
                                </td>
                                <td className="w-[1520px]">
                                  <div className="py-4 max-w-xs pr-6 font-medium text-gray-200 truncate">
                                    {feature.TurkishFeature}
                                  </div>
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
