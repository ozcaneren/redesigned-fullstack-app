import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumbs";

export default function Room() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const breadcrumbPaths = [
    { url: "/", label: "Ana Sayfa" },
    { url: "/odalar", label: "Odalar" },
  ];
  const getRooms = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/rooms/turkish"
      );
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
      await axios.delete(`http://localhost:4000/api/room/turkish/${roomId}`);
      getRooms();
    } catch (error) {
      console.error("Error deleting room:", error);
    }
  };

  const handleCardClick = (id) => {
    navigate(`/room/turkish/${id}/edit`);
  };

  const handleAddRoom = () => {
    navigate("/room/add");
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-zinc-900 text-white">
        <Navbar />
        <Sidebar />
        <div className="ml-14 mt-20 md:mt-14 mb-10 md:ml-64">
          <div className="pt-8 pb-4 px-4">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-zinc-800 rounded pt-4 pb-4">
              <div className="flex justify-center items-center">
                <div className="w-full flex justify-center">
                  <div className="w-full px-4 relative space-x-2">
                    <button
                      onClick={handleAddRoom}
                      className="bg-zinc-700 p-2 text-white text-sm border border-gray-600 rounded-[6px]"
                    >
                      Yeni Oda Ekle
                    </button>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div className="max-w-full mx-auto px-4 pt-4">
                    <div className="overflow-x-auto shadow-md sm:rounded-lg">
                      <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden">
                          <table className="min-w-full table-fixed">
                            <thead className="bg-zinc-600">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 text-xs font-medium tracking-wider text-left text-gray-100 uppercase w-[400px]"
                                >
                                  Oda Turu
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase w-[400px]"
                                >
                                  Oda Adı
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase w-[400px]"
                                >
                                  Durum
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase w-[400px]"
                                >
                                  Sayfa
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider text-gray-100 uppercase"
                                >
                                  Islemler
                                </th>
                              </tr>
                            </thead>
                            {rooms.map((room, index) => (
                              <tbody key={index} className="bg-zinc-700 ">
                                <tr className="hover:bg-zinc-800">
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 max-w-xs px-6 text-sm font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {room.roomType}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 text-sm pr-6 max-w-xs font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {room.roomTitle}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-4 text-sm max-w-xs font-medium text-gray-200 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div
                                        className={`bg-${
                                          room.roomVisibility
                                            ? "green-500"
                                            : "red-500"
                                        } text-${
                                          room.roomVisibility
                                            ? "green-500"
                                            : "red-500"
                                        }  h-2.5 w-2.5 rounded-full mr-2`}
                                      ></div>{" "}
                                      {room.roomVisibility ? "Aktif" : "Gizli"}
                                    </div>
                                  </td>
                                  <td className="py-4 text-sm max-w-xs font-medium text-gray-200 whitespace-nowrap">
                                    <div className="flex items-center">
                                      <div
                                        className={`bg-${
                                          room.roomVisibility
                                            ? "green-500"
                                            : "red-500"
                                        } text-${
                                          room.roomVisibility
                                            ? "green-500"
                                            : "red-500"
                                        }  h-2.5 w-2.5 rounded-full mr-2`}
                                      ></div>{" "}
                                      {room.roomVisibility ? "Aktif" : "Gizli"}
                                    </div>
                                  </td>
                                  <td className="py-4 flex justify-end pr-10 text-sm font-medium text-gray-200 whitespace-nowrap space-x-2">
                                    <button
                                      onClick={() => handleCardClick(room._id)}
                                    >
                                      <div className="font-medium mt-1 text-blue-600 dark:text-blue-500 hover:underline">
                                        <AiOutlineEdit />
                                      </div>
                                    </button>
                                    <button
                                      onClick={() => handleDelete(room._id)}
                                    >
                                      <div className="font-medium mt-1 text-red-600 dark:text-red-500 hover:underline">
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
        </div>
      </div>
    </div>
  );
}
