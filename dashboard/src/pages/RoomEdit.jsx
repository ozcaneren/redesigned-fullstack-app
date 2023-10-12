import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

function RoomEdit() {
  const { roomId } = useParams();

  const [room, setRoom] = useState({});

  const navigate = useNavigate();

  const [theFeature, setTheFeature] = useState([]);

  const [selectedRoomFeatures, setSelectedRoomFeatures] = useState([]);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/${roomId}/edit`, label: "Oda Düzenle" },
  ];

  const fetchRoomById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/room/turkish/${roomId}`
      );
      setRoom(response.data.data);
      setSelectedRoomFeatures(response.data.data.roomFeatures || []);
    } catch (error) {
      console.error("Oda getirilirken hata oluştu:", error);
    }
  }, [roomId]);

  useEffect(() => {
    fetchRoomById();
  }, [fetchRoomById, roomId]);

  const getExtraFeatures = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/extrafeatures/turkish"
      );
      setTheFeature(response.data.data);
    } catch (error) {
      console.error("Ekstra özellikler getirilirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    getExtraFeatures();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/room/turkish/${roomId}`, {
        ...room,
        roomFeatures: selectedRoomFeatures,
      });
      navigate("/room");
    } catch (error) {
      console.error("Oda güncellenirken hata oluştu:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "roomVisibility") {
      setRoom((prevRoom) => ({
        ...prevRoom,
        [name]: value === "true",
      }));
    } else {
      setRoom((prevRoom) => ({
        ...prevRoom,
        [name]: value,
      }));
    }
  };

  const toggleRoomFeature = (featureId) => {
    if (selectedRoomFeatures.includes(featureId)) {
      setSelectedRoomFeatures(
        selectedRoomFeatures.filter((id) => id !== featureId)
      );
    } else {
      setSelectedRoomFeatures([...selectedRoomFeatures, featureId]);
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
                  <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                      <label
                        htmlFor="roomType"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Türü
                      </label>
                      <input
                        type="text"
                        id="roomType"
                        name="roomType"
                        value={room.roomType || ""}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomType_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Türü_en
                      </label>
                      <input
                        type="text"
                        id="roomType_en"
                        name="roomType_en"
                        value={room.roomType_en}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomTitle"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Adı
                      </label>
                      <input
                        type="text"
                        id="roomTitle"
                        name="roomTitle"
                        value={room.roomTitle || ""}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomTitle_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Adı_en
                      </label>
                      <input
                        type="text"
                        id="roomTitle_en"
                        name="roomTitle_en"
                        value={room.roomTitle_en}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomDescription"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Açıklama
                      </label>
                      <textarea
                        id="roomDescription"
                        name="roomDescription"
                        value={room.roomDescription || ""}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomDescription_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Açıklama_en
                      </label>
                      <textarea
                        id="roomDescription_en"
                        name="roomDescription_en"
                        value={room.roomDescription_en}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomShortDescription"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Kısa Açıklama
                      </label>
                      <input
                        type="text"
                        id="roomShortDescription"
                        name="roomShortDescription"
                        value={room.roomShortDescription || ""}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomShortDescription_en"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Kısa Açıklama_en
                      </label>
                      <input
                        type="text"
                        id="roomShortDescription_en"
                        name="roomShortDescription_en"
                        value={room.roomShortDescription_en}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full bg-white rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-200 mb-2">
                        Özellikler
                      </label>
                      {theFeature.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <input
                            id={feature._id}
                            name={feature.TurkishFeature}
                            type="checkbox"
                            checked={selectedRoomFeatures.includes(
                              feature.TurkishFeature
                            )}
                            onChange={() =>
                              toggleRoomFeature(feature.TurkishFeature)
                            }
                            className="h-4 w-4"
                          />
                          <label
                            htmlFor={feature.TurkishFeature}
                            className="ml-3 text-sm font-medium text-gray-200"
                          >
                            {feature.TurkishFeature}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="roomVisibility"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Durum
                      </label>
                      <select
                        id="roomVisibility"
                        name="roomVisibility"
                        value={room.roomVisibility ? "true" : "false"}
                        onChange={handleChange}
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

export default RoomEdit;
