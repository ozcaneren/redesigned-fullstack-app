import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

export default function AboutEdit() {
  const { aboutId } = useParams();

  const [about, setAbout] = useState({});

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/about", label: "Hakkimizda" },
    { url: `/about/${aboutId}/edit`, label: "Duzenle" },
  ];

  const getAbout = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/about/${aboutId}`
      );
      setAbout(response.data.data);
    } catch (error) {
      console.error("Error fetching about:", error);
    }
  }, [aboutId]);

  useEffect(() => {
    getAbout();
  }, [getAbout, aboutId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/about/${aboutId}`, {
        ...about,
      });
      navigate("/about");
    } catch (error) {
      console.error("Error updating about:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAbout((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Navbar />
      <Sidebar />
      <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
        <div className="pt-8 pb-4 px-4">
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
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Basligi
                          </label>
                          <input
                            type="text"
                            id="cardTitle"
                            name="cardTitle"
                            value={about.cardTitle}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Icerigi
                          </label>
                          <textarea
                            type="text"
                            id="cardText"
                            name="cardText"
                            value={about.cardText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardButton"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Buton
                          </label>
                          <input
                            type="text"
                            id="cardButton"
                            name="cardButton"
                            value={about.cardButton}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Basligi 1
                          </label>
                          <input
                            type="text"
                            id="cardTitle1"
                            name="cardTitle1"
                            value={about.cardTitle1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Icerigi 1
                          </label>
                          <textarea
                            type="text"
                            id="cardText1"
                            name="cardText1"
                            value={about.cardText1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardButton1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Buton 1
                          </label>
                          <input
                            type="text"
                            id="cardButton1"
                            name="cardButton1"
                            value={about.cardButton1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Basligi2 
                          </label>
                          <input
                            type="text"
                            id="cardTitle2"
                            name="cardTitle2"
                            value={about.cardTitle2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Icerigi 2
                          </label>
                          <textarea
                            type="text"
                            id="cardText2"
                            name="cardText2"
                            value={about.cardText2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardButton2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Buton 2
                          </label>
                          <input
                            type="text"
                            id="cardButton2"
                            name="cardButton2"
                            value={about.cardButton2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                    <h1 className="text-2xl text-white text-center my-4">Ingilizce Veriler</h1>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Basligi_en
                          </label>
                          <input
                            type="text"
                            id="cardTitle_en"
                            name="cardTitle_en"
                            value={about.cardTitle_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Icerigi_en
                          </label>
                          <textarea
                            type="text"
                            id="cardText_en"
                            name="cardText_en"
                            value={about.cardText_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardButton"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Buton_en
                          </label>
                          <input
                            type="text"
                            id="cardButton_en"
                            name="cardButton_en"
                            value={about.cardButton_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Basligi 1
                          </label>
                          <input
                            type="text"
                            id="cardTitle1_en"
                            name="cardTitle1_en"
                            value={about.cardTitle1_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText1_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Icerigi 1
                          </label>
                          <textarea
                            type="text"
                            id="cardText1_en"
                            name="cardText1_en"
                            value={about.cardText1_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardButton1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Buton 1_en
                          </label>
                          <input
                            type="text"
                            id="cardButton1_en"
                            name="cardButton1_en"
                            value={about.cardButton1_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Basligi2_en
                          </label>
                          <input
                            type="text"
                            id="cardTitle2_en"
                            name="cardTitle2_en"
                            value={about.cardTitle2_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Icerigi 2_en
                          </label>
                          <textarea
                            type="text"
                            id="cardText2_en"
                            name="cardText2_en"
                            value={about.cardText2_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardButton2_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Kart Buton 2_en
                          </label>
                          <input
                            type="text"
                            id="cardButton2_en"
                            name="cardButton2_en"
                            value={about.cardButton2_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
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
