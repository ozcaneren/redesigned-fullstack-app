import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";

function RoomEdit() {
  const { roomId } = useParams();
  const [room, setRoom] = useState({});
  const navigate = useNavigate();

  const fetchRoomById = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/room/${roomId}`
      );
      setRoom(response.data.data);
    } catch (error) {
      console.error("Error fetching room:", error);
    }
  }, [roomId]);

  useEffect(() => {
    fetchRoomById();
  }, [fetchRoomById, roomId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/room/${roomId}`, room);
      navigate("/room");
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "visibility") {
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

  return (
    <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900">
      <Navbar />
      <Sidebar />
      <div className="ml-14 mt-14 mb-10 md:ml-64">
        <div className="p-4">
          <h2 className="text-center text-3xl text-gray-200">Oda Duzenle</h2>
          <div className="max-w-3xl mx-auto mt-4">
            <form onSubmit={handleUpdate}>
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Oda Adı
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={room.title || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Oda Turu
                </label>
                <input
                  type="text"
                  id="type"
                  name="type"
                  value={room.type || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 bg-white border-gray-300 w-full border  rounded-md"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Detay
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={room.description || ""}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Durum
                </label>
                <select
                  id="visibility"
                  name="visibility"
                  value={room.visibility ? "true" : "false"}
                  onChange={handleChange}
                  required
                  className="mt-1 p-2 w-full bg-white border-gray-300 border rounded-md"
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
                  Iptal
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
  );
}

export default RoomEdit;
