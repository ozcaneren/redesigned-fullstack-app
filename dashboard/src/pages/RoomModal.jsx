import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Modal() {
  const navigate = useNavigate();

  const [theFeature, setTheFeature] = useState([]);

  const [roomType, setRoomType] = useState("");
  const [roomTitle, setRoomTitle] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomShortDescription, setRoomShortDescription] = useState("");
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [roomVisibility, setRoomVisibility] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newRoom = {
        roomType: roomType,
        roomTitle: roomTitle,
        roomDescription: roomDescription,
        roomShortDescription: roomShortDescription,
        roomFeatures: roomFeatures,
        roomVisibility: roomVisibility,
      };
      await axios.post("http://localhost:4000/api/room/turkish", newRoom);
      navigate("/room");
      setRoomType("");
      setRoomTitle("");
      setRoomDescription("");
      setRoomShortDescription("");
      setRoomFeatures([]);
      setRoomVisibility(true);
    } catch (err) {
      console.log(err);
    }
  };

  const submitForm = async () => {
    try {
      const newRoom = {
        roomType: roomType,
        roomTitle: roomTitle,
        roomDescription: roomDescription,
        roomShortDescription: roomShortDescription,
        roomFeatures: roomFeatures,
        roomVisibility: roomVisibility,
      };
      await axios.post("http://localhost:4000/api/room/turkish", newRoom);
      navigate("/room");
      setRoomType("");
      setRoomTitle("");
      setRoomDescription("");
      setRoomShortDescription("");
      setRoomFeatures([]);
      setRoomVisibility(true);
    } catch (err) {
      console.log(err);
    }
  };

  const getExtraFeatures = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/extrafeatures/turkish"
      );
      setTheFeature(response.data.data);
    } catch (error) {
      console.error("Error fetching features:", error);
    }
  };

  useEffect(() => {
    getExtraFeatures();
  }, []);

  const handleFeature = (e) => {
    const value = e.target.value;
    if (roomFeatures.includes(value)) {
      setRoomFeatures(roomFeatures.filter((item) => item !== value));
    } else {
      setRoomFeatures([...roomFeatures, value]);
    }
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-[#474E68] p-2 text-white text-sm rounded-[6px]"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Yeni Oda Ekle
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-[1000px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#f7f9fa] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blue-200 rounded-t">
                  <h3 className="text-3xl text-[#65647C] font-semibold">Oda Ekle</h3>
                  <button
                    className="p-1 ml-auto  border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-[#65647C] h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="mx-auto mt-4 text-black">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        htmlFor="type"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Oda Tipi
                      </label>
                      <select
                        type="text"
                        name="type"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                        className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                      >
                        <option value="">Seç</option>
                        <option value="standart">Standart</option>
                        <option value="family">Family</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Oda Adı
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={roomTitle}
                        onChange={(e) => setRoomTitle(e.target.value)}
                        className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Açıklama
                      </label>
                      <input
                        type="text"
                        name="description"
                        value={roomDescription}
                        onChange={(e) => setRoomDescription(e.target.value)}
                        className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="shortDescription"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Kısa Açıklama
                      </label>
                      <input
                        type="text"
                        name="shortDescription"
                        value={roomShortDescription}
                        onChange={(e) =>
                          setRoomShortDescription(e.target.value)
                        }
                        className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="features"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Özellikler
                      </label>
                      <div>
                        {theFeature.map((item) => (
                          <label className="" key={item._id}>
                            <input
                              type="checkbox"
                              name="features"
                              value={item.TurkishFeature}
                              onChange={handleFeature}
                              className=""
                            />
                            <label
                              className="mx-2 text-[#131318]"
                              htmlFor="features"
                            >
                              {item.TurkishFeature}
                            </label>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="visibility"
                        className="block text-sm font-medium text-[#3d3d4d] mb-2"
                      >
                        Durum
                      </label>
                      <select
                        name="visibility"
                        value={roomVisibility ? "true" : "false"}
                        onChange={(e) =>
                          setRoomVisibility(e.target.value === "true")
                        }
                        className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                      >
                        <option value="">Seç</option>
                        <option value="true">Aktif</option>
                        <option value="false">Gizli</option>
                      </select>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blue-200 rounded-b">
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
                      submitForm();
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
      ) : null}
    </>
  );
}
