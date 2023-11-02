import axios from "axios";
import { useEffect, useState } from "react";

export default function Services() {
  const [serviceCards, setServiceCards] = useState([]);
  const [serviceTitles, setServiceTitles] = useState([]);

  const getServiceCards = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/service/cards"
      );
      setServiceCards(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServiceCards();
  }, []);

  const getServiceTitles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/service/titles"
      );
      setServiceTitles(response.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServiceTitles();
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="container mx-auto">
          <div className="flex justify-center flex-col items-center text-center py-6">
            <h1 className="text-3xl text-[#0C3B59]">
              Online Rezervasyon Yapın
            </h1>
            <div className="flex justify-center items-center border border-gray-200 mt-8">
              <div className="p-2">
                <label
                  htmlFor=""
                  className="block text-left text-sm "
                >
                  Özellik
                </label>
                <input
                  type="text"
                  className="shadow bg-white border w-full py-2 px-3leading-tight focus:outline-none focus:shadow-outline"
                  value={"09.11.2023"}
                />
              </div>
              <div className="p-2">
                <label
                  htmlFor=""
                  className="block text-left text-sm"
                >
                  Özellik
                </label>
                <input
                  type="text"
                  className="shadow bg-white border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={"09.11.2023"}
                />
              </div>
              <div className="p-2">
                <label
                  htmlFor=""
                  className="block text-left text-sm"
                >
                  Özellik
                </label>
                <input
                  type="text"
                  className="shadow bg-white border w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={"09.11.2023"}
                />
              </div>

              <div className="p-2">
                <button className="px-3 py-2 mt-5 bg-fuchsia-300 rounded-lg">
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
