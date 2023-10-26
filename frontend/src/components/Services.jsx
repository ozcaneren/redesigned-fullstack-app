import axios from "axios";
import { useEffect, useState } from "react";

const categories = {
  hepsi: {
    image:
      "https://cdn.sanity.io/images/iwbp3b7a/production/f1ab647fc55886bbf799a490a805825e9132b38a-16305x11467.jpg?w=2560&auto=format",
    text: "Explore Our",
    mainTextURL:
      "https://cdn.sanity.io/images/iwbp3b7a/production/a87e4f2fd7daf75103f9c08508834845c063b265-419x152.svg?w=1024",
  },
  ascilik: {
    image:
      "https://cdn.sanity.io/images/iwbp3b7a/production/e5a71896929c469e84552de321902f005f0877b1-610x1072.svg?w=250",
    text: "Aşçılık Kategorisi",
    subText:
      "Château Boll, Usta Şefimiz tarafından düzenlenen, Fransız ve Asya mutfağına dalmanıza olanak tanıyan özel yemek pişirme dersleri sunmaktadır. ",
  },
  dogalPark: {
    image:
      "https://cdn.sanity.io/images/iwbp3b7a/production/65b76cd2bc61acb161fb6d7bd2e8c469cd7823b3-1047x1237.svg?w=250",
    text: "Doğal Park Kategorisi",
    subText:
      "Château Boll, benzersiz manzaralar ve deneyimler sunan Montagne de Reims milli parkı içinde yer almaktadır. Château Boll arazisinde, sizi bu muhteşem özel atmosferde yürüyüşe çıkmaya ve dinlenmeye davet eden 4 hektarlık bir park bulunmaktadır.",
  },
  spa: {
    image: "https://cdn.sanity.io/images/iwbp3b7a/production/14d2dab62025ca5de2356785e34da33c682b7ef6-1885x993.svg?w=250",
    text: "Spa Kategorisi",
    subText: "Xia Spa, Fin Saunası ve Hamamı içeren özel spa alanı sunmaktadır. Xia Spa ayrıca tesis bünyesinde masaj uygulamaları ve özel yoga dersleri sunmaktadır; bunların tümü size en üst düzeyde rahatlama sağlamaya adanmıştır."
  },
  icecek: {
    image: "https://cdn.sanity.io/images/iwbp3b7a/production/3638c6da158127403e34d80d870341c170f5c067-978x1119.svg?w=250",
    text: "Alkol ve İçecekler Kategorisi",
    subText: "Château Boll, özel bir şarap mahzeni ve şarap tadım odasına sahiptir. Şarap mahzeni, Château Boll'un tarihi dokusunu yansıtan, özel olarak tasarlanmış bir ortamda, şarap tadımı ve şarap eğitimi için ideal bir yerdir."
  },
  spor: {
    image: "https://cdn.sanity.io/images/iwbp3b7a/production/a36918a0baeb91e1bd86e966d86c27c733ef825b-301x467.svg?w=250",
    text: "Spor Kategorisi",
    subText: "Château Boll, özel bir şarap mahzeni ve şarap tadım odasına sahiptir. Şarap mahzeni, Château Boll'un tarihi dokusunu yansıtan, özel olarak tasarlanmış bir ortamda, şarap tadımı ve şarap eğitimi için ideal bir yerdir."
  }
};

export default function Services() {
  const [serviceCards, setServiceCards] = useState([]);
  const [serviceTitles, setServiceTitles] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("hepsi");

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

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="">
        <div className="">
          {serviceTitles.map((service, index) => (
            <header key={index} className="text-center relative">
              <div className="">
                {selectedCategory === "hepsi" ? (
                  <div className="h-[930px] w-[1920px]">
                    <img
                      src={categories[selectedCategory].image}
                      className="h-[930px] w-[1920px] object-cover object-bottom"
                      alt=""
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <h1 className="text-black uppercase font-light font-space leading-loose text-2xl absolute top-[10%] w-full text-center">
                        {categories[selectedCategory].text}
                      </h1>
                      {categories[selectedCategory].mainTextURL ? (
                        <img
                          className="mb-80"
                          height={220}
                          width={680}
                          src={categories[selectedCategory].mainTextURL}
                          alt=""
                        />
                      ) : null}
                    </div>
                  </div>
                ) : (
                  <div className="h-[930px] w-[1920px] bg-[#E7D9DA] space-x-28 flex justify-center items-center flex-row">
                    <img
                      src={categories[selectedCategory].image}
                      className={selectedCategory === "dogalPark" ? "w-[600px] h-[600px]" : "w-[600px] h-[600px]"}
                      alt=""
                    />
                    <div className="text-black font-light font-space w-[600px] leading-loose">
                      <h1 className="text-black uppercase font-light leading-relaxed text-5xl font-serif">
                        {categories[selectedCategory].text}
                      </h1>
                      <p className="text-black text-xl font-base leading-7 pt-8 flex-wrap">
                        {categories[selectedCategory].subText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </header>
          ))}
          <div>
            <ul className="flex flex-row border-y border-black justify-center items-center text-xl cursor-pointer">
              <li
                className="border-x border-black py-4 px-8"
                onClick={() => handleCategoryClick("hepsi")}
              >
                Hepsi
              </li>
              <li
                className="border-r border-black py-4 px-8"
                onClick={() => handleCategoryClick("ascilik")}
              >
                Aşçılık
              </li>
              <li
                className="border-r border-black py-4 px-8"
                onClick={() => handleCategoryClick("dogalPark")}
              >
                Doğal Park
              </li>
              <li
                className="border-r border-black py-4 px-8"
                onClick={() => handleCategoryClick("spa")}
              >
                Spa
              </li>
              <li
                className="border-r border-black py-4 px-8"
                onClick={() => handleCategoryClick("icecek")}
              >
                Alkol ve İçecekler
              </li>
              <li
                className="border-r border-black py-4 px-8"
                onClick={() => handleCategoryClick("spor")}
              >
                Spor
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-wrap flex-row justify-center items-center mx-4 text-center">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
