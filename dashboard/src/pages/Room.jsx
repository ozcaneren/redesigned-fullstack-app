import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


export default function Room() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const getRooms = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/rooms");
      setRooms(response.data.data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getRooms();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/room/${id}/edit`);
  };

  const handleDelete = async (roomId) => {
    try {
      await axios.delete(`http://localhost:4000/api/room/${roomId}`);
      getRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#25242a] text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex justify-center p-4">
            <div className="w-9/12 relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="text-sm w-full text-left text-gray-400">
                <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-all-search"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="checkbox-all-search"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Urun Adi
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Urun Turu
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Gorunurluk
                    </th>
                    <th scope="col" className="pl-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {rooms.map((room, index) => (
                  <tbody key={index}>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            id="checkbox-table-search-1"
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="checkbox-table-search-1"
                            className="sr-only"
                          >
                            checkbox
                          </label>
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {room.title}
                      </th>
                      <td className="px-6 py-4">{room.type}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className={`bg-${
                              room.visibility ? "green-400" : "red-500"
                            }  h-2.5 w-2.5 rounded-full mr-2`}
                          ></div>{" "}
                          {room.visibility ? "Aktif" : "Gizli"}
                        </div>
                      </td>
                      <td className="flex items-center px-6 py-4 space-x-3">
                        <button onClick={() => handleCardClick(room._id)}>
                          <div
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                          >
                            <AiOutlineEdit />
                          </div>
                        </button>
                        <button onClick={() => handleDelete(room._id)}>
                          <div className="font-medium text-red-600 dark:text-red-500 hover:underline">
                            <HiOutlineTrash />
                          </div>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
