import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

const FeatureAdd = () => {
  const navigate = useNavigate();

  const [TurkishFeature, setTurkishFeature] = useState("");
  const [EnglishFeature, setEnglishFeature] = useState("");

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/feature`, label: "Özellikler" },
    { url: `/room/feature/add`, label: "Yeni Özellik Ekle" },
  ];

  const handleSubmit = async (e, language) => {
    e.preventDefault();

    try {
      const newExtraFeature = {
        TurkishFeature: language === "Turkish" ? TurkishFeature : "",
        EnglishFeature: language === "English" ? EnglishFeature : "",
      };
      await axios.post(`http://localhost:4000/api/extrafeature/${language.toLowerCase()}`, newExtraFeature);
      navigate(`/room/feature`);
      setTurkishFeature("");
      setEnglishFeature("");
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
            <div className="w-4/12">
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-center items-center">
              <div className="w-full flex justify-center rounded-sm bg-zinc-800">
                <div className="w-full relative rounded-[6px] p-4 overflow-x-auto">
                  <div className="mx-auto mt-4">
                    <form onSubmit={(e) => handleSubmit(e, "Turkish")}>
                      <div className="mb-4">
                        <label
                          htmlFor="TurkishFeature"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Türkçe Özellik
                        </label>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full text-black bg-white border-gray-300 border rounded-md"
                          id="TurkishFeature"
                          placeholder="Türkçe Özellik"
                          value={TurkishFeature}
                          onChange={(e) => setTurkishFeature(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Türkçe Ekle
                      </button>
                    </form>
                    <div className="h-[1px] w-full bg-gray-500 my-4"></div>
                    <form onSubmit={(e) => handleSubmit(e, "English")}>
                      <div className="mb-4">
                        <label
                          htmlFor="EnglishFeature"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          İngilizce Özellik
                        </label>
                        <input
                          type="text"
                          className="mt-1 p-2 w-full text-black bg-white border-gray-300 border rounded-md"
                          id="EnglishFeature"
                          placeholder="İngilizce Özellik"
                          value={EnglishFeature}
                          onChange={(e) => setEnglishFeature(e.target.value)}
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        İngilizce Ekle
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