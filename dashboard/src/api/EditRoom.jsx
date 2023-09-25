import axios from "axios";
import { useState, useEffect, useCallback } from "react";

const EditRoom = ({ roomId, onClose, onUpdate }) => {
  const [room, setRoom] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getRoomById = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://localhost:4000/api/room/${roomId}`
      );
      setRoom(response.data.data);
    } catch (error) {
      console.error("Error fetching room:", error);
    } finally {
      setIsLoading(false);
    }
  }, [roomId]);

  useEffect(() => {
    getRoomById();
  }, [getRoomById, roomId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/room/${roomId}`, room);
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-3xl">Oda Duzenle</h2>
      {isLoading ? (
        <p className="text-center text-4xl">Yukleniyor...</p>
      ) : (
        <div className="max-w-3xl mx-auto mt-4">
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Oda Turu
              </label>
              <input
                type="text"
                id="type"
                name="type"
                value={room.type || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 bg-gray-600 w-full border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Oda Adı
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={room.title || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full bg-gray-600 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Detay
              </label>
              <textarea
                id="description"
                name="description"
                value={room.description || ""}
                onChange={handleInputChange}
                required
                className="mt-1 p-2 w-full bg-gray-600 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
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
      )}
    </div>
  );
};

export default EditRoom;