import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
// import { useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumbs";
import Modal from "./RoomModal";
import RoomEditModal from "./RoomEditModal";
import { TbEdit } from "react-icons/tb";

export default function Room() {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [roomId, setRoomId] = useState();
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

  const handleCardClick = (roomId) => {
    setRoomId(roomId);
    setShowModal(true);
  };

  return (
    <div className="">
      <div className= "bg-background text-white min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased ">
        <Sidebar />
        <div className="ml-14 mb-10 md:ml-64">
          <div className="pt-4 pb-4 px-4 ">
            <div className="w-2/12">
              <div className="">
                <Breadcrumb paths={breadcrumbPaths} />
              </div>
            </div>
          </div>
          <div className="p-4">
            <div className="bg-white rounded border border-gray-200/70 pt-4 pb-4">
              <div className="flex flex-row">
                <div className="flex justify-center items-center">
                  <div className="w-full flex justify-center">
                    <div className="w-full px-4 relative space-x-2">
                      <div>
                        <Modal />
                      </div>
                    </div>
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
                            <thead className="bg-gray-400 text-white">
                              <tr>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                                >
                                  Oda Turu
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                                >
                                  Oda Adı
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 text-xs font-medium tracking-wider text-left uppercase w-[400px]"
                                >
                                  Durum
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 text-xs font-medium tracking-wider text-left  uppercase w-[400px]"
                                >
                                  Sayfa
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 flex justify-end pr-6 text-xs font-medium tracking-wider uppercase"
                                >
                                  Islemler
                                </th>
                              </tr>
                            </thead>
                            {rooms.map((room, index) => (
                              <tbody key={index} className="bg-slate-600 ">
                                <tr className="hover:bg-gray-500">
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
                                  <td className="py-4 flex justify-end pr-8 text-sm font-medium text-gray-200 whitespace-nowrap">
                                    <button
                                      onClick={() => handleCardClick(room._id)}
                                    >
                                      <div className="font-medium mt-1 mr-1 text-blue-400 hover:underline">
                                        <TbEdit size={20} />
                                      </div>
                                    </button>
                                    {showModal && (
                                      <RoomEditModal
                                        showModal={showModal}
                                        setShowModal={setShowModal}
                                        roomId={roomId}
                                      />
                                    )}
                                    <button
                                      onClick={() => handleDelete(room._id)}
                                    >
                                      <div className="font-medium mt-1 text-red-600 hover:underline">
                                        <HiOutlineTrash size={20} />
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
