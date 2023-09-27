import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

const RoomAdd = () => {
  const navigate = useNavigate();

  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [features, setFeatures] = useState([]);
  const [price, setPrice] = useState("");
  const [visibility, setVisibility] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newRoom = {
        type: type,
        title: title,
        description: description,
        shortDescription: shortDescription,
        features: features,
        price: price,
        visibility: visibility,
      };
      await axios.post("http://localhost:4000/api/room", newRoom);
      navigate("/room");
      setType("");
      setTitle("");
      setDescription("");
      setShortDescription("");
      setFeatures([]);
      setPrice("");
      setVisibility(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Navbar />
      <Sidebar />
      <div className="ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-4">
          <div className="max-w-3xl mx-auto mt-4">
            <h1 className="text-2xl text-center font-semibold text-gray-200 mb-4">
              Yeni Oda Ekle
            </h1>
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
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
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
                  value={shortDescription}
                  onChange={(e) => setShortDescription(e.target.value)}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="features"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Özellikler
                </label>
                <input
                  type="text"
                  name="features"
                  value={features.join(", ")}
                  onChange={(e) => setFeatures(e.target.value.split(", "))}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Fiyat
                </label>
                <input
                  type="number"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
                />
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
                  value={visibility ? "true" : "false"}
                  onChange={(e) => setVisibility(e.target.value === "true")}
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
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
  );
};

export default RoomAdd;
