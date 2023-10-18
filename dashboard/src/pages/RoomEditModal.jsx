import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";

const RoomEditModal = ({ roomId }) => {
  const navigate = useNavigate();
  const [theFeature, setTheFeature] = useState([]);
  const [room, setRoom] = useState({});
  const [selectedRoomFeatures, setSelectedRoomFeatures] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  console.log(roomId);

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
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <div className="font-medium mt-1 text-blue-600 dark:text-red-500 hover:underline">
          <AiOutlineEdit />
        </div>
      </button>
      {showModal && (
        <>
          <div className="justify-center items-center text-white flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[1000px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-zinc-800 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Oda Ekle</h3>
                  <button
                    className="p-1 ml-auto  border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mx-auto mt-4 text-black">
                  <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-x-4">
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
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
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
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
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
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
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
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4">
                      <label
                        htmlFor="roomFeatures"
                        className="block text-sm font-medium text-gray-200 mb-2"
                      >
                        Oda Ozellikleri
                      </label>
                      <div className="flex flex-row flex-wrap space-x-2">
                        {theFeature.map((feature, index) => (
                          <div key={index} className="">
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
                              className="ml-2 text-sm font-medium text-gray-200"
                            >
                              {feature.TurkishFeature}
                            </label>
                          </div>
                        ))}
                      </div>
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
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Kapat
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Değişiklikleri Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default RoomEditModal;
