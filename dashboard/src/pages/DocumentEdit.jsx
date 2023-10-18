import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

export default function DocumentEdit() {
  const { documentId } = useParams();

  const [document, setDocument] = useState([]);

  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/document", label: "Dokumanlar" },
    { url: `/document/${documentId}/edit`, label: "Dokumanlari Duzenle" },
  ];

  const getDocument = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/document/${documentId}`
      );
      setDocument(response.data.data);
    } catch (error) {
      console.error("error fetching document", error);
    }
  }, [documentId]);

  useEffect(() => {
    getDocument();
  }, [getDocument, documentId]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4000/api/document/${documentId}`, {
        ...document,
      });
      navigate("/document");
    } catch (error) {
      console.error("error updating document", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDocument((prevState) => ({
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
                    <div className="flex flex-row justify-center gap-x-12">
                      <div className="w-1/3 p-4 bg-zinc-700 mb-6">
                        <div>
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Basligi
                          </label>
                          <input
                            type="text"
                            name="title"
                            id="title"
                            value={document.title}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="title_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Basligi_en
                          </label>
                          <input
                            type="text"
                            name="title_en"
                            id="title_en"
                            value={document.title_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="w-1/3 p-4 bg-zinc-700 mb-6">
                        <div>
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Alt Basligi
                          </label>
                          <input
                            type="text"
                            name="text"
                            id="text"
                            value={document.text}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="text_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Basligi_en
                          </label>
                          <input
                            type="text"
                            name="text_en"
                            id="text_en"
                            value={document.text_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi
                          </label>
                          <input
                            type="text"
                            name="cardTitle"
                            id="cardTitle"
                            value={document.cardTitle}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi_en
                          </label>
                          <input
                            type="text"
                            name="cardTitle_en"
                            id="cardTitle_en"
                            value={document.cardTitle_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi
                          </label>
                          <input
                            type="text"
                            name="cardText"
                            id="cardText"
                            value={document.cardText}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi_en
                          </label>
                          <input
                            type="text"
                            name="cardText_en"
                            id="cardText_en"
                            value={document.cardText_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardLink"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Baglantisi
                          </label>
                          <input
                            type="text"
                            name="cardLink"
                            id="cardLink"
                            value={document.cardLink}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 1
                          </label>
                          <input
                            type="text"
                            name="cardTitle1"
                            id="cardTitle1"
                            value={document.cardTitle1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle1_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 1_en
                          </label>
                          <input
                            type="text"
                            name="cardTitle1_en"
                            id="cardTitle1_en"
                            value={document.cardTitle1_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 1
                          </label>
                          <input
                            type="text"
                            name="cardText1"
                            id="cardText1"
                            value={document.cardText1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText1_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 1_en
                          </label>
                          <input
                            type="text"
                            name="cardText1_en"
                            id="cardText1_en"
                            value={document.cardText1_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardLink1"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Baglantisi 1
                          </label>
                          <input
                            type="text"
                            name="cardLink1"
                            id="cardLink1"
                            value={document.cardLink1}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 2
                          </label>
                          <input
                            type="text"
                            name="cardTitle2"
                            id="cardTitle2"
                            value={document.cardTitle2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle2_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 2_en
                          </label>
                          <input
                            type="text"
                            name="cardTitle2_en"
                            id="cardTitle2_en"
                            value={document.cardTitle2_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 2
                          </label>
                          <input
                            type="text"
                            name="cardText2"
                            id="cardText2"
                            value={document.cardText2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText2_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 2_en
                          </label>
                          <input
                            type="text"
                            name="cardText2_en"
                            id="cardText2_en"
                            value={document.cardText2_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardLink2"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Baglantisi 2
                          </label>
                          <input
                            type="text"
                            name="cardLink2"
                            id="cardLink2"
                            value={document.cardLink2}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle3"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 3
                          </label>
                          <input
                            type="text"
                            name="cardTitle3"
                            id="cardTitle3"
                            value={document.cardTitle3}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle3_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 3_en
                          </label>
                          <input
                            type="text"
                            name="cardTitle3_en"
                            id="cardTitle3_en"
                            value={document.cardTitle3_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText3"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 3
                          </label>
                          <input
                            type="text"
                            name="cardText3"
                            id="cardText3"
                            value={document.cardText3}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText3_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 3_en
                          </label>
                          <input
                            type="text"
                            name="cardText3_en"
                            id="cardText3_en"
                            value={document.cardText3_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardLink"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Baglantisi 3
                          </label>
                          <input
                            type="text"
                            name="cardLink3"
                            id="cardLink3"
                            value={document.cardLink3}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle4"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 4
                          </label>
                          <input
                            type="text"
                            name="cardTitle4"
                            id="cardTitle4"
                            value={document.cardTitle4}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle4_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 4_en
                          </label>
                          <input
                            type="text"
                            name="cardTitle4_en"
                            id="cardTitle4_en"
                            value={document.cardTitle4_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText4"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 4
                          </label>
                          <input
                            type="text"
                            name="cardText4"
                            id="cardText4"
                            value={document.cardText4}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText4_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 4_en
                          </label>
                          <input
                            type="text"
                            name="cardText4_en"
                            id="cardText4_en"
                            value={document.cardText4_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardLink4"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Baglantisi 4
                          </label>
                          <input
                            type="text"
                            name="cardLink4"
                            id="cardLink4"
                            value={document.cardLink4}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                      <div className="border p-4 mb-4 border-gray-600 rounded bg-zinc-700">
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle5"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 5
                          </label>
                          <input
                            type="text"
                            name="cardTitle5"
                            id="cardTitle5"
                            value={document.cardTitle5}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardTitle5_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Adi 5_en
                          </label>
                          <input
                            type="text"
                            name="cardTitle5_en"
                            id="cardTitle5_en"
                            value={document.cardTitle5_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText5"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 5
                          </label>
                          <input
                            type="text"
                            name="cardText5"
                            id="cardText5"
                            value={document.cardText5}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardText5_en"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Icerigi 5_en
                          </label>
                          <input
                            type="text"
                            name="cardText5_en"
                            id="cardText5_en"
                            value={document.cardText5_en}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="cardLink5"
                            className="block text-sm font-medium text-gray-200"
                          >
                            Dokuman Baglantisi 5
                          </label>
                          <input
                            type="text"
                            name="cardLink5"
                            id="cardLink5"
                            value={document.cardLink5}
                            onChange={handleChange}
                            className="mt-1 p-2 rounded-sm w-full"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-4">
                      <button
                        type="button"
                        onClick={() => navigate("/document")}
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
