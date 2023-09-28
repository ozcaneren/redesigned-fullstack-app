import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

const FeatureAdd = () => {
  const navigate = useNavigate();

  const [theFeature, setTheFeature] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/feature`, label: "Özellikler" },
    { url: `/room/feature/add`, label: "Yeni Özellik Ekle" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newExtraFeature = {
        theFeature: theFeature,
      };
      await axios.post("http://localhost:4000/api/extrafeature", newExtraFeature);
      navigate("/room/feature");
      setTheFeature([]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
            <div className="w-3/12">
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center">
              <div className="w-full flex justify-center rounded-sm bg-zinc-800">
                <div className="w-full relative rounded-[6px] p-4 overflow-x-auto">
                  <div className="mx-auto mt-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="feature"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Özellik
                        </label>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full text-black bg-white border-gray-300 border rounded-md"
                          id="feature"
                          placeholder="Özellik"
                          value={theFeature}
                          onChange={(e) => setTheFeature(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Ekle
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureAdd;
