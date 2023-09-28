import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

const Feature = () => {
  const navigate = useNavigate();

  const [theFeature, setTheFeature] = useState([]);
  
  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/feature`, label: "Özellikler" },
  ];

  const getExtraFeatures = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/extrafeatures");
      setTheFeature(response.data.data);
    } catch (error) {
      console.error("Error fetching features:", error);
    }
  };

  useEffect(() => {
    getExtraFeatures();
  }, []);

  const handleDelete = async (theFeatureId) => {
    try {
      await axios.delete(`http://localhost:4000/api/extrafeature/${theFeatureId}`);
      getExtraFeatures();
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
                  <div className="w-full px-4 flex justify-center py-4 rounded-sm">
                    <div className="w-full relative rounded-[6px] overflow-x-auto border border-solid border-zinc-700">
                      <table className="text-sm w-full text-left text-[#202020]">
                        <thead className="text-xs uppercase bg-zinc-700 text-gray-200">
                          <tr>
                            <th scope="col" className="px-6 py-3">Özellik</th>
                            <th scope="col" className="px-6 py-3">İşlemler</th>
                          </tr>
                        </thead>
                        <tbody>
                          {theFeature.map((feature, index) => (
                            <tr className="border-b-1 border-gray-300 text-white bg-zinc-800 hover:bg-zinc-800" key={index}>
                              <td className="px-6 py-4">{feature.theFeature}</td>
                              <td>
                                <button
                                  className="btn btn-warning btn-sm mr-2"
                                  onClick={() => handleDelete(feature._id)}
                                >
                                  Sil
                                </button>
                                <button
                                  className="btn btn-primary float-right"
                                  onClick={handleAddFeature}
                                >
                                  Yeni Özellik Ekle
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
  );
};

export default Feature;
