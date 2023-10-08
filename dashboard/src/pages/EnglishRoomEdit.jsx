import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

function EnglishRoomEdit() {
  const { roomId } = useParams();

  const [englishRoom, setEnglishRoom] = useState({});

  const navigate = useNavigate();

  const [theFeature_en, setTheFeature_en] = useState([]);

  const [selectedEnglishRoomFeatures, setSelectedEnglishRoomFeatures] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/${roomId}/edit`, label: "Oda Düzenle" },
  ];

  const fetchEnglishRoomById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/room/english/${roomId}`
      );
      setEnglishRoom(response.data.data);
      setSelectedEnglishRoomFeatures(response.data.data.roomFeatures_en || []);
    } catch (error) {
      console.error("Oda getirilirken hata oluştu:", error);
    }
  }, [roomId]);

  useEffect(() => {
    fetchEnglishRoomById();
  }, [fetchEnglishRoomById, roomId]);

  const getExtraFeatures_en = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/extrafeatures/english"
      );
      setTheFeature_en(response.data.data);
    } catch (error) {
      console.error("Ekstra özellikler getirilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    getExtraFeatures_en();
  }, []);

  const handleUpdate_en = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/room/english/${roomId}`, {
        ...englishRoom,
        roomFeature_en: selectedEnglishRoomFeatures,
      });
      navigate("/room");
    } catch (error) {
      console.error("Oda güncellenirken hata oluştu:", error);
    }
  };

  const handleChange_en = (e) => {
    const { name, value } = e.target;

    if (name === "roomVisibility_en") {
      setEnglishRoom((prevRoom) => ({
        ...prevRoom,
        [name]: value === "true",
      }));
    } else {
      setEnglishRoom((prevRoom) => ({
        ...prevRoom,
        [name]: value,
      }));
    }
  };

  const toggleEnglishRoomFeature = (englishFeatureId) => {
    if (selectedEnglishRoomFeatures.includes(englishFeatureId)) {
      setSelectedEnglishRoomFeatures(
        selectedEnglishRoomFeatures.filter((id) => id !== englishFeatureId)
      );
    } else {
      setSelectedEnglishRoomFeatures([...selectedEnglishRoomFeatures, englishFeatureId]);
    }
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
                  <form onSubmit={handleUpdate_en}>
                    <div className="mb-4">
                      <label
                        htmlFor="roomType_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Türü
                      </label>
                      <input
                        type="text"
                        id="roomType_en"
                        name="roomType_en"
                        value={englishRoom.roomType_en || ""}
                        onChange={handleChange_en}
                        required
                        className="mt-1 p-2 w-full rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomTitle_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Adı
                      </label>
                      <input
                        type="text"
                        id="roomTitle_en"
                        name="roomTitle_en"
                        value={englishRoom.roomTitle_en || ""}
                        onChange={handleChange_en}
                        required
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomDescription_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Açıklama
                      </label>
                      <textarea
                        id="roomDescription_en"
                        name="roomDescription_en"
                        value={englishRoom.roomDescription_en || ""}
                        onChange={handleChange_en}
                        required
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomShortDescription_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Kısa Açıklama
                      </label>
                      <input
                        type="text"
                        id="roomShortDescription_en"
                        name="roomShortDescription_en"
                        value={englishRoom.roomShortDescription_en || ""}
                        onChange={handleChange_en}
                        required
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Özellikler
                      </label>
                      {theFeature_en.map((englishFeature, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            id={englishFeature._id}
                            name={englishFeature.EnglishFeature}
                            type="checkbox"
                            checked={selectedEnglishRoomFeatures.includes(
                              englishFeature.EnglishFeature
                            )}
                            onChange={() =>
                              toggleEnglishRoomFeature(englishFeature.EnglishFeature)
                            }
                            className="h-4 w-4"
                          />
                          <label
                            htmlFor={englishFeature.EnglishFeature}
                            className="ml-3 text-sm font-medium text-gray-200"
                          >
                            {englishFeature.EnglishFeature}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomVisibility_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Durum
                      </label>
                      <select
                        id="roomVisibility_en"
                        name="roomVisibility_en"
                        value={englishRoom.roomVisibility_en ? "true" : "false"}
                        onChange={handleChange_en}
                        required
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      >
                        <option value="true">Aktif</option>
                        <option value="false">Gizli</option>
                      </select>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => navigate("/room")}
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

export default EnglishRoomEdit;
