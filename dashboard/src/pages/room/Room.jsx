import Sidebar from "../../components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs";
import Modal from "./RoomModal";
import RoomEditModal from "./RoomEditModal";

export default function Room() {
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState([]);

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

  const handleCheckboxChange = (roomId) => {
    if (selectedRoom.includes(roomId)) {
      setSelectedRoom(selectedRoom.filter((id) => id !== roomId));
    } else {
      setSelectedRoom([...selectedRoom, roomId]);
    }
  };

  const handleMasterCheckboxChange = () => {
    if (selectedRoom.length === rooms.length) {
      setSelectedRoom([]);
    } else {
      setSelectedRoom(rooms.map((room) => room._id));
    }
  };

  const handleEditSelected = () => {
    setShowModal(true);
  };

  const handleDeleteSelected = () => {
    selectedRoom.map((roomId) => handleDelete(roomId));
  };

  return (
    <div className="">
      <div className="bg-background text-white min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased ">
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
                    <div className="w-full px-4 relative">
                      <Modal />
                    </div>
                    <div className="ml-auto mr-4">
                      <button
                        onClick={handleEditSelected}
                        className="px-5 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      >
                        Düzenle
                      </button>
                      {showModal && (
                        <RoomEditModal
                          showModal={showModal}
                          setShowModal={setShowModal}
                          roomId={selectedRoom}
                        />
                      )}
                    </div>
                    <div className="ml-auto">
                      <button
                        onClick={handleDeleteSelected}
                        className="px-5 py-2 mr-2 bg-red-500 text-white rounded hover:bg-red-600"
                      >
                        Sil
                      </button>
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
                              <th scope="col" className="p-4 w-[10px]">
                                  <div className="flex items-center">
                                    <input
                                      id="checkbox-all"
                                      type="checkbox"
                                      onChange={
                                        handleMasterCheckboxChange
                                      }
                                      checked={
                                        selectedRoom.length === rooms.length
                                      }
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label className="sr-only">checkbox</label>
                                  </div>
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 pl-6 font-medium tracking-wider text-left w-[400px]"
                                >
                                  Oda Turu
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 font-medium tracking-wider text-left w-[400px]"
                                >
                                  Oda Adı
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 font-medium tracking-wider text-left w-[400px]"
                                >
                                  Durum
                                </th>
                                <th
                                  scope="col"
                                  className="py-3 font-medium tracking-wider text-left w-[400px]"
                                >
                                  Sayfa
                                </th>
                              </tr>
                            </thead>
                            {rooms.map((room, index) => (
                              <tbody key={index} className="bg-slate-600 ">
                                <tr className="hover:bg-gray-500">
                                <td className="px-4 py-5 flex items-center max-w-[320px] w-[10px]">
                                    <input
                                      type="checkbox"
                                      id={`checkbox-${room._id}`}
                                      onChange={() =>
                                        handleCheckboxChange(room._id)
                                      }
                                      checked={selectedRoom.includes(
                                        room._id
                                      )}
                                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                  </td>
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 max-w-xs px-6 font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {room.roomType}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="max-w-[320px] w-[320px]">
                                    <div className="py-4 pr-6 max-w-xs font-medium text-gray-200 truncate">
                                      <p className="truncate">
                                        {room.roomTitle}
                                      </p>
                                    </div>
                                  </td>
                                  <td className="py-4 max-w-xs font-medium text-gray-200 whitespace-nowrap">
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
                                  <td className="py-4 max-w-xs font-medium text-gray-200 whitespace-nowrap">
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
