import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../LanguageContext";

export default function Services() {
  const { language } = useLanguage();
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/services");
      setServices(response.data.data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <div className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white">
        {services.map((service, index) => (
          <div key={index} className="container xl:max-w-6xl mx-auto px-4">
            <header className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
                {language === "tr" ? service.mainTitle : service.mainTitle_en}
              </h2>
              <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                {language === "tr" ? service.mainText : service.mainText_en}
              </p>
            </header>
            <div className="flex flex-wrap flex-row justify-center items-center mx-4 text-center">
              <div className="px-4 w-[314px] h-[222px] sm:w-1/2 lg:w-1/3 lg:px-6">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    {language === "tr"
                      ? service.cardTitle
                      : service.cardTitle_en}
                  </h3>
                  <p className="text-gray-500 line-clamp-3">
                    {language === "tr" ? service.cardText : service.cardText_en}
                  </p>
                </div>
              </div>
              <div className="px-4 w-[314px] h-[222px] sm:w-1/2 lg:w-1/3 lg:px-6">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    {language === "tr"
                      ? service.cardTitle1
                      : service.cardTitle1_en}
                  </h3>
                  <p className="text-gray-500 line-clamp-3">
                    {language === "tr"
                      ? service.cardText1
                      : service.cardText1_en}
                  </p>
                </div>
              </div>
              <div className="px-4 w-[314px] h-[222px] sm:w-1/2 lg:w-1/3 lg:px-6">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    {language === "tr"
                      ? service.cardTitle2
                      : service.cardTitle2_en}
                  </h3>
                  <p className="text-gray-500 line-clamp-3">
                    {language === "tr"
                      ? service.cardText2
                      : service.cardText2_en}
                  </p>
                </div>
              </div>
              <div className="px-4 w-[314px] h-[222px] sm:w-1/2 lg:w-1/3 lg:px-6">
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    {language === "tr"
                      ? service.cardTitle3
                      : service.cardTitle3_en}
                  </h3>
                  <p className="text-gray-500 line-clamp-3">
                    {language === "tr"
                      ? service.cardText3
                      : service.cardText3_en}
                  </p>
                </div>
              </div>
              {service.cardTitle4 || service.cardText4 ? (
                <div className="px-4 w-[314px] h-[222px] sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                      {language === "tr"
                        ? service.cardTitle4
                        : service.cardTitle4_en}
                    </h3>
                    <p className="text-gray-500 line-clamp-3">
                      {language === "tr"
                        ? service.cardText4
                        : service.cardText4_en}
                    </p>
                  </div>
                </div>
              ) : null}
              {service.cardTitle5 || service.cardText5 ? (
                <div className="px-4 w-[314px] h-[222px] sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
                  <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                    <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                      {language === "tr"
                        ? service.cardTitle5
                        : service.cardTitle5_en}
                    </h3>
                    <p className="text-gray-500 line-clamp-3">
                      {language === "tr"
                        ? service.cardText5
                        : service.cardText5_en}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
