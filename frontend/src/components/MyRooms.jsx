import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyRooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

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

  const handleCardClick = (id) => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="py-14">
            <h1 className="text-center text-3xl text-[#0C3B59]">Odalarımız</h1>
            <div className="grid grid-cols-3 gap-8 justify-center mt-8">
              {rooms.map((room, index) =>
                room.roomVisibility ? (
                  <div key={index} className="">
                    <div className="max-w-md bg-white p-2 rounded overflow-hidden shadow-lg hover:shadow-xl">
                      <img
                        className="w-full"
                        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                        alt="Property Image"
                      />
                      <div className="px-4 py-2">
                        <div className="flex flex-row justify-between items-center pt-2">
                          <h2 className="text-xl font-bold text-gray-900 truncate">
                            {room.roomTitle}
                          </h2>
                          <button
                            onClick={handleCardClick}
                            className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                          >
                            Daha Fazla
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyRooms;
