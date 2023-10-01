import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { BsArrowReturnLeft, BsWhatsapp } from "react-icons/bs";

function RoomDetail() {
  const { id } = useParams();
  const [rooms, setRooms] = useState([]);

  const getRoom = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/room/${id}`);
      setRooms([response.data.data]);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  useEffect(() => {
    getRoom(id);
  }, [id]);

  return (
    <div>
      <div>
        <div>
          <Header />
          <div className="mt-14 min-h-screen bg-gray-200">
            {rooms.map((room, index) => (
              <div key={index}>
                <div className="md:flex items-start justify-center pb-12 pt-28 2xl:px-20 md:px-6 px-4">
                  <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                    <img
                      className="w-full"
                      src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80"
                      alt="Property Image"
                    />
                  </div>
                  <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
                    <div className="border-b border-gray-200 pb-6">
                      <p className="text-sm leading-none text-gray-600">
                        {room.type}
                      </p>
                      <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-800 mt-2">
                        {room.title}
                      </h1>
                    </div>
                    <button className="uppercase focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none text-white bg-blue-300 w-full py-4 hover:bg-gray-700 focus:outline-none">
                      yer ayirttir
                    </button>
                    <div>
                      <p className="text-base leading-normal text-gray-600 mt-7">
                        {room.description}
                      </p>
                    </div>
                    <div>
                      <div className="border-t border-b py-4 mt-7 border-gray-500">
                        <div className="flex justify-between items-center cursor-pointer">
                          <Link to="/rooms">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">
                              <span>Odalara geri dön</span>
                              <BsArrowReturnLeft className="ml-2" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="border-b py-4 border-gray-500">
                        <div className="flex justify-between items-center cursor-pointer">
                          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center">
                            <span>Detaylar için bizimle iletişime geçiniz</span>
                            <BsWhatsapp className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
