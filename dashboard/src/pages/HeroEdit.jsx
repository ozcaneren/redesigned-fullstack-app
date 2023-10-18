import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useParams, useNavigate } from "react-router-dom";

export default function HeroEdit() {
  const { heroId } = useParams();
  const [hero, setHero] = useState([]);
  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/hero", label: "Hero" },
    { url: `/hero/${heroId}/edit`, label: "Hero Düzenle" },
  ];

  const getHero = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/hero/${heroId}`
      );
      setHero(response.data.data);
    } catch (error) {
      console.error("Error fetching heros:", error);
    }
  }, [heroId]);

  useEffect(() => {
    getHero();
  }, [getHero, heroId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/hero/${heroId}`, {
        ...hero,
      });
      navigate("/hero");
    } catch (error) {
      console.error("Error updating hero:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHero((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Sidebar />
      <div className="ml-14   mb-10 md:ml-64">
        <div className="pt-4 pb-4 px-4">
          <div className="w-4/12">
            <div className="">
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-center items-center">
            <div className="w-full flex justify-center rounded-sm bg-zinc-800">
              <div className="w-full relative rounded-[6px] p-4 overflow-x-auto">
                <div className="mx-auto mt-4">
                  <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="mainText"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik
                          </label>
                          <input
                            type="text"
                            id="mainText"
                            name="mainText"
                            value={hero.mainText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="mainText_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik_en
                          </label>
                          <textarea
                            type="text"
                            id="mainText_en"
                            name="mainText_en"
                            value={hero.mainText_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="subText"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Alt Baslik
                          </label>
                          <input
                            type="text"
                            id="subText"
                            name="subText"
                            value={hero.subText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="">
                          <label
                            htmlFor="subText_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Alt Baslik_en
                          </label>
                          <textarea
                            type="text"
                            id="subText_en"
                            name="subText_en"
                            value={hero.subText_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={() => navigate("/about")}
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      >
                        İptal
                      </button>
                      <button
                        type="submit"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Kaydet
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
