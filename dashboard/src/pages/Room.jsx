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

  const handleDelete = async (roomId) => {
    try {
      await axios.delete(`http://localhost:4000/api/room/${roomId}`);
      getRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/room/${id}/edit`);
  };
  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-[#f6f5f0] text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-14 mb-10 md:ml-64">
          <div className="flex justify-center items-center">
            <div className="w-5/6 bg-[#e2e2e2c7] border border-gray-300 rounded pt-8 pb-4">
              <div className="flex justify-center items-center">
                <div className="w-11/12 flex justify-center">
                  <div className="w-11/12 relative overflow-x-auto">
                    <button className="bg-[#084ccf] p-2 text-white text-sm border border-gray-300 rounded-[6px]">
                      Yeni Oda Ekle
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-11/12 flex justify-center py-4 rounded-sm">
                  <div className="w-11/12 relative rounded-[6px] overflow-x-auto border-2">
                    <table className="text-sm w-full text-left text-[#202020]">
                      <thead className="text-xs uppercase bg-[#788fb9] text-gray-200">
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
                        <tbody className="" key={index}>
                          <tr className="border-b-1 border-gray-300 bg-[#f6f6f8] hover:bg-gray-100">
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
                              className="px-6 py-4 font-medium whitespace-nowrap"
                            >
                              {room.title}
                            </th>
                            <td className="px-6 py-4">{room.type}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center">
                                <div
                                  className={`bg-${
                                    room.visibility ? "green-500" : "red-500"
                                  } text-${
                                    room.visibility ? "green-500" : "red-500"
                                  }  h-2.5 w-2.5 rounded-full mr-2`}
                                ></div>{" "}
                                {room.visibility ? "Aktif" : "Gizli"}
                              </div>
                            </td>
                            <td className="flex items-center pl-7 py-4 space-x-2">
                              <button onClick={() => handleCardClick(room._id)}>
                                <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
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
        </div>
      </div>
    </div>
  );
}
