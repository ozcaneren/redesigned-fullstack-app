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
    <div>
      <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        <div className="container xl:max-w-6xl mx-auto px-4">
          {serviceTitles.map((service, index) => (
            <header key={index} className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
                {service.mainTitle}
              </h2>
              <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                {service.mainText}
              </p>
            </header>
          ))}
          <div className="flex flex-wrap flex-row justify-center items-center mx-4 text-center">
            {serviceCards.map((service, index) => (
              <div key={index} className="px-4 sm:w-1/2 lg:w-1/3 lg:px-6">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <img src={service.cardIcon} alt="" />
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    {service.cardTitle}
                  </h3>
                  <p className="text-gray-500 line-clamp-3">
                    {service.cardText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
