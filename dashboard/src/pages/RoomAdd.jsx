import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

const RoomAdd = () => {
  const navigate = useNavigate();

  const [theFeature, setTheFeature] = useState([]);

  const [roomType, setRoomType] = useState("");
  const [roomTitle, setRoomTitle] = useState("");
  const [roomDescription, setRoomDescription] = useState("");
  const [roomShortDescription, setRoomShortDescription] = useState("");
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [roomVisibility, setRoomVisibility] = useState(true);

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/room", label: "Odalar" },
    { url: `/room/add`, label: "Yeni Oda Ekle" },
  ];

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

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Navbar />
      <Sidebar />
      <div className="ml-14 mt-14 mb-10 md:ml-64">
        <div className="pt-8 pb-4 px-4">
          <div className="w-3/12">
            <div className="">
              <Breadcrumb paths={breadcrumbPaths} />
            </div>
          </div>
        </div>
          <div className="p-4">
            <div className="flex justify-center items-center">
              <div className="w-full flex justify-center rounded-sm bg-zinc-800">
                <div className="w-full relative rounded-[6px] p-4 overflow-x-auto">
                  <h2 className="text-center text-3xl text-gray-200">
                    Yeni Oda Ekle
                  </h2>
                  <div className="mx-auto mt-4">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label
                          htmlFor="type"
                          className="block text-sm font-medium text-gray-200 mb-2"
                        >
                          Oda Tipi
                        </label>
                        <input
                          type="text"
                          name="type"
                          value={roomType}
                          onChange={(e) => setRoomType(e.target.value)}
                          className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-sm"
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-200 mb-2"
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
                          className="block text-sm font-medium text-gray-200 mb-2"
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
                          className="block text-sm font-medium text-gray-200 mb-2"
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
                          className="block text-sm font-medium text-gray-200 mb-2"
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
                                className="mx-2 text-white"
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
                          className="block text-sm font-medium text-gray-200 mb-2"
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
                      <button
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        type="submit"
                      >
                        Add Room
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default RoomAdd;
