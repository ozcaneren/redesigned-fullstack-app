import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import PropTypes from "prop-types";

const RoomEditModal = ({ roomId, showModal, setShowModal }) => {
  RoomEditModal.propTypes = {
    roomId: PropTypes.string.isRequired,
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
  };
  const [theFeature, setTheFeature] = useState([]);
  const [room, setRoom] = useState({});
  const [selectedRoomFeatures, setSelectedRoomFeatures] = useState([]);

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

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/room/turkish/${roomId}`, {
        ...room,
        roomFeatures: selectedRoomFeatures,
      });
      setShowModal(false); // İşlem başarılı olduğunda modalı kapat
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
      {showModal && (
        <>
          <div className="justify-center items-center text-white flex overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[1000px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#f7f9fa] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-200 rounded-t">
                  <h3 className="text-3xl text-[#65647C] font-semibold">
                    Oda Duzenle
                  </h3>
                  <button
                    className="p-1 ml-auto  border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-[#65647C] h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mx-auto mt-4 text-black">
                  <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-x-4 border-b border-solid border-[#dbdbf1] mb-4">
                      <div className="mb-4">
                        <label
                          htmlFor="roomType"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Oda Türü
                        </label>
                        <select
                          type="text"
                          id="roomType"
                          name="roomType"
                          value={room.roomType || ""}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        >
                          <option value="">Seç</option>
                          <option value="standart">Standart</option>
                          <option value="family">Family</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="roomType_en"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Oda Türü_en
                        </label>
                        <select
                          type="text"
                          id="roomType_en"
                          name="roomType_en"
                          value={room.roomType_en || ""}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        >
                          <option value="">Seç</option>
                          <option value="standart">Standart</option>
                          <option value="family">Family</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 border-b border-solid border-[#dbdbf1] mb-4">
                      <div className="mb-4">
                        <label
                          htmlFor="roomTitle"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Oda Adı
                        </label>
                        <input
                          type="text"
                          id="roomTitle"
                          name="roomTitle"
                          value={room.roomTitle || ""}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="roomTitle_en"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Oda Adı_en
                        </label>
                        <input
                          type="text"
                          id="roomTitle_en"
                          name="roomTitle_en"
                          value={room.roomTitle_en}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 border-b border-solid border-[#dbdbf1] mb-4">
                      <div className="mb-4">
                        <label
                          htmlFor="roomDescription"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Açıklama
                        </label>
                        <textarea
                          id="roomDescription"
                          name="roomDescription"
                          value={room.roomDescription || ""}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="roomDescription_en"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Açıklama_en
                        </label>
                        <textarea
                          id="roomDescription_en"
                          name="roomDescription_en"
                          value={room.roomDescription_en}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4">
                      <div className="mb-4">
                        <label
                          htmlFor="roomShortDescription"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Kısa Açıklama
                        </label>
                        <input
                          type="text"
                          id="roomShortDescription"
                          name="roomShortDescription"
                          value={room.roomShortDescription || ""}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="roomShortDescription_en"
                          className="block text-sm font-medium text-[#3d3d4d] mb-2"
                        >
                          Kısa Açıklama_en
                        </label>
                        <input
                          type="text"
                          id="roomShortDescription_en"
                          name="roomShortDescription_en"
                          value={room.roomShortDescription_en}
                          onChange={handleChange}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center mb-4">
                      <label
                        htmlFor="roomFeatures"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
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
                              className="ml-2 text-sm font-medium text-[#131318]"
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
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Durum
                      </label>
                      <select
                        id="roomVisibility"
                        name="roomVisibility"
                        value={room.roomVisibility ? "true" : "false"}
                        onChange={handleChange}
                        required
                        className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
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
                    className="bg-[#353A4E] text-white background-transparent font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Kapat
                  </button>
                  <button
                    className="bg-[#353A4E] text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleUpdate();
                      setShowModal(false);
                    }}
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-[1px] backdrop-opacity-80 backdrop-brightness-90 fixed inset-0 z-40"></div>
        </>
      )}
    </>
  );
};

export default RoomEditModal;
