import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumbs";
import { useParams, useNavigate } from "react-router-dom";

export default function ServicesEdit() {
  const { servicesId } = useParams();

  const [service, setService] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/services", label: "Hizmetler" },
    { url: `/services/${servicesId}/edit`, label: "Hizmetleri Düzenle" },
  ];

  const getService = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/service/${servicesId}`
      );
      setService(response.data.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  }, [servicesId]);

  useEffect(() => {
    getService();
  }, [getService, servicesId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/service/${servicesId}`, {
        ...service,
      });
      navigate("/services");
    } catch (error) {
      console.error("Error occured updating services: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setService((prevState) => ({
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
                  <form onSubmit={handleUpdate} className="">
                    <div className="flex flex-row justify-center mx-auto w-[1000px] space-x-4 border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                      <div className="mb-4">
                        <div>
                          <label
                            htmlFor="mainTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik
                          </label>
                          <input
                            type="text"
                            name="mainTitle"
                            id="mainTitle"
                            value={service.mainTitle}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="mainTitle_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Ana Baslik_en
                          </label>
                          <input
                            type="text"
                            name="mainTitle_en"
                            id="mainTitle_en"
                            value={service.mainTitle_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div>
                          <label
                            htmlFor="mainTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Alt Baslik
                          </label>
                          <input
                            type="text"
                            name="mainText"
                            id="mainText"
                            value={service.mainText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                        <div className="mt-4">
                          <label
                            htmlFor="mainText_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Alt Baslik_en
                          </label>
                          <input
                            type="text"
                            name="mainText_en"
                            id="mainText_en"
                            value={service.mainText_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center flex-row flex-wrap items-center gap-x-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        {/* <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={service.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div> */}
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle"
                            >
                              Hizmet Adi
                            </label>
                            <input
                              type="text"
                              name="cardTitle"
                              id="cardTitle"
                              value={service.cardTitle}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle_en"
                            >
                              Hizmet Adi_en
                            </label>
                            <input
                              type="text"
                              name="cardTitle_en"
                              id="cardTitle_en"
                              value={service.cardTitle_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText"
                            >
                              Hizmet Aciklamasi
                            </label>
                            <input
                              type="text"
                              name="cardText"
                              id="cardText"
                              value={service.cardText}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText_en"
                            >
                              Hizmet Aciklamasi_en
                            </label>
                            <input
                              type="text"
                              name="cardText_en"
                              id="cardText_en"
                              value={service.cardText_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        {/* <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={service.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div> */}
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle1"
                            >
                              Hizmet Adi 1
                            </label>
                            <input
                              type="text"
                              name="cardTitle1"
                              id="cardTitle1"
                              value={service.cardTitle1}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle1_en"
                            >
                              Hizmet Adi 1_en
                            </label>
                            <input
                              type="text"
                              name="cardTitle1_en"
                              id="cardTitle1_en"
                              value={service.cardTitle1_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText1"
                            >
                              Hizmet Aciklamasi 1
                            </label>
                            <input
                              type="text"
                              name="cardText1"
                              id="cardText1"
                              value={service.cardText1}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText1_en"
                            >
                              Hizmet Aciklamasi 1_en
                            </label>
                            <input
                              type="text"
                              name="cardText1_en"
                              id="cardText1_en"
                              value={service.cardText1_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        {/* <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={service.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div> */}
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle2"
                            >
                              Hizmet Adi 2
                            </label>
                            <input
                              type="text"
                              name="cardTitle2"
                              id="cardTitle2"
                              value={service.cardTitle2}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle2_en"
                            >
                              Hizmet Adi 2_en
                            </label>
                            <input
                              type="text"
                              name="cardTitle2_en"
                              id="cardTitle2_en"
                              value={service.cardTitle2_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText2"
                            >
                              Hizmet Aciklamasi 2
                            </label>
                            <input
                              type="text"
                              name="cardText2"
                              id="cardText2"
                              value={service.cardText2}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText2_en"
                            >
                              Hizmet Aciklamasi 2_en
                            </label>
                            <input
                              type="text"
                              name="cardText2_en"
                              id="cardText2_en"
                              value={service.cardText2_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        {/* <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={service.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div> */}
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle3"
                            >
                              Hizmet Adi 3
                            </label>
                            <input
                              type="text"
                              name="cardTitle3"
                              id="cardTitle3"
                              value={service.cardTitle3}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle3_en"
                            >
                              Hizmet Adi 3_en
                            </label>
                            <input
                              type="text"
                              name="cardTitle3_en"
                              id="cardTitle3_en"
                              value={service.cardTitle3_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText"
                            >
                              Hizmet Aciklamasi 3
                            </label>
                            <input
                              type="text"
                              name="cardText3"
                              id="cardText3"
                              value={service.cardText3}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText3_en"
                            >
                              Hizmet Aciklamasi 3_en
                            </label>
                            <input
                              type="text"
                              name="cardText3_en"
                              id="cardText3_en"
                              value={service.cardText3_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        {/* <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={service.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div> */}
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle4"
                            >
                              Hizmet Adi 4
                            </label>
                            <input
                              type="text"
                              name="cardTitle4"
                              id="cardTitle4"
                              value={service.cardTitle4}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle4_en"
                            >
                              Hizmet Adi 4_en
                            </label>
                            <input
                              type="text"
                              name="cardTitle4_en"
                              id="cardTitle4_en"
                              value={service.cardTitle4_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText4"
                            >
                              Hizmet Aciklamasi 4
                            </label>
                            <input
                              type="text"
                              name="cardText4"
                              id="cardText4"
                              value={service.cardText4}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText4_en"
                            >
                              Hizmet Aciklamasi 4_en
                            </label>
                            <input
                              type="text"
                              name="cardText4_en"
                              id="cardText4_en"
                              value={service.cardText4_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        {/* <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardIcon"
                            >
                              Card Fotografi
                            </label>
                            <input
                              type="text"
                              name="cardIcon"
                              id="cardIcon"
                              value={service.cardIcon}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div> */}
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle5"
                            >
                              Hizmet Adi 5
                            </label>
                            <input
                              type="text"
                              name="cardTitle5"
                              id="cardTitle5"
                              value={service.cardTitle5}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardTitle5_en"
                            >
                              Hizmet Adi 5_en
                            </label>
                            <input
                              type="text"
                              name="cardTitle5_en"
                              id="cardTitle5_en"
                              value={service.cardTitle5_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText5"
                            >
                              Hizmet Aciklamasi 5
                            </label>
                            <input
                              type="text"
                              name="cardText5"
                              id="cardText5"
                              value={service.cardText5}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
                        </div>
                        <div className="mb-4">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-200"
                              htmlFor="cardText5_en"
                            >
                              Hizmet Aciklamasi 5_en
                            </label>
                            <input
                              type="text"
                              name="cardText5_en"
                              id="cardText5_en"
                              value={service.cardText5_en}
                              onChange={handleChange}
                              className="mt-1 p-2 rounded-sm"
                            />
                          </div>
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
