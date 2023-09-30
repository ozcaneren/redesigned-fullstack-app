import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Divide from "../components/Divide";

// import { useNavigate } from "react-router-dom";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  // const navigate = useNavigate();

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

  // const handleCardClick = (id) => {
  //   navigate(`/rooms/${id}`);
  // };

  return (
    <div className="min-h-screen antialiased bg-gray-300">
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <div className="pt-14">
            <div className="grid grid-cols-3 gap-8 justify-center">
              {rooms.map((room, index) => (
                <div key={index} className="mt-14">
                  <div className="max-w-sm bg-gray-200 rounded overflow-hidden shadow-lg hover:shadow-xl">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                      alt="Property Image"
                    />
                    <div className="px-6 py-4">
                      <div className="mb-2">
                        <h2 className="text-xl font-bold text-gray-900">
                          {room.title}
                        </h2>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/windows/24/null/bedroom.png" />
                          <p className="ml-2 text-sm font-medium text-gray-700">
                            {room.features}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png" />
                          <p className="ml-2 text-sm font-medium text-gray-700">
                            2 Bathrooms
                          </p>
                        </div>
                        <div className="flex items-center">
                          <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png" />
                          <p className="ml-2 text-sm font-medium text-gray-700">
                            120 sqm
                          </p>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-3xl font-extrabold text-blue-800">
                          ${room.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Divide />
      <Footer />
    </div>
  );
}
